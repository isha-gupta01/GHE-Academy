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
            
            <div className="relative w-full flex justify-between   overflow-hidden bg-gray-900  py-[0.4rem]">
                <div className='uppercase sm:text-xs gap-4 flex ml-5'>
                        <Link href="mailto:greenheavenacademy2011@gmail.com"><Image src={Email} alt='email'  width={30} height={30} /></Link>
                        <Link href="https://wa.me/91" target="_blank" rel="noopener noreferrer">
                        <Image src={Whatsapp} alt='email'  width={30} height={30} />
                        </Link>
                        <Link href="https://www.facebook.com/Education.temple.G.H.E.Academy/" target='_blank' className="hover:text-blue-500"><Image src={Facebook} alt='email'  width={30} height={30} /></Link>

                </div>

                <div className="self-center    overflow-hidden">
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: "-100%" }}
                        transition={{ repeat: Infinity, duration: 6, ease:"linear" }}
                        className="whitespace-nowrap text-green-400 text-sm w-fit "
                    >
                        Admissions Open 2025-26 - Register Now!!!
                    </motion.div>
                </div>

                <div className='self-center mr-5'>

                    <Link href="/LoginPage" className='border hover:bg-[#5E9538]  py-1 bg-gray-800 rounded-3xl  '>
                        <span className='px-4  text-center text-white   '>Login</span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Updates
