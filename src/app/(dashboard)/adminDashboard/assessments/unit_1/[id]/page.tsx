'use client';
import { lessonUnit1 } from '@/lib/routes';
import Questions from '@/app/(dashboard)/adminDashboard/assessments/unit_1/components/questions';
import { ChevronLeft } from 'lucide-react';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import {FC} from 'react';
import React from 'react';

interface props{
  params: {id: string}
}

const page: FC<props> = ({params}) => {
	const lessonId  = params.id;
	const selectedLesson = lessonUnit1.find((lesson) => lesson.id === lessonId);

	return (
		<div className='p-10'>
			<div className='flex-row '>
				<Link href={'http://localhost:3000/adminDashboard/assessments/unit_1'} className='flex text-sm text-gray-500 '>
					<ChevronLeft className='h-5'/>
					<h1>Back</h1>
				</Link>

				<div className='flex space-x-3'>
					{selectedLesson ? (
						<h1 className="font-semibold text-xl pl-2">
							{selectedLesson.title} {selectedLesson.topic}
						</h1>
					) : (
						<p>No lesson selected</p>
					)}
					<Link href={'http://localhost:3000/adminDashboard/assessments/unit_1/'+selectedLesson?.id+'/add'} className='flex text-sm text-gray-500 '>
						<Plus className='h-5'/>
						<h1 className='text-md'>Add</h1>
					</Link>
				</div>
			</div>

			<div>
          
			</div>

			<div>
				<Questions params={{ id: params.id }} />
			</div>
		</div>
	);
};

export default page;