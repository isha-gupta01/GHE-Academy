import React from 'react'
import Navbar from '@/Sections/Navbar'
import Footer from '@/Sections/Footer'
import Hero from '@/Sections/Hero'
import SchoolImage from "@/assets/images/ghe1.png"
import Updates from '@/components/Updates'
import Bus from "@/assets/images/bus.jpg"
import Image from 'next/image'


const Transportation = () => {

  return (
    <>
      <div>
        <Updates />
        <Navbar />
        <Hero image={SchoolImage}  title="Transports" subBody="" height={70} />
        <div className='flex-col flex h-auto mb-10'>
          <div><h1 className='font-extralight text-[3rem] mt-4 mb-6 lg:ml-14 sm:mx-4 xs:mx-4'>Transportation</h1></div>
          <div className='sm:flex-col xs:flex-col mx-5 lg:flex-row md:flex-row flex' >
            <Image className='lg:rounded-lg sm:h-auto  sm:w-auto  lg:ml-8 lg:mr-8 lg:h-[300px] lg:w-[400px] md:h-auto md:w-[400px]' src={Bus} alt='Science' />
            <div className='mx-1 md:ml-[2rem] text-justify sm:mt-8 xs:mt-8 '>
              <p className='sm:text-[1rem] lg:text-xl'>Our school provides safe and reliable transportation facilities for students. We have a fleet of well-maintained buses equipped with GPS tracking and CCTV surveillance. </p>
              <p className='mt-4 sm:text-[1rem] lg:text-xl'>Experienced and trained drivers, along with support staff, ensure a secure and comfortable journey. The routes are carefully planned to cover key areas for convenient pick-up and drop-off. Safety protocols are strictly followed to provide a hassle-free travel experience for students.</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>

    </>
  )
}

export default Transportation