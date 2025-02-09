import React from 'react'
import Header from '@/Sections/Header'
import Navbar from '@/Sections/Navbar'
import Footer from '@/Sections/Footer'
import Hero from '@/Sections/Hero'
import SchoolImage from "@/assets/images/ghe1.png"
import Image from 'next/image'
import Computer from '@/assets/images/computerlab.png'


const ComputerLab = () => {
  return (
    <>
      <div>
        <Header />
        <Navbar />
        <Hero image={SchoolImage} title="Computer Lab" subBody="Excellence in every Student" height={70} />
        <div className='flex-col flex md:h-[80vh] sm:h-[100vh]'>
          <div><h1 className='font-extralight text-[3rem] mt-4 mb-6 lg:ml-14 sm:mx-4'>Computer Lab</h1></div>
          <div className='sm:flex-col mx-5 lg:flex-row md:flex-row flex' >
            <Image className='lg:rounded-lg sm:h-auto  sm:w-auto  lg:ml-8 lg:mr-8 lg:h-[400px] lg:w-[400px] md:h-auto md:w-[400px]' src={Computer} alt='computer' />
            <div className='mx-1 md:ml-[2rem] text-justify sm:mt-8 '>
              <p className='sm:text-[1rem] lg:text-xl'>Computer lab of the School has a computer laboratory with over 25 computers in the lab assessable to students. It has advanced infrastructure in terms of hardware and software which cater to the requirements of the students, teachers and the curriculum. The school is equipped with a dedicated broadband internet connection for enterprising students get a chance to be familiar with the internet. They do comprehensive research for their project and presentations.</p>
              <p className='mt-4 sm:text-[1rem] lg:text-xl'>The department has qualified and committed teachers to teach different classes at different levels i.e. primary, secondary. Sr. Secondary. The faculity members make continuous efforts to see that the students must get expertise in practical implementation of tools they have in their curriculum.</p>
            </div>
          </div>
        </div>            
        <Footer />
      </div>

    </>
  )
}

export default ComputerLab