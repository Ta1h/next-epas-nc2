import React from 'react';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import {FC} from 'react';

interface props{
    params: {id: string}
}

const page: FC<props> = ({params}) => {
	return (
		<div className='p-10'>
			<div className='flex-row '>
				<Link href={'http://localhost:3000/adminDashboard/assessments/unit_1/'+params.id} className='flex text-sm text-gray-500 '>
					<ChevronLeft className='h-5'/>
					<h1>Back</h1>
				</Link>
			</div>

			<div>
        form
			</div>
		</div>
	);
};

export default page;