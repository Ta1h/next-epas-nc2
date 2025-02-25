import React from 'react'
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
import Log_out from '../menu-item/admin/Log_out'

const AdminNavbar = async () => {
  const session = await getServerSession(authOptions)

  return (
    <main className=" flex justify-end pr-16 h-20 border-b shadow-sm">
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
            width={200}
            height={200}
            alt=""
            className="w-10 h-9 rounded-xl border"
          />
        )}
        <div className="hidden lg:flex justify-between items-center ml-2">
          <div className="leading-4">
            <h4 className="font-semibold text-sm w-24">
              {session?.user.username || session?.user.name}
            </h4>
            <span className="text-xs w-12 text-gray-600">
              {session?.user.email}
            </span>
          </div>
        </div>
      </div>
      <div className="m-2 flex justify-center items-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <ChevronDown className="hover:bg-gray-200 rounded-md"></ChevronDown>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white space-y-1">
            <DropdownMenuLabel className="flex justify-center">
              My Account
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Log_out></Log_out>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </main>
  )
}

export default AdminNavbar
