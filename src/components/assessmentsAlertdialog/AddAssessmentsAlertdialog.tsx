import React, { useState } from 'react'
import axios from 'axios' // You need to import Axios for making API requests
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
import { Plus } from 'lucide-react'
import { Input } from '../ui/Input'

const AddAssessmentsAlertdialog = () => {
  const [question, setQuestion] = useState('')
  const [answers, setAnswers] = useState(['', '', '', ''])
  const [correctAnswer, setCorrectAnswer] = useState('')

  const handleAnswerChange = (index: number, value: string) => {
    const newAnswers = [...answers]
    newAnswers[index] = value
    setAnswers(newAnswers)
  }

  const addAssessment = async () => {
    const data = {
      question,
      answers,
      correctAnswer,
    }

    try {
      // Send the data to your API using Axios
      const response = await axios.post('/api/create-assessment', data)
      console.log('Assessment added:', response.data)
    } catch (error) {
      console.error('Error adding assessment:', error)
    }
  }

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger className="bg-transparent text-black border-2 border-black hover:bg-black hover:text-white rounded-md px-4 py-2 flex items-center text-sm">
          <Plus className="h-5" />
          Add
        </AlertDialogTrigger>
        <AlertDialogContent className="w-full max-w-sm">
          <AlertDialogHeader className="flex justify-center items-center mb-6">
            <AlertDialogTitle className="mb-6">Add Question</AlertDialogTitle>
            <AlertDialogDescription>
              <Input
                placeholder="Question"
                className="mb-3"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
              Choices:
              {answers.map((answer, index) => (
                <Input
                  key={index}
                  placeholder={`Answer ${index + 1}`}
                  className="ml-7 mt-2 mb-3"
                  value={answer}
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                />
              ))}
              <Input
                placeholder="Correct Answer"
                className="mt-3"
                value={correctAnswer}
                onChange={(e) => setCorrectAnswer(e.target.value)}
              />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-white text-green-600 border-2 border-green-600 hover:bg-green-600 hover:text-white"
              onClick={addAssessment}
            >
              <Plus className="h-5" />
              Add
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

export default AddAssessmentsAlertdialog
