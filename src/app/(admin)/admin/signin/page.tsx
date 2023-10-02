import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Input }from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import {FcGoogle} from "react-icons/fc"

const page = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='w-screen h-screen lg:w-2/6 lg:h-5/6 border-gray-300 border rounded-lg flex flex-col justify-center items-center space-y-12 lg:space-y-15'>
        <div className='text-center w-72'>
          <h1 className='font-bold text-xl lg:text-3xl'>Admin</h1>
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