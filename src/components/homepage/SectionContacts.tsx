import React from 'react'
import { FC } from 'react'

interface SectionContactsProps {}

const SectionContacts: FC<SectionContactsProps> = () => {
  return (
    <div id="contacts" className="w-full h-80 p-20 bg-[#5C259C] text-white">
      <div className='flex flex-col justify-center items-center'>
        <div className='flex mb-4'>
          logo
          logo
          logo 
        </div>
        <h1 className='text-sm mb-1 font-medium'>© 2023 EPAS Reviewer & Assessment</h1>
        <p className='text-lg text-[#b298dc] font-medium'>Generated on November 23, 2023</p>
      </div>
    </div>
  )
}

export default SectionContacts
