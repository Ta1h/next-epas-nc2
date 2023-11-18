'use client'
import Link from 'next/link'
import React from 'react'
import { useEffect, useState } from 'react'
import { Unit } from '@/types/data'
import { ChevronLeft } from 'lucide-react'

const preTest = () => {
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
    <main className="p-10">
        <Link
            href={'/userDashboard/assessment'}
            className="flex text-sm text-gray-500 "
        >
            <ChevronLeft className="h-5" />
            <h1>Assessment</h1>
        </Link>
        <h1 className="font-semibold text-xl pl-2 pb-10">Post-Test</h1>
      <div className="grid md:grid-cols-2 gap-7 justify-center items-center">
        {units.map((unit) => (
          <Link
            key={unit.id}
            href={
              '/userDashboard/assessment/post-test/unit/' +
              unit.id +
              '/' +
              unit.unitNumber +
              '/' +
              unit.unitTitle
            }
            className="flex-col p-5 h-36 rounded-md hover:bg-gray-50 shadow-[0px_3px_8px_0px_#00000024]"
          >
            <h1 className="font-semibold">{unit.unitNumber}</h1>
            <p className="pb-">{unit.unitTitle}</p>
          </Link>
        ))}
      </div>
    </main>
  )
}

export default preTest
