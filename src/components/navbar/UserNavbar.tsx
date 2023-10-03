import React from 'react'
import { Input } from '../ui/Input'
import { 
  ChevronDown, 
  User2, 
  LogOut, 
  History, 
  Settings 
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/Dropdown-menu"
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'


const UserNavbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <main className=' flex justify-end pr-14 h-20 border-b shadow-sm'>
      <div className='m-2 flex justify-center items-center'>
        <Input placeholder='Search'>
        </Input>
      </div>
      <div className='m-2 flex justify-center items-center'>
          <img src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true" alt="" className='w-10 h-10 rounded-md'/>
          <div className='hidden lg:flex justify-between items-center ml-2'>
            <div className='leading-4'>
              <h4 className='font-semibold text-sm w-24'>{session?.user.username}</h4>
              <span className='text-xs w-12 text-gray-600'>{session?.user.email}</span>
            </div>
          </div>
      </div>
      <div className='m-2 flex justify-center items-center'>
        <DropdownMenu>
          <DropdownMenuTrigger><ChevronDown></ChevronDown></DropdownMenuTrigger>
          <DropdownMenuContent className='bg-white space-y-1'>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem><User2 className='w-4 mr-2'/>Profile</DropdownMenuItem>
            <DropdownMenuItem><History className='w-4 mr-2'/>History</DropdownMenuItem>
            <DropdownMenuItem><Settings className='w-4 mr-2'/>Settings</DropdownMenuItem>
            <DropdownMenuItem><LogOut className='w-4 mr-2'/>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </main>
  )
}

export default UserNavbar