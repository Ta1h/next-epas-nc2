"use client"
import React from 'react'
import Spline from '@splinetool/react-spline'

const page = () => {
  const data = [
    {
      name: 'Soldering Iron',
      scene: 'https://prod.spline.design/phh-n6WFAKZhi45J/scene.splinecode',
    },
    {
      name: 'Hot Air Soldering Tool',
      scene: 'https://prod.spline.design/ZmmxX9QXN7VGQubR/scene.splinecode',
    },
    {
      name: 'Desoldering Pump',
      scene: 'https://prod.spline.design/VDSk9DTnlDvCDjCk/scene.splinecode',
    },
    {
      name: 'Power Supply',
      scene: 'https://prod.spline.design/q15hMfsr0mumEMVv/scene.splinecode',
    },
    {
      name: 'Soldering Wire',
      scene: 'https://prod.spline.design/zOfHa3kMV-jNn-Xe/scene.splinecode',
    },
    {
      name: 'Soldering Paste',
      scene: 'https://prod.spline.design/u71tMIRX8eGxBveY/scene.splinecode',
    },
  ]

  return (
    <div className='px-10 py-5 h-full'>
      
      {data.map((models)=>(
        <div key={models.name} className='bg-[#6f2dbd] rounded-xl mb-10 p-10 flex space-x-10'>
          <div className='text-[#B8D0EB] flex flex-col justify-center items-start'>
            <h1 className='text-xl font-bold mb-10'>{models.name}</h1>
            <p className='font-semibold'>Description:</p>
            <p className='mb-5 text-sm'>- A soldering iron is a hand tool used for melting solder to join two or more metal surfaces. It typically consists of a heated metal tip and an insulated handle.</p>
            <p className='font-semibold'>Use:</p>
            <p className='text-sm'>- Soldering irons are commonly used in electronics, electrical work, and various DIY projects to create or repair soldered connections on circuit boards, wires, and other electronic components.</p>
          </div>
          <div className='rounded-xl bg-slate-300 max-w-2xl object-contain m-5'>
            <Spline scene={models.scene}></Spline>
          </div>
        </div>
      ))}
    </div>
  )
}

export default page