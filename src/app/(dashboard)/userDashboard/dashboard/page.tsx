"use client"
import React from 'react'
import { Calendar } from "@/components/ui/calendar"
import { Progress } from "@/components/ui/progress"
import Image from 'next/image'
import Link from 'next/link'

const page = async () => {
  const [date] = React.useState<Date | undefined>(new Date())
  const unit = [
    {
      image: '/unit1.svg',
      unitTitle : 'Unit 1: Assemble Electronic Products',
      progress: 15,
      link: '/userDashboard/lesson/unit/u1/Unit%201:/Assemble%20Electronic%20Products',
    },
    {
      image: '/unit2.svg',
      unitTitle : 'Unit 2: Service Consumer Electronic Products and Systems',
      progress: 10,
      link: '/userDashboard/lesson/unit/u2/Unit%202:/Service%20Consumer%20Electronic%20Products%20and%20Systems',
    },
    {
      image: '/unit3.svg',
      unitTitle : 'Unit 3: Service Industrial Electronic Modules, Products and Systems',
      progress: 0,
      link: '/userDashboard/lesson/unit/u3/Unit%203:/Service%20Industrial%20Electronic%20Modules,%20Products%20and%20Systems',
    }
  ];
  const sections = [
    { title: 'Take Assessment ', 
      color: 'bg-[#A663CC]', 
      bgHover: 'hover:bg-[#B884D7]',
      icon: '/assessment-svgrepo-com.svg',
      link: '/userDashboard/assessment',
    },
    { title: 'Recommendation (2)', 
      color: 'bg-[#A485D5]', 
      bgHover: 'hover:bg-[#B298DC]',
      icon: '/recommend-svgrepo-com.svg',
      link: '/userDashboard/recommended',
       
    },
    { title: 'Scores ', 
      color: 'bg-[#A0BDE4]', 
      bgHover: 'hover:bg-[#B8D0EB]',
      icon: '/score-svgrepo-com.svg',
      link: '/userDashboard/score', 
    },
  ];

  return (
    <main>
      <div className="grid lg:grid-cols-12 p-10 gap-y-9 gap-x-10">
        <div className="bg-purple-700 max-h-96 text-white p-5 lg:col-span-9 rounded-xl shadow-[0_10px_20px_rgba(109,40,217)]">
          <h1 className='font-medium text-lg'>CORE COMPETENCIES</h1>
          <div className='my-5 mx-5 grid grid-cols-3 gap-7'>
            {unit.map((units, index)=>(
              <Link href={units.link} key={index} className='text-sm hover:bg-purple-800 bg-purple-500 p-5 rounded-xl h-64 space-y-3'>
                <Image
                  priority
                  width={40}
                  height={40}
                  alt="Logo"
                  src={units.image}
                />
                <h1 className='h-28'>{units.unitTitle}</h1>
                <Progress value={units.progress} />
                <div className='flex justify-between'>
                  <p>Learning Progress</p>
                  <p>{units.progress}%</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <Calendar
          mode='single'
          selected={date}
          className="bg-gray-50 lg:col-span-3 mx-auto object-contain rounded-2xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" 
        />
        {sections.map((section, index) => (
          <Link
            href={section.link}
            key={index}
            className={`flex h-44 p-5 ${section.color} ${section.bgHover} text-white lg:col-span-4 rounded-2xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]`}
          >
            <div className='flex w-full justify-center items-center'>
              <div>
                <h1 className='flex font-semibold tracking-wider'>{section.title}</h1>
              </div>
              <Image
                priority
                width={40}
                height={40}
                alt="Logo"
                className=' w-auto h-full object-cover rounded-2xl'
                src={section.icon}
              />
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}

export default page
