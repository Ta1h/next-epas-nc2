'use client'

import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="flex h-screen mx-8">

      {/* Mobile View */}
      <div className=" flex h-80 w-screen lg:hidden ">
        <Image
          layout="intrinsic"
          width={1023}
          height={700}
          src="mobileWelcome.svg"
          alt="mobileWelcome Image"
        />
      </div>

      {/* Text & Image */}
      <div className="hidden text-center lg:flex lg:justify-center lg:items-start lg:flex-col   ">
        <h1 className="tracking-wider font-extrabold text-lg lg:text-2xl ">
          Electronic Product Assembly Servicing&apos;s Reviewer & Assessment
        </h1>
        <h2 className="font-bold pt-2 text-sm lg:text-base xl:text-lg 2xl:text-xl">
          We help guide EPAS participants in effectively and quickly acquiring a
          skill.
        </h2>
      </div>

      
    </div>
  )
}

export default Hero
