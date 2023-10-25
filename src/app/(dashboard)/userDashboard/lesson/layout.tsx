import React from 'react';
import Provider from '@/components/Provider';
import UserSidebar from '@/components/sidebar/UserSidebar';
import UserNavbar from '@/components/navbar/UserNavbar';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'EPASncII',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="en" className={inter.className}>
			<Provider>
				<body className='relative'>
					<aside className='z-80 hidden h-screen bg-white md:fixed md:inset-y-0 md:flex md:w-20 md:flex-col lg:w-56'>
						<UserSidebar/>
					</aside>
					<nav className='lg:ml-56 static'>
						<UserNavbar/>
					</nav>
					<main className="bg-background md:ml-20 lg:ml-56 ">
						{children} 
					</main>
				</body>
			</Provider>
		</html>
	);
}