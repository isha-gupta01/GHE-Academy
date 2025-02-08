import React from 'react'
import Email from "@/assets/icons/icons8-email-96.png"
import Whatsapp from "@/assets/icons/icons8-whatsapp-96.png"
import Link from 'next/link'
import Image from 'next/image'


const Header = () => {
    return (
        <div className='sm:block py-1  sm:justify-between sm:px-7 lg:block md:block'>
            <div className=' flex  md:h-[2rem] bg-white justify-between gap-8  items-center'>
                <div className='uppercase sm:text-xs gap-4 flex items-center'>
                    <Link href="mailto:greenheavenacademy2011@gmail.com"><Image src={Email} alt='email' width={30} height={30} /></Link>
                    <Link href="https://wa.me/91" target="_blank" rel="noopener noreferrer">
                        <Image src={Whatsapp} alt='email' width={30} height={30} />
                    </Link>
                </div>
                <div className='font-serif font-bold '><Link href="/LoginPage">Login</Link></div>
            </div>
        </div>
    )
}

export default Header
