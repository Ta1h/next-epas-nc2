'use client';

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {FcGoogle} from "react-icons/fc"
import { Input } from "@/components/ui/Input"
import { Button } from '@/components/ui/Button'
import Icons from '@/components/ui/Icons'
import { useForm } from 'react-hook-form'
import { Form, FormField, FormItem, FormControl, FormMessage } from '../ui/form'
import * as z from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import GoogleSignInButton from '../GoogleSignInButton'
import { useRouter } from 'next/navigation';
import { signIn } from "next-auth/react";


const SignInForm = () => {
    const router = useRouter();
    const FormSchema = z.object({
      email: z.string().min(1, 'Email is required').email('Invalid email'),
      password: z.string().min(1, 'Password is required').min(8, 'Password must have than 8 characters'),
    })
    
    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        email: '',
        password: '',
      },
    });

    const onSubmit = async (values: z.infer<typeof FormSchema>) => {
      try {
        // Attempt to sign in with the 'credentials' provider
        const signInData = await signIn('credentials', {
          email: values.email,
          password: values.password,
        }, { role: 'USER' });
    
        // Check if there was an error during sign-in
        if (signInData?.error) {
          console.log('sign in data error');
          console.log(signInData.error);
        } else {
          router.push('/userDashboard/dashboard');
        }
      } catch (error) {
        console.error('An error occurred during sign-in:', error);
      }
    };    

  return (
    <div className='w-screen h-screen flex flex-row justify-center items-center'>
      <div className='hidden lg:w-2/6 lg:h-5/6 lg:bg-purple-700 lg:rounded-l-lg lg:flex lg:flex-col lg:justify-center lg:items-center space-y-3'>
        <div className='w-full flex justify-center'>
          <Image
              priority
              layout='intrisic'
              width="147"
              height="222"
              quality={100}
              src="login-ellipse.svg"
              alt="ellipse"
              className='lg:w-96 w-auto'
            />
        </div>
        <div className='text-white w-64 text-center space-y-3'>
          <h1 className='font-semibold'>We&apos;re here to assist you in learning easily!</h1>
          <p className='text-xs'>Learn EPAS in 3D products and pass the National Certificate examination.</p>
        </div>
      </div>

      <div className='w-screen h-screen lg:w-2/6 lg:h-5/6 border-gray-300 border rounded-r-lg flex flex-col justify-center items-center space-y-12 lg:space-y-8'>
        <div className='pt-1 mb-4'>
          <Link href={"/"}>
            <Image
              priority
              width="100"
              height="140"
              quality={100}
              src="logo1.svg"
              alt="Logo"
              className='pt-1'
            />
          </Link>
        </div>
        <div className='text-center w-72'>
          <h1 className='font-bold text-xl lg:text-lg'>Hello again!</h1>
          <p className='text-sm text-gray-400 lg:text-xs'>Welcome to our website, and remember to work hard while still having fun.</p>
        </div>

        <Form {...form}>
            <form method="POST" onSubmit={form.handleSubmit(onSubmit)} className="w-2/4 space-y-5 flex flex-col justify-center items-center">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Email" type='email' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Password" type='password' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className='flex flex-col space-y-3 w-64'>
                    <Button variant="default">
                      sign in
                    </Button>
                </div>
            </form>
        </Form>

        <div>
          <GoogleSignInButton>
            <FcGoogle/>
            Sign in with Google
          </GoogleSignInButton>
        </div>

        <div className='flex'>
          <p className='text-xs text-gray-400'> Don&apos;t have an account yet?</p>
          <Link href="/signup"><p className='text-xs text-purple-700 ml-2'>Sign up</p></Link>
        </div>
      </div>
    </div>
  )
}

export default SignInForm