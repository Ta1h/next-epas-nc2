import React, { useState } from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { FileEdit } from 'lucide-react'
import { Input } from '../ui/Input'

const EditAssessmentsAlertdialog: React.FC<{ lessonId: string }> = ({ lessonId }) => {
  const [question, setQuestion] = useState('');
  const [choices, setChoices] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');

  const handleAdd = async () => {
    try {
      const response = await fetch('/api/assessment/question', {
        method: 'POST',
        body: JSON.stringify({
          id: lessonId+'question',
          text: question,
          lessonId: lessonId,
          choices: choices.map((choice) => ({
          text: choice,
          value: choice === correctAnswer ? 1 : 0,
          })),
        }),
      });

      console.log('Response:', response);
      if (response.ok) {
        console.log('Question added successfully');
        window.location.reload();
      } else {
        console.error('Failed to add question');
      }
    } catch (error) {
      console.error('Error in adding question: ', error);
    }
  };

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger className="bg-transparent text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 flex items-center rounded-md text-sm">
          <FileEdit className="h-4" />
          Edit
        </AlertDialogTrigger>
        <AlertDialogContent className="w-full max-w-sm">
          <AlertDialogHeader className="flex justify-center items-center mb-6">
            <AlertDialogTitle className="mb-6">Edit Question</AlertDialogTitle>
            <AlertDialogDescription>
              <Input
                placeholder="Question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="mb-3"
              />
              Choices:
              {choices.map((choice, index) => (
                <Input
                  key={index}
                  placeholder={`Choice ${index + 1}`}
                  value={choice}
                  onChange={(e) => {
                    const updatedChoices = [...choices];
                    updatedChoices[index] = e.target.value;
                    setChoices(updatedChoices);
                  }}
                  className="ml-7 mt-2 mb-3"
                />
              ))}
              <Input
                placeholder="Correct Answer"
                value={correctAnswer}
                onChange={(e) => setCorrectAnswer(e.target.value)}
                className="mt-3"
              />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleAdd}
              className="bg-transparent text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 flex items-center rounded-md text-sm"
            >
              <FileEdit className="h-4" />
              Edit
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default EditAssessmentsAlertdialog;
