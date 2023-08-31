import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {FcGoogle} from "react-icons/fc"
import { Input } from "@/components/ui/Input"
import { Button } from '@/components/ui/Button'


const page = () => {
  return (
    <div className='w-screen h-screen flex flex-row justify-center items-center'>
      
      <div className='hidden lg:w-2/6 lg:h-5/6 lg:bg-purple-700 lg:rounded-l-lg lg:flex lg:flex-col lg:justify-center lg:items-center'>
        <Image
            priority
            width="347"
            height="222"
            quality={100}
            src="login-ellipse.svg"
            alt="ellipse"
            className='mb-4'
          />
          <div className='text-white w-64 text-center space-y-3'>
            <h1 className='font-semibold'>We're here to assist you in learning easily!</h1>
            <p className='text-xs'>Learn EPAS in 3D products and pass the National Certificate examination.</p>
          </div>
      </div>

      <div className='w-screen h-screen lg:w-2/6 lg:h-5/6 border-gray-300 border rounded-r-lg flex flex-col justify-center items-center md:space-y-8 space-y-12'>
        <Image
          priority
          width="80"
          height="110"
          quality={100}
          src="logo1.svg"
          alt="Logo"
          className='pt-1 mb-4'
        />
        <div className='text-center w-72'>
          <h1 className='font-bold text-xl'>Hello again!</h1>
          <p className='text-sm text-gray-400 '>Welcome to our website, and remember to work hard while still having fun.</p>
        </div>
        <div className='flex-col space-y-4'>
          <Input type="email" placeholder="Email" />
          <div className='flex flex-col'>
            <Input type="password" placeholder="Password" />
            <div className='flex text-xs space-x-14 mt-3 ml-5'>
              <p className='text-gray-400'>remember me</p>
              <Link href=""><p className='text-purple-700'>forgot password</p></Link>
            </div>
          </div>
        </div>
        <div className='flex flex-col space-y-3 w-64'>
          <Button variant="secondary">
            <Link href="" className='text-sm'>Login</Link>
          </Button>
          <Button variant="google" className='flex space-x-2 text-lg'>
            <FcGoogle/>
            <Link href="" className='text-sm'>Login with Google</Link>
          </Button>
        </div>
        <div className='flex'>
          <p className='text-xs text-gray-400'> Don't have an account yet?</p>
          <Link href="/signup"><p className='text-xs text-purple-700 ml-2'>Sign up</p></Link>
        </div>
      </div>
    </div>
  )
}

export default page