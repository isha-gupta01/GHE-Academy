import React from 'react'
import Email from "@/assets/icons/email.png"
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
    return (
        <div>
            <div className='flex bg-gray-400/25 justify-around py-4  items-center'>
                <div className='uppercase sm:text-xs flex items-center'>
                    <Link href="/About"><Image src={Email} alt='email' width={30} height={30} /></Link>
                    <span className='sm:hidden'>greenheavenacademy2011@gmail.com</span></div>
                <div>Login</div>
            </div>
        </div>
    )
}

export default Header
