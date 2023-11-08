'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { adminRoutes } from '@/lib/routes'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/Tooltip'
import { usePathname } from 'next/navigation'

const UserSidebar = () => {
  const pathname = usePathname()

  return (
    <div className="h-screen border-r shadow lg:w-60">
      <div className="px-3 py-2 flex-1">
        <Link href="" className="flex items-center mb-14">
          <div className="relative pt-5 px-3 w-full flex justify-between">
            <h1 className="font-black text-2xl">ADMIN</h1>
            <Image
              priority
              width={100}
              height={100}
              alt="Logo"
              src="/logo1.svg"
            />
          </div>
        </Link>
        <div className="space-y-1 lg:space-y-4">
          <TooltipProvider>
            {adminRoutes.map((route) => (
              <Tooltip key={route.href}>
                <TooltipTrigger className="w-full">
                  <Link
                    href={route.href}
                    className={cn(
                      'text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:font-bold hover:bg-primary/20 rounded-lg transition',
                      new RegExp(`^${route.href}(/.*)?$`).test(pathname)
                        ? 'text-purple-700 font-bold bg-primary/20'
                        : 'text-primary/70',
                    )}
                  >
                    <div className="flex items-center flex-1">
                      <route.icon
                        className={cn(
                          'h-6 w-6 mx-1 hover:text-primary',
                          new RegExp(`^${route.href}(/.*)?$`).test(pathname)
                            ? 'text-primary '
                            : 'text-primary/70',
                        )}
                      />
                      <div className="md:hidden lg:flex pl-2 hover:block">
                        {route.label}
                      </div>
                    </div>
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="hidden md:block lg:hidden -mb-16 mx-14 p-[0.88rem] bg-gray-50 border shadow-none text-purple-700 font-medium rounded-lg">
                  {route.label}
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </div>
    </div>
  )
}

export default UserSidebar
