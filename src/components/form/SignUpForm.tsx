'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

const SignUpForm = () => {
	const router = useRouter();
	const FormSchema = z.object({
		username: z.string().min(2, {
			message: 'Username must be at least 2 characters.',
		}),
		email: z.string().min(1, 'Email is required').email('Invalid email'),
		password: z.string().min(1, 'Password is required').min(8, 'Password must have than 8 characters'),
		confirmPassword: z.string().min(1, 'Confirmation Password is required'),
	})
		.refine((data) => data.password === data.confirmPassword, {
			path: ['confirmPassword'],
			message: 'Password do not match',
		});
    
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			username: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
	});

	const onSubmit = async (values:z.infer<typeof FormSchema>) => {
		try{
			const response = await fetch('/api/post',{
				method: 'POST',
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify({
					username: values.username,
					email: values.email,
					password: values.password,
				})
			});
    
			if(response.ok){
				router.push('signin');
			}else{
				const responseData = await response.json();
				console.error('Registration failed:', responseData.message);
			}
		}catch(error){
			console.error('Network error', error);
		}
	};

	return (
		<div className='w-screen h-screen flex flex-row justify-center items-center'>

			<div className='w-screen h-screen lg:w-2/6 lg:h-5/6 border-gray-300 border rounded-l-lg flex flex-col justify-center items-center space-y-10'>
				<Link href={'/'}>
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
				<h1 className='font-bold text-xl'>Create an account</h1>

				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="w-2/4 space-y-5 flex flex-col justify-center items-center">
						<FormField
							control={form.control}
							name="username"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input placeholder="Username" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
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
						<FormField
							control={form.control}
							name="confirmPassword"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input placeholder="Confirm Password" type='password' {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className='flex flex-col w-64'>
							<Button variant="default">
								<Link href="" className='text-sm'>sign up</Link>
							</Button>
						</div>
					</form>
				</Form>

				<div className='flex'>
					<p className='text-xs text-gray-400'> Already have an account?</p>
					<Link href="api/auth/signin"><p className='text-xs text-purple-700 ml-2'>Sign in</p></Link>
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
	);
};

export default SignUpForm;