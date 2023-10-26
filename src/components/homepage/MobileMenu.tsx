import React from 'react';
import { FC } from 'react';
import Link from 'next/link';
import ScrollLink from '../ui/ScrollLink';
import dynamic from 'next/dynamic';

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from '@/components/ui/Sheet';
import { Button } from '@/components/ui/Button';
import Icons from '@/components/ui/Icons';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

interface MobileNavProps {}

const routes = [
	{
		label: 'Home',
		href: '/',
	},
	{
		label: 'Programs',
		href: '#programs',
	},
	{
		label: 'About',
		href: '#about',
	},
	{
		label: 'Contacts',
		href: '#contacts',
	},
];

const MobileNav: FC<MobileNavProps> = () => {
	const pathname = usePathname();

	return (
		<Sheet>
			<SheetTrigger>
				<Button variant="ghost" size="icon" className="lg:hidden">
					<Icons.Menu className="h-8 w-8" />
				</Button>
			</SheetTrigger>
			<SheetContent className="p-2 bg-white/80 dark:bg-brown-900/80">
				<div className="mt-6 mx-4 flow-root">
					<div className="-my-6 divide-y divide-gray-500/10">
						<div className="w-full space-y-4 py-20 flex flex-col gap-10 text-center">
							{routes.map((route) => (
								<ScrollLink
									key={route.href}
									href={route.href}
									className={cn('', pathname === route.href)}
								>
									<SheetClose>
										<Button className='text-xl'variant="link">{route.label}</Button>
									</SheetClose>
								</ScrollLink>
							))}
							<Button>
								<Link href="/signin">Sign In</Link>
							</Button>
						</div>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default dynamic(() => Promise.resolve(MobileNav), { ssr: false });
