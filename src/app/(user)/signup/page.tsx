import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {FcGoogle} from "react-icons/fc"
import { Input } from "@/components/ui/Input"
import { Button } from '@/components/ui/Button'

const page = () => {
  return (
    <div className='w-screen h-screen flex flex-row justify-center items-center'>

      <div className='w-screen h-screen lg:w-2/6 lg:h-5/6 border-gray-300 border rounded-l-lg flex flex-col justify-center items-center space-y-10'>
        <Image
          priority
          width="80"
          height="110"
          quality={100}
          src="logo1.svg"
          alt="Logo"
          className='pt-1 mb-4'
        />
        <h1 className='font-bold text-xl'>Create an account</h1>
        <div className='flex-col space-y-4'>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Confirm Password" />
        </div>
        <div className='flex flex-col w-64'>
          <Button variant="secondary">
            <Link href="" className='text-sm'>Create account</Link>
          </Button>
        </div>
        <div className='flex'>
          <p className='text-xs text-gray-400'> Already have an account?</p>
          <Link href="/login"><p className='text-xs text-purple-700 ml-2'>Login</p></Link>
        </div>
      </div>
      
      <div className='hidden lg:w-2/6 lg:h-5/6 lg:bg-purple-700 lg:rounded-r-lg lg:flex lg:flex-col lg:justify-center lg:items-center'>
        <Image
            priority
            width="147"
            height="222"
            quality={100}
            src="signup-ellipse.svg"
            alt="ellipse"
            className='mb-4 lg:w-96'
          />
          <div className='text-white w-64 text-center space-y-3'>
            <h1 className='font-semibold'>We&apos;re here to assist you in learning easily!</h1>
            <p className='text-xs'>Learn EPAS in 3D products and pass the National Certificate examination.</p>
          </div>
      </div>

    </div>
  )
}

export default page