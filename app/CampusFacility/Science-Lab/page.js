import React from 'react'
import Header from '@/Sections/Header'
import Navbar from '@/Sections/Navbar'
import Footer from '@/Sections/Footer'
import Hero from '@/Sections/Hero'
import SchoolImage from "@/assets/images/ghe1.png"
import Image from 'next/image'
import Science from '@/assets/images/sciencelab.png'


const ScienceLab = () => {
  return (
    <>
      <div>
        <Header />
        <Navbar />
        <Hero image={SchoolImage} title="Science Lab" subBody="Excellence in every Student" height={70} />
        <div className='flex-col flex md:h-[80vh] sm:h-[100vh]'>
          <div><h1 className='font-extralight text-[3rem] mt-4 mb-6 lg:ml-14 sm:mx-4'>Science Lab</h1></div>
          <div className='sm:flex-col mx-5 lg:flex-row md:flex-row flex' >
            <Image className='lg:rounded-lg sm:h-auto  sm:w-auto  lg:ml-8 lg:mr-8 lg:h-[400px] lg:w-[400px] md:h-auto md:w-[400px]' src={Science} alt='Science' />
            <div className='mx-1 md:ml-[2rem] text-justify sm:mt-8 '>
              <p className='sm:text-[1rem] lg:text-xl'>The laboratories for physics, chemistry and biology are equipped in accordance with the specification of examination boards. The science lab aids the study of science and robotics. All lab are provided with lecture seminar areas too.</p>
              <p className='mt-4 sm:text-[1rem] lg:text-xl'>A highly sophisticated a fully equipped science lab that provides an open environment for students to experiment and do research work. The three divisions of the science department ensure the students do real experiments and the latest gadgets on display. All these labs are provided with lecture seminar areas too.</p>
              <p className='mt-4 sm:text-[1rem] lg:text-xl'>They are workshops of practical experiment going far beyond the limits of prescribed syllabus. The teachers and the science lab challenge students with exciting projects, giving them a strenuous time clashing with known principles and exciting data. This is a place where the divine curiosity of students is at work.</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>

    </>
  )
}

export default ScienceLab