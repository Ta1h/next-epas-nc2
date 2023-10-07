"use client";

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';


const page = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='w-screen h-screen lg:w-2/6 lg:h-5/6 border-gray-300 border rounded-lg flex flex-col justify-center items-center space-y-12 lg:space-y-15'>
        <div className='flex'>
          <h1 className='font-black text-xl lg:text-2xl w-24 text-center pt-0.5'>ADMIN</h1>
          <Link href={"/"}>
            <Image
              priority
              width="100"
              height="140"
              quality={100}
              src="/logo1.svg"
              alt="Logo"
              className='pt-1'
            />
          </Link>
        </div>
        <div className='flex-col space-y-5'>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
        </div>
        <div className='flex flex-col space-y-3 w-64'>
          <Button variant="secondary">
            <Link href="" className='text-sm'>Login</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default page