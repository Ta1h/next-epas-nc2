"use client"

import React from 'react'
import Image from 'next/image'
import Lottie from "lottie-react"
import animationData from "@/components/animation/animation_llolx1n6.json"

const Hero = () => {
  return (
    <div className='flex h-screen'>
      <div >
        <Image
          priority
          fill
          src="Hero.svg"
          alt="Hero Image"
          className=" object-cover hero-image mt-20 hidden lg:block"/>
      </div>
      <div className='pt-24 px-32 w-full text-center absolute flex-row lg:px-0 lg:pl-32 lg:text-left lg:pt-44 lg:w-2/4 '>
        <h1 className='font-black tracking-wider text-3xl'>
          Electronic Product Assembly Servicing’s Reviewer & Assessment
        </h1>
        <h2 className='font-bold pt-2 lg:text-xl '>
          We help guide EPAS participants in effectively and quickly acquiring a skill.
        </h2>
      </div>
      
    </div>

  )
}

export default Hero