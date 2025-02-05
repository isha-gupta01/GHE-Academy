// "use client"
import React from 'react'
// import Logo from "@/app/favicon.ico"
import SchoolLogo from "@/assests/SchoolLogo.png"
import Image from 'next/image'
// import Link from 'next/link'
// import { useState } from 'react';
import DropdownMenu from '@/components/DropdownMenu'

export const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <div className="flex gap-3 items-center">
            <Image src={SchoolLogo} alt="logo of the school" width={50} height={50} className=''/>
            {/* <Logo className="size-20"/> */}
            <span>Logo</span></div>
        <ul className='flex gap-16'>
            
            <li><DropdownMenu menuTitle={"Home"} menuItems={["Principle's Message","Our vision","our mission"]}/></li>
            <li><DropdownMenu menuTitle={"Academics"} menuItems={["Principle's Message","Our vision","our mission"]}/></li>
            <li><DropdownMenu menuTitle={"Admissions"} menuItems={["Principle's Message","Our vision","our mission"]}/></li>
            <li><DropdownMenu menuTitle={"About"} menuItems={["Principle's Message","Our vision","our mission"]}/></li>
            <li><DropdownMenu menuTitle={"Contact"} menuItems={["Principle's Message","Our vision","our mission"]}/></li>
      
        </ul>
      </div>
    </div>
  )
}


