"use client"
import React from 'react'
import {motion} from "framer-motion"
import Email from "@/assets/icons/white_mail.png"
import Whatsapp from "@/assets/icons/white_WA.png"
import Facebook from "@/assets/icons/image.png"
import Home from "@/assets/icons/home.png"
import Link from 'next/link'
import Image from 'next/image'

const Updates = () => {
    return (
        <>
            
            <div className="relative w-full flex justify-between  sm:h-10 xs:h-10 overflow-hidden bg-gray-900  py-[0.4rem]">
                <div className='uppercase self-center items-center xs:ml-2  sm:text-xs gap-4 sm:gap-3 sm:ml-3 flex ml-5'>
                        <Link href="mailto:greenheavenacademy2011@gmail.com"><Image src={Email} alt='email'  width={30} height={30} className=' xs:w-[5rem] xs:h-auto sm:w-14 xx:w-10  md:w-[30px]'  /></Link>
                        <Link href="https://wa.me/919058695869" target="_blank" rel="noopener noreferrer">
                        <Image src={Whatsapp} alt='email'  width={30} height={30} className=' xs:w-[5rem] xs:h-auto sm:w-14 xx:w-10  md:w-[30px]'/>
                        </Link>
                        <Link href="https://www.facebook.com/Education.temple.G.H.E.Academy/" target='_blank' className="hover:text-blue-500"><Image src={Facebook} alt='email'  width={27} height={27} className='xs:w-[5rem] xs:h-auto sm:w-14 xx:w-[2.2rem]  md:h-[29px] md:pt-[3px] md:w-auto' /></Link>

                </div>

                <div className="self-center   overflow-hidden">
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: "-100%" }}
                        transition={{ repeat: Infinity, duration: 6, ease:"linear" }}
                        className="whitespace-nowrap text-green-400 text-sm w-fit "
                    >
                        Admissions Open 2025-26 - Register Now!!!
                    </motion.div>
                </div>

                <div className='md:w-[10vw] xs:gap-2 sm:gap-2  lg:text-[16px] flex items-center sm:mr-3 xs:mr-2 md:mr-1'>

                    <Link href="/" className=' invert  '>
                        <Image src={Home} alt='home' width={100} height={30} className='xs:w-[150px] sm:w-[90px] xx:w-[32px] md:w-[48px] xl:w-[32px] lg:w-[28px] '/>
                    </Link>
                    <Link href="/LoginPage" className='border hover:bg-[#5E9538]   bg-gray-800 rounded-3xl  '>
                        <span className='px-4 sm:px-2 text-center text-white py-1   '>Login</span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Updates
