import Link from 'next/link'
import React from 'react'

const lesson = () => {
  return (
    <div className="p-10">
      <h1 className="flex justify-center font-semibold text-2xl mb-10">
        LESSON SECTION
      </h1>
      <div className="grid lg:grid-cols-3 gap-7 px-32 items-center">
        <Link
          href={'lesson/unit_1'}
          className="flex-col p-5 h-36 rounded-md hover:bg-gray-50 shadow-[0px_3px_8px_0px_#00000024]"
        >
          <h1 className="font-semibold">Unit 1:</h1>
          <p className="pb-">Assemble Electronic Products</p>
        </Link>

        <Link
          href={'lesson/unit_2'}
          className="flex-col p-5 h-36 rounded-md hover:bg-gray-50 shadow-[0px_3px_8px_0px_#00000024]"
        >
          <h1 className="font-semibold">Unit 2:</h1>
          <p className="pb-">
            Service Consumer Electronic Products and Systems
          </p>
        </Link>

        <Link
          href={'lesson/unit_3'}
          className="flex-col p-5 h-36 rounded-md hover:bg-gray-50 shadow-[0px_3px_8px_0px_#00000024]"
        >
          <h1 className="font-semibold">Unit 3:</h1>
          <p className="pb-">
            Service Industrial Electronic Modules, Products and Systems
          </p>
        </Link>
      </div>
    </div>
  )
}

export default lesson
