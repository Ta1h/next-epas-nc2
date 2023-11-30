'use client'
import React, { FC, useEffect, useState} from 'react'
import { ChevronLeft} from 'lucide-react'
import Link from 'next/link'
import { Lesson } from '@prisma/client'
import Image from 'next/image'


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
        className="flex text-sm text-black mt-2"
      >
        <ChevronLeft className="h-5" />
        <h1>Lesson Section | Unit</h1>
      </Link>
      <div className="flex ml-2 mt-2">
        <h1 className="font-semibold w-full text-xl">
          {decodeURIComponent(lessonId[1])}
          {decodeURIComponent(lessonId[2])}
        </h1>
      </div>

      <Image
        priority
        width="100"
        height="100"
        alt="Logo"
        src={'/lesson background.svg'}
        className='mx-auto w-max mt-28'
      />
      <div className='h-auto scale-90 absolute top-32 right-72 mr-1 mt-5'>
        {lesson.map((lessons) => (
          <div key={lessons.id}>
            {lessons.id === lessonId[0] && (
              <div className='w-full flex justify-center'>
                <iframe
                  width="700"
                  height="580"
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
