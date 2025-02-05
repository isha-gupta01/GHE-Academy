import React from 'react'
import SchoolLogo from "@/assets/images/logo.png"
import Image from 'next/image'
import DropdownMenu from '@/components/DropdownMenu'
import Sidebar from '@/components/Sidebar'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <nav className="flex bg-[#76B947]  text-white items-center justify-between px-4 h-20 font-serif text-lg ">
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
        <div className='z-10  border border-white/15 rounded-full bg-white/10 backdrop-blur'>
          <ul className='ml-1 flex h-16 sm:hidden md:flex lg:flex items-center'>
            <li className='nav'><Link href="/About"><DropdownMenu menuTitle={"About"} menuItems={["Principal-Message","Manager-Message", "Vision-&-Mission","Education-Approach"]} /></Link></li>
            <li className='nav'><Link href=""><DropdownMenu menuTitle={"Home"} menuItems={["Principal-Message", "Our vision", "our mission"]} /></Link></li>
            <li className='nav'><Link href=""><DropdownMenu menuTitle={"Academics"} menuItems={["Principal Message", "Our vision", "our mission"]} /></Link></li>
            <li className='nav'><Link href=""><DropdownMenu menuTitle={"Admissions"} menuItems={["Principal Message", "Our vision", "our mission"]} /></Link></li>
            <li className='nav bg-white mr-1  text-gray-900 hover:bg-white/70 hover:text-gray-900'><Link href="/Contact"><DropdownMenu menuTitle={"Contact"} menuItems={["Principal Message", "Our vision", "our mission"]} /></Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
