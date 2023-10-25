import React from 'react';
import Link from 'next/link';

const lesson = () => {
	return (
		<div className='p-10'>
			<div className='flex justify-center pb-10'>
				<h1 className='font-semibold text-2xl'>LESSON MANAGEMENT </h1>
			</div>

			<div className='grid lg:grid-cols-3 md:grid-cols-2 gap-7 justify-center items-center'>

				<Link href={'lessons/unit_1'} className='flex-col p-5 h-36 rounded-md hover:bg-gray-50 shadow-[0px_3px_8px_0px_#00000024]'>
					<h1 className='font-semibold'>Unit 1:</h1>
					<p className='pb-'>Assemble Electronic Products</p>
				</Link>

				<Link href={'lessons/unit_2'} className='flex-col p-5 h-36 rounded-md hover:bg-gray-50 shadow-[0px_3px_8px_0px_#00000024]'>
					<h1 className='font-semibold'>Unit 2:</h1>
					<p className='pb-'>Service Consumer Electronic Products and Systems</p>
				</Link>
        
				<Link href={'lessons/unit_3'} className='flex-col p-5 h-36 rounded-md hover:bg-gray-50 shadow-[0px_3px_8px_0px_#00000024]'>
					<h1 className='font-semibold'>Unit 3:</h1>
					<p className='pb-'>Service Industrial Electronic Modules, Products and Systems</p>
				</Link>

			</div>

		</div>
	);
};

export default lesson;