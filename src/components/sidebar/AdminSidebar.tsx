"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from "@/lib/utils";
import { adminRoutes } from "@/lib/routes";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/Tooltip';
import { usePathname } from 'next/navigation';
import { Ghost, MoreVertical } from 'lucide-react';
import { Button } from '../ui/Button';


const UserSidebar = () => {
  const pathname = usePathname();

  return (
    <div className="h-screen border-r shadow lg:w-60">
      <div className="px-3 py-2 flex-1">
        <Link href="" className="flex items-center mb-14">
          <div className="relative pt-5 pl-5 w-full">
            <Image priority width={100} height={100} alt="Logo" src="logo1.svg" />
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
                      "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:font-bold hover:bg-primary/20 rounded-lg transition",
                      pathname === route.href
                        ? "text-purple-700 font-bold bg-primary/20"
                        : "text-primary/70"
                    )}
                  >
                    <div className="flex items-center flex-1">
                      <route.icon
                        className={cn(
                          "h-6 w-6 mx-1 hover:text-primary",
                          pathname === route.href
                            ? "text-primary "
                            : "text-primary/70"
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
      <div className='mt-40 flex pt-3 border-t '>
        <img src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true" alt="" className='w-10 h-10 rounded-md'/>
        <div className='hidden lg:flex justify-between items-center ml-2'>
          <div className='leading-4'>
            <h4 className='font-semibold'>Ralph Ta-oc</h4>
            <span className='text-xs text-gray-600'>ralphtaoc@gmail.com</span>
          </div>
          <Button variant="default2">
            <MoreVertical size={20}/>
          </Button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default UserSidebar;
