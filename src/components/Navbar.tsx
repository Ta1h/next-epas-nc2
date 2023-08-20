"use client";

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div>
        <Link href={"/"}>
            <Image
                priority
                width="120"
                height="120"
                quality={100}
                src="logo.svg"
                alt="Logo"
            />

        </Link>
    </div>
  )
}

export default Navbar