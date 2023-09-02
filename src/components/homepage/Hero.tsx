"use client"

import React from 'react'
import Image from 'next/image'
import Lottie from "lottie-react"
import animationData from "@/components/animation/animation_llolx1n6.json"

const Hero = () => {
  return (
    <div className='flex flex-col w-screen mt-24 h-96 justify-center items-center space-y-10 lg:mt-24 lg:items-start xl:mt-36 2xl:mt-48'>
      <div >
        <Image
          priority
          layout='intrinsic'
          width={1540}
          height={800}
          src="Hero.svg"
          alt="Hero Image"
          className=" object-cover hero-image hidden lg:block"/>
      </div>
      <div className=' flex h-full w-80 lg:hidden '>
        <Image
            priority
            layout='intrinsic'
            width={613}
            height={700}
            src="mobileWelcome.svg"
            alt="mobileWelcome Image"/>
      </div>
      <div className='flex flex-col w-full text-center sm:px-16 md:px-36 lg:px-24 lg:w-3/5 lg:text-left lg:absolute xl:px-36'>
        <h1 className='font-black tracking-wider text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>
          Electronic Product Assembly Servicing&apos;s Reviewer & Assessment
        </h1>
        <h2 className='font-bold pt-2 text-sm lg:text-base xl:text-lg 2xl:text-xl'>
          We help guide EPAS participants in effectively and quickly acquiring a skill.
        </h2>
      </div>
    </div>

  )
}

export default Hero