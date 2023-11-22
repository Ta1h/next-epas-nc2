'use client'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import React, { FC } from 'react'
import { Lesson } from '@/types/data'
import { useEffect, useState } from 'react'

interface props {
  params: { id: string }
}

const page: FC<props> = ({ params }) => {
  const [lessons, setLessons] = useState<Array<Lesson>>([]) // lessons
  const unitId = params.id // uri from unit
  const unitZero = decodeURIComponent(unitId[0])
  const unitNumber = decodeURIComponent(unitId[1])
  const unitTitle = decodeURIComponent(unitId[2])
  const selectedLesson: Lesson[] = lessons.filter((lesson) => lesson.unitId === unitZero).map((lesson) => lesson);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/lessons', {
          method: 'GET',
        })
        if (response.ok) {
          const data = await response.json()
          setLessons(data)
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
    <div className="px-10 pt-6">
      <Link
        href={'/userDashboard/lesson'}
        className="flex text-sm text-gray-500 "
      >
        <ChevronLeft className="h-5" />
        <h1>Lesson Section</h1>
      </Link>
      <div className="flex">
        <h1 className="font-semibold w-full text-xl pl-2 pb-10">
          {unitNumber} {unitTitle}
        </h1>
      </div>

      <div className="grid justify-center items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {selectedLesson.length > 0 ? (
          selectedLesson.map((lesson)=>(
            <Link
              key={lesson.id}
              href={`/userDashboard/lesson/lesson/${lesson.id}/${lesson.lessonNumber}/${lesson.lessonTitle}/${unitZero}/${unitNumber}/${unitTitle}`}
              className="flex-col p-5 h-36 rounded-md hover:bg-gray-50 shadow-[0px_3px_8px_0px_#00000024]"
            >
              <div>
                <h1 className="font-semibold">{lesson.lessonNumber}</h1>
                <p className="text-xs mb-4">{lesson.lessonTitle}</p>
              </div>
              <div className="flex justify-end items-end space-x-2">
              </div>
            </Link>
          ))
        ):('No lesson')}
      </div>
    </div>
  )
}

export default page
