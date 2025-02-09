import React from 'react'
import Header from '@/Sections/Header'
import Navbar from '@/Sections/Navbar'
import Footer from '@/Sections/Footer'
import Hero from '@/Sections/Hero'
import SchoolImage from "@/assets/images/ghe1.png"
import Staff from "@/assets/images/staff1.jpg"
import Image from 'next/image'

const FacultyStaff = () => {
  return (
    <>
      <div>
        <Header />
        <Navbar />
        <Hero image={SchoolImage} title="Faculty and Staff" subBody="" height={70} />
        <div className='flex-col flex md:h-[80vh] sm:h-[100vh]'>
          <div><h1 className='font-extralight text-[3rem] mt-4 mb-6 lg:ml-14 sm:mx-4'>Faculty and Staff</h1></div>
          <div className='sm:flex-col mx-5 lg:flex-row md:flex-row flex' >
            <Image className='lg:rounded-lg sm:h-auto  sm:w-auto  lg:ml-8 lg:mr-8 lg:h-auto lg:w-[600px] md:h-auto md:w-[400px]' src={Staff} alt='Staff' />
            <div className='mx-1 md:ml-[2rem] text-justify sm:mt-8 '>
              <p className='sm:text-[1rem] lg:text-xl'>A team of highly dedicated, motivated, and well-qualified faculty members plays a pivotal role in bringing the school's vision to life. With a commitment to academic excellence and holistic development, they create an engaging and nurturing learning environment that fosters intellectual curiosity, creativity, and critical thinking. </p>
              <p className='mt-4 sm:text-[1rem] lg:text-xl'> Through innovative teaching methodologies and personalized guidance, the faculty ensures that each student receives the knowledge, skills, and values needed to excel both academically and personally.</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>

    </>
  )
}

export default FacultyStaff