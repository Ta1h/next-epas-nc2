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
    <main >
      <div className='grid grid-cols-6 p-5 gap-5'>
        <div className='p-3 col-span-4 rounded-md shadow-[0px_3px_8px_0px_#00000024]'>1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae sunt cupiditate laborum, eius tempore doloremque ut voluptates iusto quos dolore laudantium totam alias consequatur blanditiis reprehenderit fugiat, dicta nostrum vero?</div>
        <div className='p-3 col-span-2 rounded-md shadow-[0px_3px_8px_0px_#00000024]'>2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, eius doloremque! Delectus accusantium tenetur illum porro magni saepe dolorem totam exercitationem officia voluptatibus minus quidem, possimus quod molestiae consequatur unde!</div>
        <div className='p-3 col-span-3 rounded-md shadow-[0px_3px_8px_0px_#00000024]'>3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam laudantium cupiditate earum eum animi quas ex repellendus quasi maxime dolorem, ea dolores consequatur vitae culpa beatae quisquam magni quaerat unde.</div>
        <div className='p-3 col-span-3 rounded-md shadow-[0px_3px_8px_0px_#00000024]'>4 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa reprehenderit consequatur sint saepe quo, a iusto natus praesentium, autem aliquam, quasi adipisci facilis molestiae voluptatum quam sapiente. Doloribus, labore cumque!</div>
      </div>
    </main>
  )
}

export default page