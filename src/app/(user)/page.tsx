import React from 'react';
import Navbar from '@/components/homepage/Navbar';
import Hero from '@/components/homepage/Hero';
import SectionPrograms from '@/components/homepage/SectionPrograms';
import SectionAbout from '@/components/homepage/SectionAbout';
import SectionContacts from '@/components/homepage/SectionContacts';

export default function Home() {
	return (
		<>
			<header>
				<Navbar/>
				<Hero/>
			</header>
			<main>
				<SectionPrograms/>
				<SectionAbout/>
				<SectionContacts/>
			</main>
		</>
	);
}
