import React from 'react'
import { Input } from '../ui/Input'
import { ChevronDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/Dropdown-menu'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import Profile from '../menu-item/user/Profile'
import Log_out from '../menu-item/user/Log_out'

const UserNavbar = async () => {
  const session = await getServerSession(authOptions)
  // console.log("image is ",session?.user.image);
  return (
    <main className="flex justify-end pr-14 h-20 border-b shadow-sm">
      <div className='flex w-full justify-between ml-10'>
        <div className="m-2 flex justify-start items-center">
          <Input placeholder="Search"></Input>
        </div>
        <div className="m-2 flex justify-center items-center">
          {session?.user.image ? (
            <img
              src={session?.user.image}
              width={100}
              height={100}
              alt=""
              className="w-10 h-9 rounded-xl border"
            />
          ) : (
            <img
              src="/profile.svg"
              width={100}
              height={100}
              alt=""
              className="w-10 h-9 rounded-xl border"
            />
          )}
          <div className="hidden lg:flex justify-between items-center ml-2">
            <div className="leading-4">
              <h4 className="font-semibold text-sm">
                {session?.user.username || session?.user.name}
              </h4>
              <span className="text-xs w-12 text-gray-600">
                {session?.user.email}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="m-5 flex justify-center items-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <ChevronDown className="hover:bg-gray-200 rounded-md"></ChevronDown>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white">
            <DropdownMenuLabel className="flex justify-center">
              My Account
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Profile></Profile>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Log_out></Log_out>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </main>
  )
}

export default UserNavbar
