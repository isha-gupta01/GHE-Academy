import React from 'react'
import Email from "@/assets/icons/icons8-email-64.png"
import Link from 'next/link'
import Image from 'next/image'
import Sidebar from '@/components/Sidebar'


const Header = () => {
    return (
        <div className='sm:flex sm:justify-between sm:px-7 lg:block md:block'>
            <div className='relative flex bg-white justify-between gap-8 my-5  items-center'>
                <div className='uppercase sm:text-xs gap-4 flex items-center'>
                    <Link href="/About"><Image src={Email} alt='email' width={40} height={40} /></Link>
                    <span className='sm:hidden lg:block md:block'>greenheavenacademy2011@gmail.com</span>
                </div>
                <div>Login</div>
            </div>
            <Sidebar className="hidden relative" />
        </div>
    )
}

export default Header
