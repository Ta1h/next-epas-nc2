import React from 'react';
import { FC } from 'react';

interface SectionProgramsProps {}

const SectionPrograms: FC<SectionProgramsProps> = () => {
	return (
		<div id='programs' className='w-full'>
			<div className='justify-center items-center flex h-56 bg-black text-white'>
				<h1 className='w-3/6 font-bold text-center tracking-wider text-3xl '>
            Exceptional Services
				</h1>
				<p className="px-10 w-3/6 font-normal">
            Step into the future of Electronic Product Assembly Servicing (EPAS)! We focus on efficiency and speed so you don&apos;t have to fret about your products&apos; assembly.
				</p>
			</div>
			<div className='bg-black text-white grid grid-cols-2 gap-x-10 gap-y-10 h-screen px-10 '>
				<div className='flex justify-center items-center'>
            1
				</div>
				<div className='flex justify-center items-center '>
					<p className="px-10 w-3/6 font-normal">
                Step into the future of Electronic Product Assembly Servicing (EPAS)! We focus on efficiency and speed so you don&apos;t have to fret about your products&apos; assembly.
					</p>
				</div>
				<div className='flex justify-center items-center'>
					<p className="px-10 w-3/6 font-normal">
                Step into the future of Electronic Product Assembly Servicing (EPAS)! We focus on efficiency and speed so you don&apos;t have to fret about your products&apos; assembly.
					</p>
				</div>
				<div className='flex justify-center items-center'>
            4
				</div>
				<div className='flex justify-center items-center'>
            5
				</div>
				<div className='flex justify-center items-center'>
					<p className="px-10 w-3/6 font-normal">
                Step into the future of Electronic Product Assembly Servicing (EPAS)! We focus on efficiency and speed so you don&apos;t have to fret about your products&apos; assembly.
					</p>
				</div>
			</div>
		</div>
	);
};

export default SectionPrograms;