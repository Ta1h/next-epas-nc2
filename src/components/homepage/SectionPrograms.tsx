import React from 'react'
import { FC } from 'react'
import Image from 'next/image'
import { BookOpen, FileCheck2, PenSquare } from 'lucide-react'

interface SectionProgramsProps {}

const SectionPrograms: FC<SectionProgramsProps> = () => {
  return (
    <div className="w-full pb-80 pt-36 bg-[#5C259C] text-white">
      <div className='flex justify-center items-center mb-10'>
        <h1 className='text-4xl font-bold '>Easy To Use !</h1>
      </div>
      <div className="px-32 grid grid-cols-3 gap-20 mb-28 pt-5 h-40">
        <div className='flex flex-col justify-center items-center border-2 border-[#6f2dbd] rounded-xl'>
          <PenSquare className='mb-2'/>
          <h1 className='flex text-xl font-semibold'> Step 1</h1>
          <p className='text-sm w-56 text-center'>Create an account using google or an email</p>
        </div>
        <div className='flex flex-col justify-center items-center border-2 border-[#6f2dbd] rounded-xl'>
          <BookOpen className='mb-2'/>
          <h1 className='flex text-xl font-semibold'>Step 2</h1>
          <p className='text-sm w-56 text-center'>Take the pre-tes and review the lesson</p>
        </div>
        <div className='flex flex-col justify-center items-center border-2 border-[#6f2dbd] rounded-xl'>
          <FileCheck2 className='mb-2'/>
          <h1 className='flex text-xl font-semibold'>Step 3</h1>
          <p className='text-sm w-56 text-center'>Finally take the post-test and get recommended</p>
        </div>
      </div>
      <div className=" grid grid-cols-2  gap-y-10 h-screen px-28 mb-60">
        <div className="flex justify-center items-center">
          <Image
            priority
            width={350}
            height={300}
            alt=''
            src={'/efficient learning.png'}
            className='rounded-3xl'
          />
        </div>
        <div className="flex justify-center items-center ">
          <p className="px-20 font-light text-xl text-justify text-[#b298dc]">
            Faster and more efficient way of learning that can keep up
            with your own pace. Time and load efficient for students that
            works and study at the same time
          </p>
        </div>
        <div className="flex justify-center items-center">
          <p className="px-20 font-light text-xl text-justify text-[#b298dc]">
            Familiarization and visualization of the tools related to electronics to enhance your 
            knowledge before taking your examinations and practical tests through 3D visuals
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Image
            priority
            width={350}
            height={300}
            alt=''
            src={'/familiarization.png'}
            className='rounded-3xl'
          />
        </div>
        <div className="flex justify-center items-center">
          <Image
            priority
            width={350}
            height={300}
            alt=''
            src={'/assessment.png'}
            className='rounded-3xl'
          />
        </div>
        <div className="flex justify-center items-center">
          <p className="px-20 font-light text-xl text-justify text-[#b298dc]">
            Online assessments before and after lessons to sharpen your minds and memorization skills. 
            Analyzing where to improve your strengths and reinforce your weaknesses through the recommender system
          </p>
        </div>
      </div>
    </div>
  )
}

export default SectionPrograms
