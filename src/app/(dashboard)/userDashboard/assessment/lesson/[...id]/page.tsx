"use client";
import { Choice, Question } from '@/types/data';
import React, { FC, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import SubmitAssessmentsAlertdialog from '@/components/assessmentsAlertdialog/SubmitAssessmentsAlertdialog';

interface Props {
  params: { id: string };
}

const Page: FC<Props> = ({ params }) => {
  const [questions, setQuestions] = useState<Array<Question>>([]);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({}); 
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answerSelected, setAnswerSelected] = useState(false);
  const [shuffledChoices, setShuffledChoices] = useState<Choice[]>([]);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [retakingQuiz, setRetakingQuiz] = useState(false);
  const [scoreSubmitted, setScoreSubmitted] = useState(false);
  const lessonId = params.id;

  function shuffleArray(array: Choice[]) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/assessment/question', {
          method: 'GET',
        });

        if (response.ok) {
          const data = await response.json();
          if (data.length > 0) {
            const filteredQuestions = data.filter((question: Question) => question.lessonId === lessonId[0]);
            setQuestions(filteredQuestions);
          } else {
            console.log('No questions found');
          }
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchData();
  }, [lessonId]);

  useEffect(() => {
    if (currentQuestionIndex < questions.length) {
      const currentQuestion = questions[currentQuestionIndex];
      const shuffled = shuffleArray([...currentQuestion.choices]);
      setShuffledChoices(shuffled);
    }
  }, [currentQuestionIndex, questions]);

  const goToNextQuestion = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setAnswerSelected(false);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setAnswerSelected(false);
    }
  };

  const handleAnswerClick = (selectedAnswer: string) => {
    setUserAnswers({
      ...userAnswers,
      [questions[currentQuestionIndex].id]: selectedAnswer,
    });

    setAnswerSelected(true);
  };

  useEffect(() => {
    setScore(0);
  }, [lessonId[0]]);

  useEffect(() => {
    // Check if the score has been submitted, and if so, make the API POST request
    if (scoreSubmitted) {
      const submitScoreToAPI = async () => {
        try {
          const response = await fetch('/api/assessment/score', {
            method: 'POST',
            body: JSON.stringify({
              lessonScore: score,
              lessonLength: questions.length,
              userId: 'clnl4x1gv0000ae9wagg1i7kb',
              unitId: lessonId[3],
              lessonId: lessonId[0],
            }),
          });

          if (response.ok) {
            const newScore = await response.json();
            console.log('Score submitted successfully:', newScore);
          } else {
            console.error('Failed to submit score');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

      submitScoreToAPI();
    }
  }, [score, scoreSubmitted]);
  
  const submitTest = () => {
    let finalScore = 0;

    questions.forEach((question) => {
      const selectedQuestionId = question.id;
      const selectedChoiceId = userAnswers[selectedQuestionId];
  
      if (selectedChoiceId) {
        const selectedChoice = question.choices.find(
          (choice) => choice.id === selectedChoiceId
        );
  
        if (selectedChoice) {
          finalScore += selectedChoice.value;
        }
      }
    });
    setScore(finalScore);
    setScoreSubmitted(true);
    // console.log('Final Score: ', finalScore + '/' + questions.length);
  };

  const retakeQuiz = () => {
    setRetakingQuiz(true); // Set the state to start retaking the quiz
    setQuizSubmitted(false); // Reset the quiz submission state
    setCurrentQuestionIndex(0); // Reset the current question index
    setUserAnswers({}); // Reset user answers
  };

  return (
    <div className='p-10 h-full'>
      <Link
        href={
          '/userDashboard/assessment/unit/' +
          lessonId[3] +
          '/' +
          lessonId[4] +
          '/' +
          lessonId[5]
        }
        className='flex text-sm text-gray-500'
      >
        <ChevronLeft className='h-5' />
        <h1>Back</h1>
      </Link>
      <div className='flex mb-12 ml-2'>
        <h1 className='font-semibold w-full text-xl'>
          {decodeURIComponent(lessonId[1])}
          {decodeURIComponent(lessonId[2])}
        </h1>
      </div>

      <div className='w-full'>
        {quizSubmitted ? (
          <div className='flex-col mx-60 p-10 rounded-md shadow-[0px_3px_8px_0px_#00000024]'>

            {score >= (questions.length * 0.8) ? ( 
              <div className='flex-col mb-5'>
                <h1 className='text-3xl font-semibold text-green-600'>Congratulations!</h1>
                <p>You have passed the test, you can now move to the next test.</p>
              </div>
            ) : (
              <div className='flex-col mb-5'>
                <h1 className='text-3xl font-semibold text-red-600'>Failed!</h1>
                <p>You have failed the test the passing rate is 80 percent. You can go to the recommended lesson to review and retake the test.</p>
              </div>
            )}
            
            <div className='flex font-medium mb-10 text-lg'>
              <h1 className='mr-1'>Score:</h1>
              <h1 className='w-10 h-7 flex justify-center items-center rounded-md bg-gray-300'>{score}</h1>
              <h2 className=' w-3 h-7 flex justify-center items-center'>/</h2>
              <h1 className='w-10 h-7 flex justify-center items-center rounded-md bg-gray-300'>{questions.length}</h1>
            </div>
            <div className='flex justify-end'>
              <Button 
                onClick={retakeQuiz}
                className='text-sm'
                >
                Retake
              </Button>
            </div>
          </div>
        ) : retakingQuiz ? (
          <div key={questions[currentQuestionIndex].id} className='flex justify-center mx-6'>
            <div className='flex-col w-full space-y-16 px-10 py-14 rounded-lg shadow-[0px_3px_8px_0px_#00000024]'>
              <h1 className='font-semibold'>
                {questions[currentQuestionIndex].text}
              </h1>
              <div className='space-y-5'>
                {shuffledChoices.map((choice, index) => (
                  <ul key={choice.id}>
                    <li className='pl-10'>
                      <label className='flex items-center space-x-2 cursor-pointer'>
                        <input
                          type='radio'
                          name='answer'
                          value={choice.id}
                          checked={
                            userAnswers[questions[currentQuestionIndex].id] === choice.id
                          }
                          onChange={() => handleAnswerClick(choice.id)}
                        />
                        <span>{choice.text}</span>
                      </label>
                    </li>
                  </ul>
                ))}
              </div>

              <div className='flex justify-center space-x-1'>
                <Button
                  variant='empty'
                  className={`${
                    currentQuestionIndex > 0
                      ? 'rounded-lg bg-transparent text-black transition-all'
                      : 'rounded-lg bg-transparent text-gray transition-all'
                  }`}
                  onClick={goToPreviousQuestion}
                  disabled={currentQuestionIndex === 0}
                >
                  <ChevronLeft />
                  prev
                </Button>

                {currentQuestionIndex === questions.length - 1 ? (
                  <div className='flex justify-between w-full'>
                    <Button
                      variant='empty'
                      className={`${
                        currentQuestionIndex < questions.length - 1 && answerSelected
                          ? 'rounded-lg bg-transparent text-black transition-all'
                          : 'rounded-lg bg-transparent text-gray transition-all'
                      }`}
                      onClick={goToNextQuestion}
                      disabled={currentQuestionIndex === questions.length - 1}
                    >
                      next
                      <ChevronRight />
                    </Button>
                    <SubmitAssessmentsAlertdialog onSubmit={() => { submitTest(); setQuizSubmitted(true); }} />
                  </div>
                ) : (
                  <Button
                    variant='empty'
                    className={`${
                      currentQuestionIndex < questions.length - 1 && answerSelected
                        ? 'rounded-lg bg-transparent text-black transition-all'
                        : 'rounded-lg bg-transparent text-gray transition-all'
                    }`}
                    onClick={goToNextQuestion}
                    disabled={currentQuestionIndex === questions.length - 1}
                  >
                    next
                    <ChevronRight />
                  </Button>
                )}
              </div>
            </div>
          </div>
        ) : currentQuestionIndex < questions.length ? (
          <div key={questions[currentQuestionIndex].id} className='flex justify-center'>
            <div className='flex-col w-full space-y-16 px-10 py-14 rounded-lg shadow-[0px_3px_8px_0px_#00000024]'>
              <h1 className='font-semibold'>
                {questions[currentQuestionIndex].text}
              </h1>
              <div className='space-y-5'>
                {shuffledChoices.map((choice, index) => (
                  <ul key={choice.id} className='flex items-center'>
                    <li className='pl-10'>
                      <label className='space-x-2 cursor-pointer'>
                        <input
                          type='radio'
                          name='answer'
                          value={choice.id}
                          checked={
                            userAnswers[questions[currentQuestionIndex].id] === choice.id
                          }
                          onChange={() => handleAnswerClick(choice.id)}
                        />
                        <span>{choice.text}</span>
                      </label>
                    </li>
                  </ul>
                ))}
              </div>

              <div className='flex justify-center space-x-1'>
                <Button
                  variant='empty'
                  className={`${
                    currentQuestionIndex > 0
                      ? 'rounded-lg bg-transparent text-black transition-all'
                      : 'rounded-lg bg-transparent text-gray transition-all'
                  }`}
                  onClick={goToPreviousQuestion}
                  disabled={currentQuestionIndex === 0}
                >
                  <ChevronLeft />
                  prev
                </Button>

                {currentQuestionIndex === questions.length - 1 ? (
                  <div className='flex justify-between w-full'>
                    <Button
                      variant='empty'
                      className={`${
                        currentQuestionIndex < questions.length - 1 && answerSelected
                          ? 'rounded-lg bg-transparent text-black transition-all'
                          : 'rounded-lg bg-transparent text-gray transition-all'
                      }`}
                      onClick={goToNextQuestion}
                      disabled={currentQuestionIndex === questions.length - 1}
                    >
                      next
                      <ChevronRight />
                    </Button>
                    <SubmitAssessmentsAlertdialog onSubmit={() => { submitTest(); setQuizSubmitted(true); }} />
                  </div>     
                  
                ) : (
                  <Button
                    variant='empty'
                    className={`${
                      currentQuestionIndex < questions.length - 1 && answerSelected
                        ? 'rounded-lg bg-transparent text-black transition-all'
                        : 'rounded-lg bg-transparent text-gray transition-all'
                    }`}
                    onClick={goToNextQuestion}
                    disabled={currentQuestionIndex === questions.length - 1}
                  >
                    next
                    <ChevronRight />
                  </Button>
                )}
              </div>
            </div>
          </div>
        ) : (
          'No questions'
        )}
      </div>
    </div>
  );
};

export default Page;
