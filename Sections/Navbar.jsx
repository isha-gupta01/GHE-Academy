"use client"
import React from 'react'
import SchoolLogo from "@/assets/images/logo.png"
import Image from 'next/image'
import DropdownMenu from '@/components/DropdownMenu'
import Sidebar from '@/components/Sidebar'
import Link from 'next/link'
import { useEffect, useState } from "react";
import Green from "@/assets/images/Wgreen.png"
import Search from '@/components/Search'


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
      <nav className={`sm:w-full  z-10  transition-transform lg:max-w-screen   ease-in-out duration-300 text-white flex items-center justify-between px-2 h-20 font-serif text-lg ${scrolled ? "fixed top-0 z-50 bg-[#5E9538] shadow-lg h-24 transform translate-y-0 " : "absolute top-48 bg-transparent h-20 sm:h-[7.5rem] transform translate-y-[-100%]"}`}>
        <div className=" relative flex -px-8 z-10 justify-between gap-16  items-center  ">
          <div className='relative flex -px-8 z-10 justify-between md:gap-5 sm:gap-4  items-center '>
            <Link href="/" className='flex items-center justify-between '><Image src={SchoolLogo} alt="logo of the school" className='sm:w-[96px] sm:h-[auto] w-32 h-32' /></Link>
            <div className='flex flex-col justify-center items-center'>
              <span className=' lg:flex lg:text-xl '><Link href="/"><Image src={Green} alt="Green Heaven English Academy" width={200} height={50} /></Link></span>
              <span className='text-[0.6rem] leading-tight sm:hidden lg:flex z-10 flex flex-col justify-center items-center '>
                <p>Affiliated To The Council For The</p>
                <p>Central Board of Secondary Education (CBSE)</p>
              </span>
            </div>
          </div>
          <div className='flex gap-2 items'>
            <Search show="hidden" />
            <Sidebar className="hidden " />
          </div>
        </div>

        <div className={`z-10 ${scrolled ? "bg-[#76B947]" : ""} rounded-full shadow-[0px_0px_5px_2px_rgba(0,_0,_0,_0.1)]   backdrop-blur`}>
          <ul className='ml-1 flex h-16 sm:hidden md:flex  lg:flex items-center'>
            <Search show="flex" className="hidden "/>
            <li className='nav'><Link href=""><DropdownMenu menuTitle={"About"} menuItems={["About-Us", "Principal-Message", "Manager-Message", "Vision-&-Mission", "Progress-Report", "Academic-Year", "Institutional-Rules"]} /></Link></li>
            <li className='nav'><Link href=""><DropdownMenu menuTitle={"Admissions"} menuItems={["Application-Process", "Fee-Structure"]} /></Link></li>
            <li className='nav md:hidden lg:block'><Link href=""><DropdownMenu menuTitle={"Certificates"} menuItems={["Affilation-Certificate", "Building-Safety-Certificate", "Fire-Safety-Certificate", "Land-Certificate", "No-Objection-Certificate", "Recognition-Certificate", "School-Infrastructure-Certificate", "Self-Certification", "Society-Trust-Certificate", "Water-Health-&-Sanitation-Certificate"]} /></Link></li>
            <li className='nav'><Link href=""><DropdownMenu menuTitle={"CampusFacility"} menuItems={["Art-Lab", "Board-Exam-Applicability", "Computer-Lab", "English-Language-Lab", "Extra-Curricular-Activities", "Facility", "Faculty-and-Staff", "Parent-Teacher-Association", "School-Management-Commitee", "Science-Lab", "Transportation"]} /></Link></li>
            <li className='nav'><Link href="/Gallery"><DropdownMenu menuTitle={"Gallery"} menuItems={[]} /></Link></li>
            <li className='mr-1 px-1 py-1.5 hover:bg-white/10 hover:text-white transition duration-300 border border-white/5 rounded-full  shadow-[inset_0px_0px_15px_3px_rgba(0,_0,_0,_0.1)] '><Link href="/Contact"><DropdownMenu menuTitle={"Contact"} menuItems={[]} /></Link></li>
          </ul>
        </div>

      </nav >
    </div >
  )
}

export default Navbar
