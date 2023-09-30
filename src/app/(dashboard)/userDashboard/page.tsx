import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import React from 'react'

const page = async () => {
  const session = await getServerSession(authOptions)

  if(session){
    NextResponse.json({user: session.user});
  }else{
    NextResponse.json({error: "Not authenticated"})
  }

  return (
    <main className='a bg-gray-100'>
      <div>welcome</div>
      <pre>{JSON.stringify(session)}</pre>
    </main>
  )
}

export default page