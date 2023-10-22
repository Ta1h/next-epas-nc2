import Link from 'next/link'
import React from 'react'

const LessonCard = () => {
  return (
    <div className='flex-col p-5 m-3 rounded-md shadow-[0px_3px_8px_0px_#00000024]'>
        <h1 className='font-semibold'>1</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae sunt cupiditate laborum, 
            eius tempore doloremque ut voluptates iusto quos dolore laudantium totam alias consequatur blanditiis reprehenderit fugiat, 
            dicta nostrum vero?
        </p>
        <Link href={''} className='flex hover:underline justify-end'>see more</Link>
    </div>
  )
}

export default LessonCard