'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Button } from '@/components/ui/Button'
import ScrollLink from '@/components/ui/ScrollLink'

const Navbar = () => {

  return (
    <div className="flex justify-between mt-10 mx-10 md:mx-9 lg:mx-8">

      {/* Logo */}
      <div className="lg:px-8">
        <Link href={'/'}>
          <Image
            priority
            width="120"
            height="150"
            quality={100}
            src="logo1.svg"
            alt="Logo"
          />
        </Link>
      </div>

      {/* Links */}
      <div className="flex-auto hidden z-50 lg:flex lg:justify-center lg:gap-x-8 ">
        <Button variant="link">
          <Link href="/" className='font-semibold text-base'>Home</Link>
        </Button>
        <Button variant="link">
          <ScrollLink href="#programs" className='font-semibold text-base'>Programs</ScrollLink>
        </Button>
        <Button variant="link">
          <ScrollLink href="#about" className='font-semibold text-base'>About</ScrollLink>
        </Button>
        <Button variant="link">
          <ScrollLink href="#contacts" className='font-semibold text-base'>Contacts</ScrollLink>
        </Button>
      </div>

      {/* Buttons */}
      <div className=" hidden z-50 lg:flex lg:gap-x-5">
        <Button variant="outline" className="px-8 text-base">
          <Link href="signin">Sign in</Link>
        </Button>
        <Button variant="default" className="px-8 font-normal text-base">
          <Link href="/signup">Sign up</Link>
        </Button>
      </div>
      
    </div>
  )
}

export default Navbar
