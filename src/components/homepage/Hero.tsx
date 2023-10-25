'use client';

import React from 'react';
import Image from 'next/image';

const Hero = () => {
	return (
		<div className='flex flex-col w-full h-full'>
			<div>
				<Image
					layout='responsive'
					width={1540}
					height={800}
					src="Hero.svg"
					alt="Hero Image"
					className="w-screen hero-image hidden lg:block"/>
			</div>

			<div className=' flex h-80 w-screen lg:hidden '>
				<Image
					layout='intrinsic'
					width={1023}
					height={700}
					src="mobileWelcome.svg"
					alt="mobileWelcome Image"/>
			</div>

			<div className='hidden lg:block flex-col text-center lg:absolute lg:ml-10 lg:pt-48 lg:text-left lg:w-3/6 lg:h-3/6 lg:px-20 '>
				<h1 className='font-black tracking-wider text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>
          Electronic Product Assembly Servicing&apos;s Reviewer & Assessment
				</h1>
				<h2 className='font-bold pt-2 text-sm lg:text-base xl:text-lg 2xl:text-xl'>
          We help guide EPAS participants in effectively and quickly acquiring a skill.
				</h2>
			</div>
    
		</div>
	);
};

export default Hero;