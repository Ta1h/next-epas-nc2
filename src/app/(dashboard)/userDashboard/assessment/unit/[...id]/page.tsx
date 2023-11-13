'use client'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import React, { FC } from 'react'
import { Lesson } from '@/types/data'
import { useEffect, useState } from 'react'
import lesson from '../../../lesson/page'

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
  console.log(selectedLesson)

  useEffect(() => {
    async function fetchData() {
      try {
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
        console.error('Error:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="p-10">
      <Link
        href={'/userDashboard/assessment'}
        className="flex text-sm text-gray-500 "
      >
        <ChevronLeft className="h-5" />
        <h1>Assessment</h1>
      </Link>
      <h1 className="font-semibold text-xl pl-2 pb-10">
        {unitNumber}
        {unitTitle}
      </h1>

      <div className="grid justify-center items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
      {selectedLesson.length > 0 ? (
        selectedLesson.map((lesson) => (
          <Link
            key={lesson.id} 
            href={`/userDashboard/assessment/lesson/${lesson.id}/${lesson.lessonNumber}/${lesson.lessonTitle}/${unitZero}/${unitNumber}/${unitTitle}`}
            className="flex-col p-5 h-36 rounded-md hover:bg-gray-50 shadow-[0px_3px_8px_0px_#00000024]"
          >
            <h1 className="font-semibold">{lesson.lessonNumber}</h1>
            <p className="text-sm">{lesson.lessonTitle}</p>
          </Link>
        ))
      ) : (
        <p>Loading..</p>
      )}

      </div>
    </div>
  )
}

export default page
