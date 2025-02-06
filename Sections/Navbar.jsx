"use client"
import React from 'react'
import SchoolLogo from "@/assets/images/logo.png"
import Image from 'next/image'
import DropdownMenu from '@/components/DropdownMenu'
// import Sidebar from '@/components/Sidebar'
import Link from 'next/link'
import { useEffect, useState } from "react";


const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className={`sm:w-full z-10 transition-transform lg:max-w-screen   ease-in-out duration-300 text-white flex items-center justify-between px-10 py-2 h-20 font-serif text-lg ${scrolled ? "fixed top-0 bg-[#76B947] shadow-lg h-24 transform translate-y-0 " : "absolute top-44 bg-transparent h-20 sm:h-20 transform translate-y-[-100%]"}`}>
        <div className="flex  z-10 items-center  ">
          <Link href="/" className='flex items-center justify-center w-24 h-24'><Image src={SchoolLogo} alt="logo of the school" className='sm:w-[85px] sm:h-[85px] w-24 h-24' /></Link>
          <div className='flex gap-1 flex-col'>

            <span className='md:hidden sm:hidden lg:flex lg:text-xl whitespace-nowrap font-bold'>Green Heaven English Academy</span>
            <span className='lg:hidden text-2xl'>GHE Academy</span>
            <span className='text-[0.7rem] leading-snug sm:hidden lg:flex z-10 '>Affiliated To The Council For The<br />
              Central Board of Secondary Education (CBSE)</span>
          </div>
        </div>
        <div className='z-10 rounded-full shadow-[0px_0px_15px_6px_rgba(0,_0,_0,_0.1)]  backdrop-blur'>
          <ul className='ml-1 flex h-12 sm:hidden md:flex  lg:flex items-center'>
            <li className='nav'><Link href="/About"><DropdownMenu menuTitle={"About"} menuItems={["Principal-Message", "Manager-Message", "Vision-&-Mission", "Education-Approach"]} /></Link></li>
            <li className='nav'><Link href=""><DropdownMenu menuTitle={"Admissions"} menuItems={["Application-Process", "Fee-Structure"]} /></Link></li>
            <li className='nav'><Link href=""><DropdownMenu menuTitle={"Gallery"} menuItems={[]} /></Link></li>
            <li className='nav'><Link href="/Gallery"><DropdownMenu menuTitle={"CampusFacility"} menuItems={["Principal Message", "Our vision", "our mission"]} /></Link></li>
            <li className='nav md:hidden lg:block'><Link href="/"><DropdownMenu menuTitle={"Certificates"} menuItems={["MandatoryDisclosure", "Our vision", "our mission"]} /></Link></li>
            <li className='mr-1 px-1 hover:bg-white/10 hover:text-white transition duration-300 border border-white/5 rounded-full  shadow-[inset_0px_0px_15px_3px_rgba(0,_0,_0,_0.1)] '><Link href="/Contact"><DropdownMenu menuTitle={"Contact"} menuItems={[]} /></Link></li>
          </ul>
        </div>
        
      </nav >
    </div >
  )
}

export default Navbar
