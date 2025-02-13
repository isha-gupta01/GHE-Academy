import React from 'react'
import Nav from '@/Sections/Nav'
import Footer from '@/Sections/Footer'
import Hero from '@/Sections/Hero'
import SchoolImage from "@/assets/images/ghe1.png"
import Updates from '@/components/Updates'
import Staff from "@/assets/images/staff1.jpg"
import Image from 'next/image'

const FacultyStaff = () => {
  return (
    <>
      <div>
        <Updates/>
        <Nav />
        <Hero image={SchoolImage}  title="Faculty and Staff" subBody="" height={70} />
        <div className='h-auto  mb-10 flex flex-col items-center p-4'>
          <div><h1 className='text-3xl mt-8 font-bold text-green-700'>Faculty and Staff</h1></div>
          <div className='w-full mt-12 shadow-[0px_0px_5px_2px_rgba(0,_0,_0,_0.1)] p-3 pb-8 rounded-lg max-w-3xl flex flex-col items-center gap-4"' >
            <Image className='w-full rounded-lg shadow-md]' src={Staff} alt='Staff' />
            <div className='mx-1 text-justify sm:mt-8'>
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