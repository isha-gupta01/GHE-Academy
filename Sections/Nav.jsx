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


const Nav = () => {

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
    <nav className={`z-10 flex justify-between  w-[100vw] transition-transform lg:h-[8vw] items-center lg:max-w-screen  ease-in-out duration-300 px-2 h-20 ${scrolled ? "fixed top-0 z-50 bg-[#5E9538] shadow-lg h-20 transform translate-y-0 " : "absolute xs:top-[17.2rem] md:top-[10rem] sm:top-[8rem]  bg-transparent h-96 sm:h-[4rem] transform translate-y-[-100%]"}`}>
        <div className="relative flex flex-row  xs:w-[100vw] md:w-[18vw] lg:w-[30vw]  justify-between items-center  ">
          <div className='relative flex xs:w-[75vw] lg:gap-2  sm:w-[60vw] lg:w-[100vw] items-center'>
            <Link href="/" className=''><Image src={SchoolLogo} alt="logo of the school" className='xs:w-[80px]  xs:h-auto md:w-[100px]   md:h-auto lg:w-[90px]  lg:h-auto' /></Link>
            <div className='flex flex-col items-center'>
              <span className=''><Link href="/"><Image src={Green} alt="Green Heaven English Academy" width={400} height={50} className='md:hidden lg:flex xs:w-[150px] xs:h-auto lg:w-[180px] lg:h-auto' /></Link></span>
              <span className='text-white xs:text-[0.5rem] lg:text-[0.4rem] md:hidden  lg:flex text-[0.6rem] leading-tight self-center  z-10 flex flex-col justify-center items-center font-ubuntu '>
                <p className='text-center '>Affiliated To The Council For The</p>
                <p ><span className='xs:hidden self-center lg:flex'>Central Board of Secondary Education </span><span className='lg:hidden  justify-center xs:flex sm:flex'>(CBSE)</span></p>
              </span>
            </div>
          </div>

          <div className='flex md:hidden xs:w-[15vw] xs:gap-[0.5rem] md:justify-center'>
            <Search show="md:hidden"  />
            <Sidebar  />
          </div>
        </div>

        <div className={`z-10 lg:h-[4.3rem] lg:ml-6 font-ubuntu ${scrolled ? "bg-[#76B947]" : ""} rounded-full shadow-[0px_0px_5px_2px_rgba(0,_0,_0,_0.1)]   backdrop-blur`}>
          
          <ul className='xs:hidden sm:hidden items-center md:flex '>
            <Search show="flex"   />
            <li className='nav'><DropdownMenu menuTitle={"About"} menuItems={["About-Us", "Principal-Message", "Manager-Message", "Vision-&-Mission", "Progress-Report", "Academic-Year", "Institutional-Rules"]} /></li>
            <li className='nav'><DropdownMenu menuTitle={"Admissions"} menuItems={["Application-Process", "Fee-Structure"]} /></li>
            <li className='nav lg:block'><DropdownMenu menuTitle={"Certificates"} menuItems={["Affilation-Certificate","Building-Safety-Certificate","Fire-Safety-Certificate","Land-Certificate","Mandatory-Disclosure","No-Objection-Certificate","Recognition-Certificate","School-Infrastructure-Certificate","Self-Certification","Society-Trust-Certificate","Water-Health-&-Sanitation-Certificate"]} /></li>
            <li className='nav'><DropdownMenu menuTitle={"Campus-Facility"} menuItems={["Art-Lab", "Board-Exam-Applicability", "Computer-Lab", "English-Language-Lab", "Extra-Curricular-Activities", "Facility", "Faculty-and-Staff", "Parent-Teacher-Association", "School-Management-Committee", "Science-Lab", "Transportation"]} /></li>
            <li className='nav'><Link href="/Gallery"><DropdownMenu menuTitle={"Gallery"} menuItems={[]} /></Link></li>
            <li className=' transition duration-300 nav'><Link href="/Contact"><DropdownMenu menuTitle={"Contact"} menuItems={[]} /></Link></li>
          </ul>

        </div>

    </nav >
  )
}

export default Nav