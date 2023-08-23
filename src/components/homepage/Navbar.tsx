"use client";

import { useState, useEffect, Fragment} from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Button } from "@/components/ui/Button"
import ScrollLink from '@/components/ui/ScrollLink';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [controlNavbar, lastScrollY]);

  return (
    <div className='flex justify-between mx-10 my-5'>
        <div className=' lg:px-8'>
          <Link href={"/"}>
              <Image
                  priority
                  width="100"
                  height="140"
                  quality={100}
                  src="logo1.svg"
                  alt="Logo"
                  className='pt-1'
              />
          </Link>
        </div>
        <div className="flex-auto hidden z-50 lg:flex lg:justify-center lg:gap-x-12">
          <Button variant="link">
            <Link href="/">Home</Link>
          </Button>
          <Button variant="link">
            <ScrollLink href="#programs">Programs</ScrollLink>
          </Button>
          <Button variant="link">
            <ScrollLink href="#about">About</ScrollLink>
          </Button>
          <Button variant="link">
            <ScrollLink href="#contacts">Contacts</ScrollLink>
          </Button>
        </div>
        <div className=' hidden lg:flex lg:gap-x-5'>
          <Button variant="outline" className='px-8'>
            <Link href="/">Login</Link>
          </Button>
          <Button variant="default" className='px-8'>
            <Link href="/">Sign up</Link>
          </Button>
        </div>
        <div className='flex-center place-content-end'>
          <MobileMenu/>
        </div>
    </div>
  )
}

export default Navbar