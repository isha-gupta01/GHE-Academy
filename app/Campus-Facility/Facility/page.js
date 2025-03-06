import React from 'react'
import Navbar from '@/Sections/Navbar'
import Footer from '@/Sections/Footer'
import Hero from '@/Sections/Hero'
import SchoolImage from "@/assets/images/facility.png"
import Image from 'next/image'
import Updates from '@/components/Updates'


const Facility = () => {
  return (
    <>
      <div>
        <Updates />
        <Navbar />
        <Hero image={SchoolImage} title="Facility" subBody="" height={70} />
        <div className='flex-col mb-10 flex h-auto'>
          <div><h1 className='font-extralight text-[3rem] mt-4 mb-6 lg:ml-10 sm:mx-4 xs:mx-4'>Facility</h1></div>
          <div className='sm:flex-col xs:flex-col mx-5 lg:flex-row md:flex-row flex' >
            <Image className='lg:rounded-lg sm:h-72  sm:w-auto xs:h-72  xs:w-auto  lg:ml-8 lg:mr-8 lg:h-auto lg:w-[500px] md:h-auto md:w-[400px]' src={SchoolImage} alt='SchoolImage' />
            <div className='mx-1 md:ml-[2rem] text-justify sm:mt-8 xs:mt-8'>
              <p className='sm:text-[1rem] lg:text-xl'>We at GHE Academy encourage children to develop the qualities of self discipline, positive self image, teamwork, spirit of adventures and leadership. We provide learning opportunities which appeal to children's multiple intelligence. We beleive in learning by doing.</p>
              <p className='mt-4 sm:text-[1rem] lg:text-xl'>Our school campus offers a wide range of learning facilities with the latest in the class room facilities and infrastructure. The school houses extensive Recreational and sports facilities that cater to students needs.</p>
              <ul className='mt-4 sm:text-[1rem] lg:text-xl list-decimal ml-5 '>
                <li>Dedicated Outdoor Play zones</li>
                <li>English Language Lab</li>
                <li>Computer Lab</li>
                <li>Science Lab</li>
                <li>Robotics</li>
                <li>Exhaustive training by expert coachs</li>
                <li>Art Room</li>
              </ul>
            </div>

          </div>
        </div>
        <Footer />
      </div>

    </>
  )
}

export default Facility