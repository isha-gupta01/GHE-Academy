import React from 'react'
import SchoolLogo from "@/assets/images/logo.png"
import Email from "@/assets/icons/email.png"
import Image from 'next/image'
import DropdownMenu from '@/components/DropdownMenu'
import Sidebar from '@/components/Sidebar'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <div>
      <div className='flex justify-around py-4  items-center'>
        <div className='uppercase sm:text-xs flex items-center'>
          <Link href="/"><Image src={Email} alt='email' width={30} height={30} /></Link>
          <span className='sm:hidden'>greenheavenacademy2011@gmail.com</span></div>
        <div>Login</div>
      </div>
      <nav className="flex bg-[#2F5233]  text-white items-center justify-between px-4 h-24 font-serif text-lg ">
        <div className="flex gap-3 items-center">
          <Image src={SchoolLogo} alt="logo of the school" className='sm:w-[85px] sm:h-[85px] w-24 h-24  p-1' />
          <div className='flex gap-1 flex-col'>

            <span className='md:hidden sm:hidden lg:flex lg:text-2xl font-bold'>Green Heaven English Academy</span>
            <span className='lg:hidden text-2xl'>GHE Academy</span>
            <span className='text-xs sm:hidden '>Affiliated To The Council For The<br />
              Central Board of Secondary Education (CBSE)</span>
          </div>
        </div>
        <Sidebar className="hidden" />
        <div className=' nav border border-white/15 rounded-full bg-white/10 backdrop-blur'>
          <ul className='flex gap-8 sm:hidden md:flex lg:flex'>
            <li><DropdownMenu menuTitle={"Home"} menuItems={["Principle's Message", "Our vision", "our mission"]} /></li>
            <li><DropdownMenu menuTitle={"Academics"} menuItems={["Principle's Message", "Our vision", "our mission"]} /></li>
            <li><DropdownMenu menuTitle={"Admissions"} menuItems={["Principle's Message", "Our vision", "our mission"]} /></li>
            <li><DropdownMenu menuTitle={"About"} menuItems={["Principle's Message", "Our vision", "our mission"]} /></li>
            <li><DropdownMenu menuTitle={"Contact"} menuItems={["Principle's Message", "Our vision", "our mission"]} /></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}


