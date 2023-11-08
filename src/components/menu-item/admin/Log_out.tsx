'use client'

import { Button } from '@/components/ui/Button'
import { LogOut } from 'lucide-react'
import { signOut } from 'next-auth/react'
import React from 'react'

const page = () => {
  return (
    <div>
      <Button
        onClick={() =>
          signOut({
            redirect: true,
            callbackUrl: '/admin/signin',
          })
        }
        variant="menu_item"
      >
        <LogOut className="w-4 mr-2" />
        Log out
      </Button>
    </div>
  )
}

export default page
