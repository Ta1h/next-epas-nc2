'use client';
import { lessonUnit3 } from '@/lib/routes';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import {FC} from 'react';
import React from 'react';

interface props{
  params: {id: string}
}

const page: FC<props> = ({params}) => {
	const lessonId  = params.id;
	const selectedLesson = lessonUnit3.find((lesson) => lesson.id === lessonId);

	return (
		<div className='p-10'>
			<div className='flex-row pb-10'>
				<Link href={'http://localhost:3000/adminDashboard/assessments/unit_3'} className='flex text-sm text-gray-500 '>
					<ChevronLeft className='h-5'/>
					<h1>Back</h1>
				</Link>

				{selectedLesson ? (
					<h1 className="font-semibold text-xl pl-2">
						{selectedLesson.title} {selectedLesson.topic}
					</h1>
				) : (
					<p>No lesson selected</p>
				)}
        
			</div>
		</div>
	);
};

export default page;