import { lessonUnit3 } from '@/lib/routes';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const page = () => {
	return (
		<div className='p-10'>
			<div className='flex-row pb-10'>
				<Link href={'http://localhost:3000/adminDashboard/lessons'} className='flex text-sm text-gray-500 '>
					<ChevronLeft className='h-5'/>
					<h1>Lessons</h1>
				</Link>
				<h1 className='font-semibold text-xl pl-2'>Unit 3: Service Industrial Electronic Modules, Products and Systems</h1>
			</div>

			<div className='grid justify-center items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7'>
				{lessonUnit3.map((route)=>(
					<Link key={route.id} href={'/lessons/unit_3'} className='flex-col p-5 h-36 rounded-md hover:bg-gray-50 shadow-[0px_3px_8px_0px_#00000024]'>
						<h1 className='font-semibold'>{route.title}</h1>
						<p className='text-sm'>{route.topic}</p>
					</Link>
				))}
			</div>

		</div>
	);
};

export default page;