import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import React from 'react'

const page = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <div>welcome to dashboard user hatdogies</div>
  )
}

export default page