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
      <nav className={`sm:w-full z-10  transition-transform lg:max-w-screen   ease-in-out duration-300 text-white flex items-center justify-between px-2 h-20 font-serif text-sm ${scrolled ? "fixed top-0 z-50 bg-[#5E9538] shadow-lg xs:h-24 md:h-32 lg:h-24 transform translate-y-0 " : "absolute md:top-[10rem] sm:top-[9rem] xs:top-[8rem] xl:top-[11rem] bg-transparent h-20 sm:h-[7.5rem] transform translate-y-[-100%]"}`}>
        <div className=" relative flex -px-8 z-10 justify-between gap-8 md:gap-8 xx:gap-[11rem]   items-center  ">
          <div className='relative flex -px-8 z-10 justify-between md:gap-0  sm:gap-4  items-center '>
            <Link href="/" className='flex items-center justify-between '><Image src={SchoolLogo} alt="logo of the school" className='sm:w-[85px] md:h-auto md:w-[86px] sm:h-[auto] xl:w-[120px] xl:h-auto w-24 h-auto' /></Link>
            <div className='flex  flex-col justify-center items-center'>
              <span className=' lg:flex lg:text-xl '><Link href="/"><Image src={Green} alt="Green Heaven English Academy" width={200} height={50} className='lg:w-[165px] md:hidden lg:flex xl:flex' /></Link></span>
              <span className='text-[0.6rem] leading-tight  z-10 flex flex-col justify-center items-center font-ubuntu '>
                <p className='md:hidden flex lg:flex xl:flex '>Affiliated To The Council For The</p>
                <p ><span className='sm:hidden md:hidden xl:flex xs:hidden'>Central Board of Secondary Education </span><span className='md:hidden justify-center xl:flex sm:flex xs:flex'>(CBSE)</span></p>
              </span>
            </div>
          </div>
          <div className='flex sm:gap-4 xs:gap-2 items-center'>
            <Search show="md:hidden" />
            <Sidebar className="hidden " />
          </div>
        </div>

        <div className={`z-10 font-ubuntu ${scrolled ? "bg-[#76B947]" : ""} rounded-full shadow-[0px_0px_5px_2px_rgba(0,_0,_0,_0.1)]   backdrop-blur`}>
          <ul className='ml-1 flex h-16 sm:hidden md:flex xs:hidden  lg:flex items-center'>
            <Search show="flex" className="hidden " />
            <li className='nav'><DropdownMenu menuTitle={"About"} menuItems={["About-Us", "Principal-Message", "Manager-Message", "Vision-&-Mission", "Progress-Report", "Academic-Year", "Institutional-Rules"]} /></li>
            <li className='nav'><DropdownMenu menuTitle={"Admissions"} menuItems={["Application-Process", "Fee-Structure"]} /></li>
            <li className='nav'><DropdownMenu menuTitle={"Certificates"} menuItems={[
              "Affilation-Certificate",
              "Building-Safety-Certificate",
              "Fire-Safety-Certificate",
              "Land-Certificate",
              "Mandatory-Disclosure",
              "No-Objection-Certificate",
              "Recognition-Certificate",
              "School-Infrastructure-Certificate",
              "Self-Certification",
              "Society-Trust-Certificate",
              "Water-Health-&-Sanitation-Certificate"
            ]} /></li>
            <li className='nav whitespace-nowrap'><DropdownMenu menuTitle={"Campus-Facility"} menuItems={["Art-Lab", "Board-Exam-Applicability", "Computer-Lab", "English-Language-Lab", "Extra-Curricular-Activities", "Facility", "Faculty-and-Staff", "Parent-Teacher-Association", "School-Management-Committee", "Science-Lab", "Transportation"]} /></li>
            <li className='nav'><Link href="/Gallery"><DropdownMenu menuTitle={"Gallery"} menuItems={[]} /></Link></li>
            <li className=' transition duration-300 nav'><Link href="/Contact"><DropdownMenu menuTitle={"Contact"} menuItems={[]} /></Link></li>
          </ul>
        </div>

      </nav >
    </div >
  )
}

export default Navbar