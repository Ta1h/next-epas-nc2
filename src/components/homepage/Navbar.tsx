'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Button } from '@/components/ui/Button'
import ScrollLink from '@/components/ui/ScrollLink'

const Navbar = () => {

  return (
    <div className="flex justify-between my-5 mx-7 md:mx-9 lg:mx-8 xl:mx-20 xl:mt-8 2xl:mx-24 2xl:mt-9">
      <div className="lg:px-8">
        <Link href={'/'}>
          <Image
            priority
            width="100"
            height="140"
            quality={100}
            src="logo1.svg"
            alt="Logo"
            className="pt-1"
          />
        </Link>
      </div>
      <div className="flex-auto hidden z-50 lg:flex lg:justify-center lg:gap-x-8">
        <Button variant="link">
          <Link href="/">Home</Link>
        </Button>
        <Button variant="link">
          <ScrollLink href="#programs">Programs</ScrollLink>
        </Button>
        <Button variant="link">
          <ScrollLink href="#about">About</ScrollLink>
        </Button>
        <Button variant="link">
          <ScrollLink href="#contacts">Contacts</ScrollLink>
        </Button>
      </div>
      <div className=" hidden z-50 lg:flex lg:gap-x-5">
        <Button variant="outline" className="px-8">
          <Link href="signin">Sign in</Link>
        </Button>
        <Button variant="default" className="px-8">
          <Link href="/signup">Sign up</Link>
        </Button>
      </div>
      <div className="flex-center place-content-end">
        
      </div>
    </div>
  )
}

export default Navbar
