import React from 'react'
import Nav from '@/Sections/Nav'
import Footer from '@/Sections/Footer'
import Hero from '@/Sections/Hero'
import SchoolImage from "@/assets/images/ghe1.png"
import Image from 'next/image'
import Science from '@/assets/images/sciencelab.png'
import Updates from '@/components/Updates'


const ScienceLab = () => {
  return (
    <>
      <div>
        <Updates />
        <Nav />
        <Hero image={SchoolImage}  title="Science Lab" subBody="" height={70} />
        <div className='flex-col mb-10 flex h-auto'>
                  <div><h1 className='font-extralight text-[3rem] mt-4 mb-6 lg:ml-10 sm:mx-4 xs:mx-4'>Science Lab</h1></div>
                  <div className='sm:flex-col xs:flex-col mx-5 lg:flex-row md:flex-row flex' >
                    <Image className='lg:rounded-lg sm:h-auto  sm:w-auto  lg:ml-8 lg:mr-8 lg:h-auto lg:w-[500px] md:h-[400px] md:w-auto' src={Science} alt='Science' />
                    <div className='mx-1 md:ml-[2rem] text-justify sm:mt-8 xs:mt-8'>
                      <p className='sm:text-[1rem] lg:text-xl'>The laboratories for physics, chemistry and biology are equipped in accordance with the specification of examination boards. The science lab aids the study of science and robotics. All lab are provided with lecture seminar areas too.</p>
                      <p className='mt-4 sm:text-[1rem] lg:text-xl'>A highly sophisticated a fully equipped science lab that provides an open environment for students to experiment and do research work. The three divisions of the science department ensure the students do real experiments and the latest gadgets on display. All these labs are provided with lecture seminar areas too.</p>
                      
                    </div>
        
                  </div>
                </div>
        <Footer />
      </div>

    </>
  )
}

export default ScienceLab