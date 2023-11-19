'use client'
import Link from 'next/link'
import React from 'react'
import { useEffect, useState } from 'react'
import { Unit } from '@/types/data'
import Image from 'next/image'

const assessment = () => {
  const [units, setUnits] = useState<Array<Unit>>([])

  console.log(units)

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
    <main className="px-10 pt-6">
      <div className="grid lg:grid-cols-4 gap-16">
        <div className='col-span-2 flex justify-center items-center'>
          <div className='gap-x-8 flex-cols grid lg:grid-cols-2 px-10 py-10 h-full bg-[#A663CC] text-[#B8D0EB] indent-1 rounded-xl'>
            <h1 className='font-black text-2xl tracking-wider col-span-2 mb-5'>Guidelines & Notice!</h1>
            <Image
              priority
              width={100}
              height={100}
              alt="Logo"
              src={'/notice-test-assess.svg'}
              className='mx-auto w-auto h-40'
            />
            <div className='pt-5'>
              <h2 className='font-bold tracking-wide'>1) Assessment</h2>
              <p className='pl-2 text-xs'>- In the assessment we have two set of test, the pre-test and post-test</p>
              <p className='pl-2 text-xs '>- The user needs to take the pre-test first inorder to have an available post-test</p>
            </div>
            <div className='pt-6'>
              <h2 className='font-bold tracking-wide'>2) Recommendation</h2>
              <p className='pl-2 text-xs'>- After you take the post-test if you fail the test your scores will be visible to the recommended section.</p>
              <p className='pl-2 text-xs'>- In the recommended section you&apos;ll be able to view your scores data with unit and lesson </p>
            </div>
            <Image
              priority
              width={100}
              height={100}
              alt="Logo"
              src={'/notice-recom-assess.svg'}
              className='mx-auto w-auto h-40'
            />
            <Image
              priority
              width={100}
              height={100}
              alt="Logo"
              src={'/notice-score-assess.svg'}
              className='mx-auto w-auto h-40'
            />
            <div className='pt-5'>
              <h2 className='font-bold tracking-wide'>3) Score</h2>
              <p className='pl-2 text-xs'>- Score section is field with your scores</p>
              <p className='pl-2 text-xs'>- All of your scores from the post-test to pre-test will be visble</p>
            </div>
          </div>
        </div>
        <div className='col-span-2 w-full'>
          <Link
            href={'/userDashboard/assessment/pre-test'}
            className="flex gap-2 mb-10 p-5 w-full h-36 rounded-md bg-gray-100 border hover:bg-gray-50 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]"
            >
            <h1 className="font-semibold">Pre-Test</h1>
            <p className="pb-"></p>
          </Link>
          <Link
            href={'/userDashboard/assessment/post-test'}
            className="flex gap-2 mb-10 p-5 w-full h-36 rounded-md bg-gray-100 border hover:bg-gray-50 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]"
            >
            <h1 className="font-semibold">Post-Test</h1>
            <p className="pb-"></p>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default assessment
