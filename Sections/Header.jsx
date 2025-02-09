import React from 'react'
import Email from "@/assets/icons/icons8-email-96.png"
import Login from "@/assets/icons/login.png.png"
import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa'



const Header = () => {
    return (
        <div className='sm:block py-1  sm:justify-between sm:px-7 lg:block md:block pt-[0.5rem]'>
            <div className=' flex md:h-[2rem] bg-white justify-between gap-8  items-center'>
                <div className='uppercase sm:text-xs gap-4 flex items-center'>
                    <Link href="mailto:greenheavenacademy2011@gmail.com"><Image src={Email} alt='email' width={30} height={30} /></Link>
                    <Link href="https://wa.me/91" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp size={30} />
                    </Link>
                    <Link href="#" className="hover:text-blue-500"><FaFacebook size={28} /></Link>

                </div>
                <div className='flex gap-3 mb-[2px]'>

                    <Link href="/LoginPage" className='border hover:bg-[#5E9538]  py-1 bg-gray-800 rounded-3xl  '>
                        <span className='px-4  text-center text-white   '>Login</span>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Header
