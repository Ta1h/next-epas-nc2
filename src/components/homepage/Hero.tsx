import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='flex'>
      <div >
        <Image
          priority
          fill
          src="Hero.svg"
          alt="Hero Image"
          style={{ objectFit: "cover" }}
          className="hero-image mt-20 hidden lg:block"/>
      </div>
      <div className='w-full text-center absolute flex-row lg:pl-32 lg:text-left lg:pt-60 lg:w-2/4 '>
        <h1 className='font-black text-xl tracking-wider lg:text-3xl'>
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