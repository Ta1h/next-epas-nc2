'use client'
import React, { FC, useEffect, useState} from 'react'
import { ChevronLeft} from 'lucide-react'
import Link from 'next/link'
import { Lesson } from '@prisma/client'


interface Props {
  params: { id: string }
}

const Page: FC<Props> = ({ params }) => {
  const lessonId = params.id
  const [lesson, setUnits] = useState<Array<Lesson>>([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/lessons', {
          method: 'GET',
        })
        if (response.ok) {
          const data = await response.json()
          setUnits(data)
        } else if (response.status === 404) {
          console.log('No units found')
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
    <div className="px-10 pt-6 h-auto bg-purple-600">
      <Link
        href={
          '/userDashboard/lesson/unit/' +
          lessonId[3] +
          '/' +
          lessonId[4] +
          '/' +
          lessonId[5]
        }
        className="flex text-sm text-black"
      >
        <ChevronLeft className="h-5" />
        <h1>Lesson Section | Unit</h1>
      </Link>
      <div className="flex ml-2">
        <h1 className="font-semibold w-full text-xl">
          {decodeURIComponent(lessonId[1])}
          {decodeURIComponent(lessonId[2])}
        </h1>
      </div>
      <div className='h-auto transform scale-90'>
        {lesson.map((lessons) => (
          <div key={lessons.id}>
            {lessons.id === lessonId[0] && (
              <div className='w-full flex justify-center'>
                <iframe
                  width="1300"
                  height="590"
                  src={lessons.lessonUrl}
                  allowFullScreen
                  className='rounded-xl font-medium'
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page
