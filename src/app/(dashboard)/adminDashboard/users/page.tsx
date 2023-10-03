import React from 'react'
import UserTable from '@/components/tables/UserTable'

const page = () => {
  return (
    <main className='h-screen p-10'>
        <div className='flex justify-center font-semibold text-2xl pb-10'>
          <h1>USER MANAGEMENT</h1>
        </div>
        <UserTable/>
    </main>
  )
}

export default page