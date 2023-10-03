import React from 'react'
import { ChevronDown } from 'lucide-react'
import { Search } from 'lucide-react'
import { Input } from '../ui/Input'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/Dropdown-menu"


const AdminNavbar = () => {
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
              <h4 className='font-semibold text-sm w-24'>Ralph Ta-oc</h4>
              <span className='text-xs w-12 text-gray-600'>ralph@gmail.com</span>
            </div>
          </div>
      </div>
      <div className='m-2 flex justify-center items-center'>
        <DropdownMenu>
          <DropdownMenuTrigger><ChevronDown></ChevronDown></DropdownMenuTrigger>
          <DropdownMenuContent className='bg-white space-y-1'>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </main>
  )
}

export default AdminNavbar