"use client"
import React from 'react'
import {motion} from "framer-motion"
import Email from "@/assets/icons/white_mail.png"
import Whatsapp from "@/assets/icons/white_WA.png"
import Facebook from "@/assets/icons/image.png"
// import Login from "@/assets/icons/login.png.png"
import Link from 'next/link'
import Image from 'next/image'

const Updates = () => {
    return (
        <>
            
            <div className="relative w-full flex justify-between sm:h-10  overflow-hidden bg-gray-900  py-[0.4rem]">
                <div className='uppercase self-center  sm:text-xs gap-4 sm:gap-3 sm:ml-3 flex ml-5'>
                        <Link href="mailto:greenheavenacademy2011@gmail.com"><Image src={Email} alt='email'  width={30} height={30} className='sm:w-14 md:w-[30px]'  /></Link>
                        <Link href="https://wa.me/919058695869" target="_blank" rel="noopener noreferrer">
                        <Image src={Whatsapp} alt='email'  width={30} height={30} className='sm:w-14 md:w-[30px]'/>
                        </Link>
                        <Link href="https://www.facebook.com/Education.temple.G.H.E.Academy/" target='_blank' className="hover:text-blue-500"><Image src={Facebook} alt='email'  width={27} height={27} className='sm:w-14 md:h-[29px] md:pt-[3px] md:w-auto' /></Link>

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

                <div className='self-center md:w-[10vw] sm:gap-2 lg:text-[16px] flex justify-between sm:mr-3  mr-5'>

                    <Link href="/" className='border hover:bg-[#5E9538]   bg-gray-800 rounded-3xl  '>
                        <span className='px-4  sm:px-2 text-center text-white   '>Home</span>
                    </Link>
                    <Link href="/LoginPage" className='border hover:bg-[#5E9538]   bg-gray-800 rounded-3xl  '>
                        <span className='px-4 sm:px-2 text-center text-white   '>Login</span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Updates
