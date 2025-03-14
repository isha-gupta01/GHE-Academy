"use client"
import React from 'react'
import { motion } from "framer-motion"
import Email from "@/assets/icons/white_mail.png"
import Whatsapp from "@/assets/icons/white_WA.png"
import Facebook from "@/assets/icons/image.png"
import Home from "@/assets/icons/home.png"
import Link from 'next/link'
import Image from 'next/image'

const Updates = () => {
    return (
        <div className="relative w-full flex justify-between items-center h-10 overflow-hidden bg-gray-900 py-2 px-4">
            <div className='flex items-center gap-4'>
                <Link href="mailto:greenheavenacademy2011@gmail.com">
                    <Image src={Email} alt='email' width={24} height={24} className='w-6 h-auto sm:w-5' />
                </Link>
                <Link href="https://wa.me/919058695869" target="_blank" rel="noopener noreferrer">
                    <Image src={Whatsapp} alt='whatsapp' width={24} height={24} className='w-6 h-auto sm:w-5' />
                </Link>
                <Link href="https://www.facebook.com/Education.temple.G.H.E.Academy/" target='_blank'>
                    <Image src={Facebook} alt='facebook' width={24} height={24} className='w-6 h-auto sm:w-5' />
                </Link>
            </div>

            <div className="overflow-hidden flex-1 mx-4">
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: "-100%" }}
                    transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                    className="whitespace-nowrap text-green-400 text-sm"
                >
                    Admissions Open 2025-26 - Register Now!!!
                </motion.div>
            </div>

            <div className='flex items-center gap-2'>
                <Link href="/">
                    <Image src={Home} alt='home' width={24} height={24} className='w-6 h-auto sm:w-5 invert' />
                </Link>
                <Link href="/Certificates/Mandatory-Disclosure" className='bg-orange-500 hover:bg-orange-600 text-white rounded-md px-3 py-1 text-center text-sm'>
                    Mandatory Disclosure
                </Link>
            </div>
        </div>
    )
}

export default Updates