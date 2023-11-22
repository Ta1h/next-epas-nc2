"use client";
import React, { useState, useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Unit } from '@/types/data';
import { useSession } from 'next-auth/react';

const page = () => {
  const [data, setData] = useState<Array<Unit>>([])
  const session = useSession()
  const userEmail = session.data?.user.email;

  async function fetchData() {
    try {
      const response = await fetch('/api/units', {
        method: 'GET',
      })

      console.log(response)

      if (!response.ok) {
        throw new Error('Network response was not ok')
      } 
        const body = await response.json()
        setData(body)
        console.log("status",response.ok)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchData();
  },[])


  return (
    <div className="w-full grid grid-cols-2 p-10 gap-y-10">
      <div className=' col-span-2 rounded-lg'>
        
        <Table>
          <TableCaption className='text-md'>List of assessment scores</TableCaption>
          <TableHeader className='bg-black text-white rounded-md'>
            <TableRow>
              <TableHead>Unit</TableHead>
              <TableHead>Lesson</TableHead>
              <TableHead className="w-[140px]">Pre-Test Score</TableHead>
              <TableHead className="w-[140px]">Post-Test Score</TableHead>
              <TableHead className="w-[110px]">Time</TableHead>
              <TableHead className="w-[110px]">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((unit) => (
              unit.lessons.map((lesson) => {
                const matchingScores = unit.score.filter((score) => (
                  score.userEmail === userEmail && score.lessonId === lesson.id
                ));

                return matchingScores.map((scores) => (
                  <TableRow key={scores.id}>
                    <TableCell>{unit.unitNumber} {unit.unitTitle}</TableCell>
                    <TableCell>{lesson.lessonNumber} {lesson.lessonTitle}</TableCell>
                    <TableCell>{scores.preTestScore}/{scores.preTestLenght}</TableCell>
                    <TableCell>{scores.lessonScore}/{scores.lessonLength}</TableCell>
                    <TableCell>{new Date(scores.date).toLocaleTimeString()}</TableCell>
                    <TableCell>{new Date(scores.date).toLocaleDateString()}</TableCell>
                  </TableRow>
                ));
              })
            ))}
          </TableBody>
        </Table>
      </div>    
    </div>
  )
}

export default page