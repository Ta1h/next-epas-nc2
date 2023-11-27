"use client";
import React, { useEffect, useState } from 'react'
import { Unit, Lesson } from '@/types/data'
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { Book, FileText } from 'lucide-react';

const Page = () => {
  const [units, setUnits] = useState<Array<Unit>>([])
  const colors = ['bg-indigo-700', 'bg-blue-700', 'bg-green-700']
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
    <div className="bg-gray-50 p-10 h-full space-y-7">
      {units.map((unit, index) => (
        <div key={unit.id} className="flex-col rounded-md w-full shadow-[0px_3px_8px_0px_#00000024] min-h-80">
          <h1 className={`${colors[index]} text-2xl pl-5 py-3 text-white rounded-t-md`}>
            {unit.unitNumber}
            {unit.unitTitle}
          </h1>
          <div className="bg-white p-7 grid lg:grid-cols-3 lg:gap-5 rounded-2xl">
            {unit.lessons
              .filter((lesson) =>
                unit.score.some(
                  (score) =>
                    score.userEmail === userEmail &&
                    score.lessonId === lesson.id &&
                    score.preTestScore < 0.6 * score.preTestLenght
                )
              )
              .map((lesson) => (
                <div key={lesson.id} className="bg-white flex-col w-auto max-h-80 p-3 rounded-md shadow-[0px_3px_8px_0px_#00000024]">
                  {unit.score
                    .filter(
                      (scores) =>
                        scores.userEmail === userEmail &&
                        scores.lessonId === lesson.id 
                    )
                    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) 
                    .slice(0, 1) 
                    .map((latestScore) => (
                      <div key={latestScore.id} className='h-full'>
                        {latestScore.preTestScore < 0.6 * latestScore.preTestLenght && (
                          <div className='grid grid-row-5 h-full '>
                            <div className='grid row-span-4 grid-cols-6 justify-between w-full h-full'>
                              <div className='col-span-4 '>
                                <h2 className='text-xl font-semibold'>{lesson.lessonNumber}</h2>
                                <h2 className='mb-12 mt-4 flex items-center'> Title: {lesson.lessonTitle}</h2>
                              </div>
                              <div className='grid w-28 h-fit'>
                                <h2 className='h-fit w-fit mb-4 font-bold text-[#6F2DBD]'>Links:</h2> 
                                <Link 
                                  href={'/userDashboard/lesson/lesson/'+lesson.id+'/'+lesson.lessonNumber+'/'+lesson.lessonTitle+'/'+unit.id+'/'+unit.unitNumber+'/'+unit.unitTitle}
                                  className='flex w-fit h-fit font-medium hover:text-[#6F2DBD] underline-offset-4 hover:underline transition-all origin-left duration-100 mb-1'
                                  >
                                  <Book className='w-4'/>
                                  Lesson
                                </Link>
                                <Link 
                                  href={'/userDashboard/assessment/post-test/lesson/'+lesson.id+'/'+lesson.lessonNumber+'/'+lesson.lessonTitle+'/'+unit.id+'/'+unit.unitNumber+'/'+unit.unitTitle}
                                  className='flex w-fit h-fit font-medium hover:text-[#6F2DBD] underline-offset-4 hover:underline transition-all origin-left duration-100'
                                  >
                                  <FileText className='w-4'/>
                                  Post-Test
                                </Link>
                              </div>
                            </div>

                            <div className='text-red-600 font-semibold h-fit text-sm grid lg:grid-cols-3 justify-center border-2 rounded-md px-1'>
                              <p>Score: </p>
                              <p>Time: </p>
                              <p>Date: </p>
                              <p>{latestScore.preTestScore} / {latestScore.preTestLenght}</p>
                              <p>{new Date(latestScore.date).toLocaleTimeString()}</p>
                              <p>{new Date(latestScore.date).toLocaleDateString()}</p>
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
