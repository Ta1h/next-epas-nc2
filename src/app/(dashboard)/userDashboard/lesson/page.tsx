'use client'
import Link from 'next/link'
import React from 'react'
import { useEffect, useState } from 'react'
import { Unit } from '@/types/data'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import { Pencil } from 'lucide-react'

const lesson = () => {
  const [units, setUnits] = useState<Array<Unit>>([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/units', {
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
    <main className="px-16 py-5">
      <div className="grid lg:grid-cols-4 gap-16">
        <div className='col-span-2 flex justify-center items-center'>
          <div className='flex-cols grid lg:grid-cols-2 px-10 py-7 h-full bg-[#6F2DBD] text-[#A0BDE4] indent-1 rounded-xl'>
            <h1 className='font-black text-2xl tracking-wider col-span-2 mb-5'>Guidelines & Notice!</h1>
            <Image
              priority
              width={100}
              height={100}
              alt="Logo"
              src={'/notice-pre-test.svg'}
              className='mx-auto w-auto h-40'
            />
            <div className='pt-10'>
              <h2 className='font-bold tracking-wide'>1) Pre-Test</h2>
              <p className='pl-2 text-xs'>- Before you can access the units you need to take the Pre-Test </p>
              <p className='pl-2 text-xs '>- The pre-test is not recorded to your scores, but it will help you prepare for the lessons and for the Post Assessments</p>
            </div>
            <div className='pt-10'>
              <h2 className='font-bold tracking-wide'>2) Lessons</h2>
              <p className='pl-2 text-xs'>- The lesson material and its content is from TESDA, so you can trust the materials</p>
            </div>
            <Image
              priority
              width={100}
              height={100}
              alt="Logo"
              src={'/notice-lesson.svg'}
              className='mx-auto w-auto h-40'
            />
            <Image
              priority
              width={100}
              height={100}
              alt="Logo"
              src={'/notice-assessment.svg'}
              className='mx-auto w-auto h-40'
            />
            <div className='pt-10'>
              <h2 className='font-bold tracking-wide'>3) Assessment</h2>
              <p className='pl-2 text-xs'>- If you want to advance, after the pre-test you can already proceed to the assessment</p>
              <p className='pl-2 text-xs'>- The assessment is also the same with the pre-test so take your time to learn and enjoy :)</p>
            </div>
            <Link 
              href={'/userDashboard/assessment/pre-test'}
              className='col-span-2 grid justify-center mt-6'
            >
              <h1 className='p-2 border border-[#A0BDE4] hover:bg-[#A0BDE4] hover:text-[#6F2DBD] flex text-xs rounded-lg'>
                <Pencil className='h-4'/>
                Pre-Test
                <ChevronRight className='h-4'/>
              </h1>
            </Link>
          </div>
        </div>
        <div className='w-full col-span-2 grid items-center'>
          {units.map((unit) => (
            <Link
              key={unit.id}
              href={
                'lesson/unit/' +
                unit.id +
                '/' +
                unit.unitNumber +
                '/' +
                unit.unitTitle
              }
              className="flex gap-2 mb-10 p-5 w-full h-36 rounded-md bg-gray-100 border hover:bg-gray-50 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]"
            >
              <h1 className="font-semibold">{unit.unitNumber}</h1>
              <p>{unit.unitTitle}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

export default lesson
