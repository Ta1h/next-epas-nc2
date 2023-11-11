"use client";
import React, { useEffect, useState } from 'react'
import { Unit, Lesson } from '@/types/data'
import { useSession } from 'next-auth/react';

const Page = () => {
  const [units, setUnits] = useState<Array<Unit>>([])
  const colors = ['bg-purple-700', 'bg-blue-700', 'bg-green-700']
  const session = useSession();
  const userEmail = session.data?.user.email;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/units', {
          method: 'GET',
        })
        if (response.ok) {
          const data = await response.json()

          // Assuming you have some criteria to sort units, modify the sorting logic accordingly.
          const sortedUnits = data.sort((a: Unit, b: Unit) => parseInt(a.unitNumber) - parseInt(b.unitNumber))

          // Sort lessons within each unit based on some criteria (e.g., lessonNumber).
          const unitsWithSortedLessons = sortedUnits.map((unit: Unit) => {
            const sortedLessons = unit.lessons.sort((a: Lesson, b: Lesson) => parseInt(a.lessonNumber) - parseInt(b.lessonNumber));
            return { ...unit, lessons: sortedLessons };
          });

          setUnits(unitsWithSortedLessons);
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
    <div className='p-10 h-full space-y-7'>
      {units.map((unit, index) => (
        <div key={unit.id} className='flex-col rounded-md w-full shadow-[0px_3px_8px_0px_#00000024] min-h-80'>
          <h1 className={`${colors[index]} text-2xl pl-5 py-3 text-white rounded-t-md`}>{unit.unitNumber}{unit.unitTitle}</h1>
          <div>
            {unit.lessons.map((lesson) => (
              <div key={lesson.id} className='grid lg:grid-cols-4 lg:gap-x-26 lg:gap-y-5 p-7'>
                {unit.score
                  .filter(scores => scores.userEmail === userEmail && scores.lessonId === lesson.id)
                  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Sort scores by date in descending order
                  .slice(0, 1) // Take only the latest score
                  .map((latestScore) => (
                    <div key={latestScore.id}>
                      {latestScore.lessonScore < 0.8 * latestScore.lessonLength && (
                        <div>
                          <div className='flex-col w-56 p-3 rounded-md shadow-[0px_3px_8px_0px_#00000024]'>
                            <h2>{lesson.lessonNumber}</h2>
                            <h2>{lesson.lessonTitle}</h2>
                            <p>Score: {latestScore.lessonScore} / {latestScore.lessonLength}</p>
                            <p>Time: {new Date(latestScore.date).toLocaleTimeString()}</p>
                            <p>Date: {new Date(latestScore.date).toLocaleDateString()}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Page;
