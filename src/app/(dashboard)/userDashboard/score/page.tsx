import React from 'react'

const page = () => {
  return (
    <div className="flex p-10">
      <div className='p-5 rounded-md w-72 shadow-[0px_3px_8px_0px_#00000024]'>
        <h1 className='mb-3 font-medium text-gray-500'>OVERALL SCORE</h1>
        <div className='grid lg:grid-cols-3'>
          <div className='flex-row justify-center col-span-2'>
            <h1 className='text-xl font-bold flex justify-center'>115</h1>
            <p className='text-sm font-medium flex justify-center text-gray-500'>EXCELLENT</p>
          </div> 
          <div className='text-xs'>
            <p className='font-medium text-gray-500'>MAX SCORE</p>
            <h1 className='font-bold'>140</h1>
          </div>
        </div>
      </div>

      <div className='p-5 ml-14 rounded-md  shadow-[0px_3px_8px_0px_#00000024]'>
        <h1 className='mb-3'>UNIT SCORES</h1> 
        <div className='grid lg:grid-cols-3'>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
    
    </div>
  )
}

export default page