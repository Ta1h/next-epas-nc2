'use client'
import Link from 'next/link'
import React from 'react'
import { useEffect, useState } from 'react'
import { Unit } from '@/types/data'

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
    <main className="p-10">
      <div className="grid md:grid-cols-2 gap-7 justify-center items-center">
        <Link
          key={''}
          href={'/userDashboard/assessment/pre-test'}
          className="flex-col p-5 h-36 rounded-md hover:bg-gray-50 shadow-[0px_3px_8px_0px_#00000024]"
          >
          <h1 className="font-semibold">Pre-Test</h1>
          <p className="pb-"></p>
        </Link>
        <Link
          key={''}
          href={'/userDashboard/assessment/post-test'}
          className="flex-col p-5 h-36 rounded-md hover:bg-gray-50 shadow-[0px_3px_8px_0px_#00000024]"
          >
          <h1 className="font-semibold">Post-Test</h1>
          <p className="pb-"></p>
        </Link>

      </div>
    </main>
  )
}

export default assessment
