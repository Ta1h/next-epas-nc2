"use client";
import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const page = () => {


  return (
    <div className="grid grid-cols-4 px-16 py-12 gap-10">
      <div className='p-5 col-span-1 rounded-md w-72 shadow-[0px_3px_8px_0px_#00000024]'>
        <h1 className='mb-3 font-medium text-gray-500'>OVERALL SCORE</h1>
        <div className='grid lg:grid-cols-3'>
          <div className='flex-row justify-center col-span-2'>
            <h1 className='text-xl font-bold flex justify-center'>115</h1>
            <p className='text-sm font-medium flex justify-center text-gray-500'>EXCELLENT</p>
          </div> 
          <div className='text-xs'>
            <p className='font-medium text-gray-500'>MAX SCORE</p>
            <h1 className='font-bold'>140</h1>
          </div>
        </div>
      </div>

      <div className='col-span-3 rounded-lg'>
        <Table>
          <TableCaption>List of assessment scores</TableCaption>
          <TableHeader className='bg-black text-white rounded-md'>
            <TableRow>
              <TableHead className="w-[100px]">Email</TableHead>
              <TableHead className="w-[100px]">Score</TableHead>
              <TableHead>Lesson</TableHead>
              <TableHead className="w-[100px]">Time</TableHead>
              <TableHead className="w-[100px]">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell >ralphtaoc071@gmail.com</TableCell>
              <TableCell>5/5</TableCell>
              <TableCell>Lesson 1: OH&S POLICIES AND PROCEDURES</TableCell>
              <TableCell>4:17 pm</TableCell>
              <TableCell>17/11/203</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      

      <div className='p-5 ml-14 rounded-md  shadow-[0px_3px_8px_0px_#00000024]'>
        <h1 className='mb-3'>UNIT SCORES</h1> 
        <div className='grid lg:grid-cols-3'>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
    
    </div>
  )
}

export default page