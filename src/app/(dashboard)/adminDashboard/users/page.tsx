import React from 'react'
import UserTable from '@/components/ui/UserTable'

const page = () => {
  return (
    <main className='p-5'>
        <div className='font-semibold text-2xl pb-5'>
          <h1>USER MANAGEMENT</h1>
        </div>
        <UserTable/>
    </main>
  )
}

export default page