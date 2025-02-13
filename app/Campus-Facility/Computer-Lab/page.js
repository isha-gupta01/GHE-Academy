import React from 'react'
import Nav from '@/Sections/Nav'
import Footer from '@/Sections/Footer'
import Hero from '@/Sections/Hero'
import SchoolImage from "@/assets/images/ghe1.png"
import Image from 'next/image'
import Computer from '@/assets/images/computerlab.png'
import Updates from '@/components/Updates'


const ComputerLab = () => {
  return (
    <>
      <div>
        <Updates />
        <Nav />
        <Hero image={SchoolImage} title="Computer Lab" subBody="" height={70} />
        <div className='flex-col mb-10 flex h-auto'>
          <div><h1 className='font-extralight text-[3rem] mt-4 mb-6 lg:ml-10 sm:mx-4 xs:mx-4'>Computer Lab</h1></div>
          <div className='sm:flex-col xs:flex-col mx-5 lg:flex-row md:flex-row flex' >
            <Image className='lg:rounded-lg sm:h-auto  sm:w-auto  lg:ml-8 lg:mr-8 lg:h-auto lg:w-[500px] md:h-[400px] md:w-auto' src={Computer} alt='computer' />
            <div className='mx-1 md:ml-[2rem] text-justify sm:mt-8 xs:mt-8 '>
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