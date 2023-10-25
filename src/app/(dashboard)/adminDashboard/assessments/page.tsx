import Link from 'next/link';
import React from 'react';

const assessment = () => {
	return (
		<main className='p-10'>
			<div className='flex justify-center font-semibold text-2xl pb-10'>
        ASSESSMENTS MANAGEMENT 
			</div>
			<div className='grid lg:grid-cols-3 md:grid-cols-2 gap-7 justify-center items-center'>

				<Link href={'assessments/unit_1'} className='flex-col p-5 h-36 rounded-md hover:bg-gray-50 shadow-[0px_3px_8px_0px_#00000024]'>
					<h1 className='font-semibold'>Unit 1:</h1>
					<p className='pb-'>Assemble Electronic Products</p>
				</Link>

				<Link href={'assessments/unit_2'} className='flex-col p-5 h-36 rounded-md hover:bg-gray-50 shadow-[0px_3px_8px_0px_#00000024]'>
					<h1 className='font-semibold'>Unit 2:</h1>
					<p className='pb-'>Service Consumer Electronic Products and Systems</p>
				</Link>

				<Link href={'assessments/unit_3'} className='flex-col p-5 h-36 rounded-md hover:bg-gray-50 shadow-[0px_3px_8px_0px_#00000024]'>
					<h1 className='font-semibold'>Unit 3:</h1>
					<p className='pb-'>Service Industrial Electronic Modules, Products and Systems</p>
				</Link>

			</div>
		</main>
	);
};

export default assessment;