import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
	'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				empty: '',
				default: 'rounded-lg bg-transparent bg-black text-white hover:bg-purple-700 transition-all',
				default2: 'rounded-lg bg-transparent text-black transition-all',
				destructive:
          'bg-white text-red-600 border-2 border-red-600 hover:bg-red-600 hover:text-white',
				destructive2:
          'hover:bg-red-600 bg-black text-white',
				outline:
          'duration-100 rounded-lg border-black border-2 hover:border-purple-700 hover:text-purple-700 transition-all',
				secondary:
          'bg-purple-700 text-white',
				ghost: 'hover:bg-accent hover:text-accent-foreground hover:border',
				link: ' 2xl:text-base font-bold text-primary underline-offset-8 hover:underline hover:text-purple-700 transition-all ease-in-out origin-left',
				google: 'bg-gray-200 text-gray-400',
				menu_item: 'flex justify-start hover:bg-gray-100 w-28',
				update: 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white',
				neutral: 'bg-white text-black border-2 border-black hover:bg-black hover:text-white',
				successful: 'bg-white text-green-600 border-2 border-green-600 hover:bg-green-600 hover:text-white',
				page: 'hover:font-semibold hover:bg-gray-200',
			},
			size: {
				default: 'h-10 px-4 py-2',
				default2: '',
				sm: 'h-9 rounded-md px-3',
				lg: 'h-11 rounded-md px-8',
				icon: 'h-10 w-10',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button';
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);
Button.displayName = 'Button';

export { Button, buttonVariants };
