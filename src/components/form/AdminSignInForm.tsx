'use client';

import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { Input } from '../ui/Input'
import { Button } from '../ui/Button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const AdminSignInForm = () => {
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
          }, {role: 'ADMIN'});
      
          // Check if there was an error during sign-in
          if (signInData?.error) {
            console.log('sign in data error')
            console.log(signInData.error); // Log the specific error details
          } else {
            router.push('/adminDashboard/dashboard'); // Redirect the user to the '/userDashboard' page
          }
        } catch (error) {
          console.error('An error occurred during sign-in:', error); // Log any unexpected errors
        }
      };
      
  return (
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
                      Sign In
                    </Button>
                </div>
            </form>
        </Form>
      </div>
  )
}

export default AdminSignInForm