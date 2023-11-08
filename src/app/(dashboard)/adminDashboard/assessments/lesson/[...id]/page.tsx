'use client'
import AddAssessmentsAlertdialog from '@/components/assessmentsAlertdialog/AddAssessmentsAlertdialog'
import DeleteAssessmentsAlertdialog from '@/components/assessmentsAlertdialog/DeleteAssessmentsAlertdialog'
import EditAssessmentsAlertdialog from '@/components/assessmentsAlertdialog/EditAssessmentsAlertdialog'
import { Question } from '@/types/data'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import React, { FC } from 'react'
import { useEffect, useState } from 'react'

interface props {
  params: { id: string }
}

const page: FC<props> = ({ params }) => {
  const [questions, setQuestion] = useState<Array<Question>>([])
  const lessonId = params.id // uri from unit
  const lessonNumber = decodeURIComponent(lessonId[1])
  const lessonTitle = decodeURIComponent(lessonId[2])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/assessment/question', {
          method: 'GET',
        })

        if (response.ok) {
          const data = await response.json()
          setQuestion(data)
        } else if (response.status === 404) {
          console.log('No question found')
        } else {
          console.error('Something went wrong')
        }
      } catch (error) {
        console.error('Error:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="p-10">
      <Link
        href={
          '/adminDashboard/assessments/unit/' +
          lessonId[3] +
          '/' +
          lessonId[4] +
          '/' +
          lessonId[5]
        }
        className="flex text-sm text-gray-500 "
      >
        <ChevronLeft className="h-5" />
        <h1>back</h1>
      </Link>
      <div className="flex">
        <h1 className="font-semibold w-full text-xl pl-2 pb-10">
          {lessonNumber}
          {lessonTitle}
        </h1>
        <div className="justify-end mr-10 ">
          <AddAssessmentsAlertdialog />
        </div>
      </div>
      <div className="grid justify-center items-center lg:grid-cols-2 gap-7">
        {questions.map((route) => (
          <div key={route.id}>
            {lessonId[0] === route.lesson.id ? (
              <div className="flex-col w-full space-y-3 p-5 rounded-md shadow-[0px_3px_8px_0px_#00000024]">
                <h1 className="font-semibold">{route.text}</h1>
                <div>
                  {route.choices.map((choice, index) => (
                    <ul key={choice.id}>
                      <li
                        className={`pl-7 ${
                          route.correctAnswer.choiceId === choice.id
                            ? 'font-bold text-green-500'
                            : ''
                        }`}
                      >
                        {String.fromCharCode(97 + index)}) {choice.text}
                      </li>
                    </ul>
                  ))}
                </div>
                <div className="flex justify-end space-x-2">
                  <EditAssessmentsAlertdialog />
                  <DeleteAssessmentsAlertdialog />
                </div>
              </div>
            ) : (
              'no questions'
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default page
