'use client'
import { Choice, Lesson, Question } from '@/types/data'
import React, { FC, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import SubmitAssessmentsAlertdialog from '@/components/assessmentsAlertdialog/SubmitAssessmentsAlertdialog'
import RetakeAssessmentsAlertdialog from '@/components/assessmentsAlertdialog/RetakeAssessmentsAlertdialog'
import { useSession } from 'next-auth/react'
import { error } from 'console'

interface Props {
  params: { id: string }
}

const Page: FC<Props> = ({ params }) => {
  const lessonId = params.id
  const [questions, setQuestions] = useState<Array<Question>>([])
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({})
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0);
  const [retakeScore, setRetakeScore] = useState(0);
  const [scoreLength, setpreTestLenght] = useState(0)
  const [answerSelected, setAnswerSelected] = useState(false)
  const [shuffledChoices, setShuffledChoices] = useState<Choice[]>([])
  const [quizSubmitted, setQuizSubmitted] = useState(false)
  const [scoreSubmitted, setScoreSubmitted] = useState(false)
  const [retakeClicked, setRetakeClicked] = useState(false);
  const [isUserEmailInScoreData, setIsUserEmailInScoreData] = useState(false);
  const [lessons, setLessons] = useState<Array<Lesson>>([])
  const selectedLesson: Lesson[] = lessons.filter((lesson) => lesson.unitId === lessonId[0]);
  const session = useSession();
  const userEmail = session.data?.user.email;
  
  console.log(selectedLesson)

  function shuffleArray(array: Choice[]) {
    const shuffledArray = [...array]
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffledArray[i], shuffledArray[j]]
       = [ shuffledArray[j], shuffledArray[i]]
    }
    return shuffledArray
  }

  interface ScoreData {
    lessonId: string;
    preTestScore: number;
    preTestLenght: number;
    userEmail: string;
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const scoreResponse = await fetch(`/api/assessment/score`, {
          method: 'GET',
        });
        
        if (scoreResponse.ok) {
          const scoreDataArray: ScoreData[] = await scoreResponse.json();
  
          
          const preTestScoreData = scoreDataArray.find(
            (scoreData) => scoreData.lessonId === lessonId[0]
          );

          console.log(preTestScoreData?.userEmail)
          console.log(userEmail)

          const doesUserEmailExist = scoreDataArray.some((score) => score.userEmail === userEmail);
          
          console.log(doesUserEmailExist)

          if (doesUserEmailExist) {
            const matchingScore = scoreDataArray.find((score) => score.userEmail === userEmail);

            if (preTestScoreData && preTestScoreData.preTestScore !== undefined && matchingScore) {
              const matchingUserEmail = matchingScore.userEmail;
              console.log('Matching userEmail:', matchingUserEmail);
              setIsUserEmailInScoreData(true);
  
              setQuizSubmitted(true);
              setScore(preTestScoreData.preTestScore);              
              setpreTestLenght(preTestScoreData.preTestLenght);
            } else {
              console.log('No preTestScore found in the response for the specified lesson.');
            }
          } else {
            console.log('No matching userEmail found in scoreDataArray.');
          }

          
        } else {
          console.log('Failed to fetch score data. Status:', scoreResponse.status);
        }

        const response = await fetch('/api/lessons', {
          method: 'GET',
        })
        if (response.ok) {
          const data = await response.json()
          console.log(data)
          setLessons(data)
        } else if (response.status === 404) {
          console.log('No units found')
        } else {
          console.error('Something went wrong')
        }

      } catch (error) {
        console.error('Error:', error);
      }
    }
  
    fetchData();
  }, [lessonId, score]);  

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/assessment/question', {
          method: 'GET',
        });
  
        if (response.ok) {
          const data = await response.json();
          if (data.length > 0) {
            const filteredQuestions = data.filter(
              (question: Question) => question.lesson.unitId === lessonId[0]
            );
            console.log('Fetched Questions:', filteredQuestions);
            setQuestions(filteredQuestions)
          } else {
            console.log('No questions found');
          }
        } else {
          console.log('Failed to fetch questions. Status:', response.status);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  
    fetchData();
  }, [lessonId]);  


  useEffect(() => {
    if (currentQuestionIndex < questions.length) {
      const currentQuestion = questions[currentQuestionIndex]
      const shuffled = shuffleArray([...currentQuestion.choices])
      setShuffledChoices(shuffled)
    }
  }, [currentQuestionIndex, questions])

  const goToNextQuestion = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setAnswerSelected(false)
    }
  }

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
      setAnswerSelected(false)
    }
  }

  const handleAnswerClick = (selectedAnswer: string) => {
    const currentQuestion = questions[currentQuestionIndex];

    setUserAnswers({
      ...userAnswers,
      [currentQuestion.id]: selectedAnswer,
    });

    const selectedChoice = currentQuestion.choices.find((choice) => choice.id === selectedAnswer);

    if (selectedChoice && selectedChoice.value === 1) {
      setScore((prevScore) => prevScore + 1);
    }

    setAnswerSelected(true);
  }

  useEffect(() => {
    setScore(0)
  }, [lessonId[0]])

  useEffect(() => {
    // Check if the score has been submitted, and if so, make the API POST request
    if (scoreSubmitted) {
      const submitScoreToAPI = async () => {
        try {
          const response = await fetch('/api/assessment/score', {
            method: 'POST',
            body: JSON.stringify({
              preTestScore: score,
              preTestLenght: scoreLength,
              userEmail: userEmail,
              unitId: lessonId[0],
              lessonId: questions.length > 0 ? questions[2].lessonId : null,
            }),
          })

          if (response.ok) {
            // const newScore = await response.json()
            console.log('Score submitted successfully')
          } else {
            console.error('Failed to submit score')
          }
        } catch (error) {
          console.error('Error:', error)
        }
      }

      submitScoreToAPI()
    }
  }, [score, scoreSubmitted])

  const submitTest = async () => {
    try {
      // Process each lesson separately
      selectedLesson.forEach(async (lesson) => {
        const lessonQuestions = questions.filter((question) => question.lessonId === lesson.id);
  
        const payloadArray = lessonQuestions
          .slice(0, 1) // Take only the first item
          .map((question) => ({
            preTestScore: score,
            preTestLength: lessonQuestions.length,
            lessonScore: 0,
            lessonLength: 0,
            userEmail: userEmail,
            unitId: lesson.unitId,
            lessonId: question.lessonId,
          }));

  
        console.log(`Generated Payload for Lesson ${lesson.id}:`, payloadArray);
  
        const response = await fetch('/api/assessment/score', {
          method: 'POST',
          body: JSON.stringify(payloadArray),
        });
  
        if (response.ok) {
          console.log('Score submitted successfully');
          setScoreSubmitted(true);
        } else{
          const errorData = await response.json().catch(() => ({}));
          console.error('Failed to submit score:', errorData.message || 'Unknown error');
        }
        
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };
        
  useEffect(() => {
    console.log('Component re-rendered after retakeClicked change:', retakeClicked);
    if (retakeClicked) {

      setQuizSubmitted(false);
      setScoreSubmitted(false);
      setCurrentQuestionIndex(0);
      setUserAnswers({});
    }
  }, [retakeClicked]);

  const retakeQuiz = async () => {
    try {
      let retakeScore = 0;
      const scoreId = lessonId[3]+lessonId[0];

      console.log('before map: ',retakeScore);

      questions.forEach((question) => {
        const selectedQuestionId = question.id;
        const selectedChoiceId = userAnswers[selectedQuestionId];
    
        if (selectedChoiceId) {
          const selectedChoice = question.choices.find(
            (choice) => choice.id === selectedChoiceId
          );
    
          if (selectedChoice) {
            retakeScore += selectedChoice.value;
          }
        }
      });

      console.log('after map: ',retakeScore);

      const response = await fetch(`/api/assessment/score/id/${scoreId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          id: scoreId,
          preTestScore: retakeScore,
        }),
      });

      console.log('insde PATCH: ',response.json())

      if (response.ok) {
        setRetakeScore(retakeScore);
        setScore(0);
        setQuizSubmitted(true);
        setScoreSubmitted(false);
        setCurrentQuestionIndex(0);
        setUserAnswers({});
        console.log('Score updated successfully');
      } else {
        console.error('Failed to update score')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }; 

  return (
    <div className="px-10 pt-6 h-full">
      <Link
        href={
          '/userDashboard/assessment/preTest'
        }
        className="flex text-sm text-gray-500"
      >
        <ChevronLeft className="h-5" />
        <h1>Assessment | Pre-Test</h1>
      </Link>
      <div className="flex mb-6 ml-2">
        <h1 className="font-semibold w-full text-xl">
          {decodeURIComponent(lessonId[1])}
          {decodeURIComponent(lessonId[2])}
        </h1>
      </div>
      <div className='mb-6 flex justify-center'>
        <h1>Question {currentQuestionIndex+1} of {questions.length}</h1>
      </div>

      <div className="w-full">
        {quizSubmitted && isUserEmailInScoreData ? (
          <div className="flex-col mx-60 p-10 rounded-md shadow-[0px_3px_8px_0px_#00000024]">
            {score >= scoreLength * 0.6 || retakeScore >= scoreLength * 0.6 ? (
              <div className="flex-col mb-5">
                <h1 className="text-3xl font-semibold text-green-600">
                  Congratulations!
                </h1>
                <p>
                  You have passed the test, you can now move to the next test.
                </p>
              </div>
            ) : (
              <div className="flex-col mb-5">
                <h1 className="text-3xl font-semibold text-red-600">Failed!</h1>
                <p>
                  Proceed to the recommendation, it&apos;s designed to help you for your Post-Test.
                </p>
              </div>
            )}

            <div className="flex font-medium mb-10 text-lg">
              <h1 className="mr-1">Score:</h1>
              <h1 className="w-10 h-7 flex justify-center items-center rounded-md bg-gray-300">
                {retakeScore !== 0 ? retakeScore : score}
              </h1>
              <h2 className=" w-3 h-7 flex justify-center items-center">/</h2>
              <h1 className="w-10 h-7 flex justify-center items-center rounded-md bg-gray-300">
                {scoreLength}
              </h1>
            </div>
            <div className="flex justify-end">
              <Button onClick={() => setRetakeClicked(true)} className="text-sm">
                Retake
              </Button>
            </div>
          </div>
        )  : retakeClicked && isUserEmailInScoreData ? (
          <div
            key={questions[currentQuestionIndex].id}
            className="flex justify-center"
          >
            <div className="flex-col w-full space-y-16 px-10 py-14 rounded-lg shadow-[0px_3px_8px_0px_#00000024]">
              <h1 className="font-semibold">
                {questions[currentQuestionIndex].text}
              </h1>
              <div className="space-y-5">
                {shuffledChoices.map((choice) => (
                  <ul key={choice.id} className="flex items-center">
                    <li className="pl-10">
                      <label className="space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="answer"
                          value={choice.id}
                          checked={
                            userAnswers[questions[currentQuestionIndex].id] ===
                            choice.id
                          }
                          onChange={() => handleAnswerClick(choice.id)}
                        />
                        <span>{choice.text}</span>
                      </label>
                    </li>
                  </ul>
                ))}
              </div>

              <div className="flex justify-center space-x-1">
                <Button
                  variant="empty"
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
                  <div className="flex justify-between w-full">
                    <Button
                      variant="empty"
                      className={`${
                        currentQuestionIndex < questions.length - 1 &&
                        answerSelected
                          ? 'rounded-lg bg-transparent text-black transition-all'
                          : 'rounded-lg bg-transparent text-gray transition-all'
                      }`}
                      onClick={goToNextQuestion}
                      disabled={currentQuestionIndex === questions.length - 1}
                    >
                      next
                      <ChevronRight />
                    </Button>
                    <RetakeAssessmentsAlertdialog
                      onSubmit={() => {
                        retakeQuiz();
                        setRetakeClicked(false)
                      }}
                    />
                  </div>
                ) : (
                  <Button
                    variant="empty"
                    className={`${
                      currentQuestionIndex < questions.length - 1 &&
                      answerSelected
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
        ) : currentQuestionIndex < questions.length && (
          <div
            key={questions[currentQuestionIndex].id}
            className="flex justify-center"
          > 
            <div className="flex-col w-full space-y-16 px-10 py-14 rounded-lg shadow-[0px_3px_8px_0px_#00000024]">
              <h1 className="font-semibold">
                {questions[currentQuestionIndex].text}
              </h1>
              <div className="space-y-5">
                {shuffledChoices.map((choice) => (
                  <ul key={choice.id} className="flex items-center">
                    <li className="pl-10">
                      <label className="space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="answer"
                          value={choice.id}
                          checked={
                            userAnswers[questions[currentQuestionIndex].id] ===
                            choice.id
                          }
                          onChange={() => handleAnswerClick(choice.id)}
                        />
                        <span>{choice.text}</span>
                      </label>
                    </li>
                  </ul>
                ))}
              </div>

              <div className="flex justify-center space-x-1">
                <Button
                  variant="empty"
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
                  <div className="flex justify-between w-full">
                    <Button
                      variant="empty"
                      className={`${
                        currentQuestionIndex < questions.length - 1 &&
                        answerSelected
                          ? 'rounded-lg bg-transparent text-black transition-all'
                          : 'rounded-lg bg-transparent text-gray transition-all'
                      }`}
                      onClick={goToNextQuestion}
                      disabled={currentQuestionIndex === questions.length - 1}
                    >
                      next
                      <ChevronRight />
                    </Button>
                    <SubmitAssessmentsAlertdialog
                      onSubmit={() => {
                        submitTest()
                        setQuizSubmitted(true)
                      }}
                    />
                  </div>
                ) : (
                  <Button
                    variant="empty"
                    className={`${
                      currentQuestionIndex < questions.length - 1 &&
                      answerSelected
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
        )}
      </div>
    </div>
  )
}

export default Page
