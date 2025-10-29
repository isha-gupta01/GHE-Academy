import React from 'react'
import Navbar from '@/Sections/Navbar'
import Hero from '@/Sections/Hero'
import Image from 'next/image'
import Manager from "@/assets/images/manager.jpg"
import SchoolImage from "@/assets/images/ghe1.png"
import Footer from '@/Sections/Footer'
import Updates from "@/components/Updates";



const ManagerMessage = () => {
  return (
    <>
    <Updates/>
    <Navbar/>
    <Hero image={SchoolImage} title="Manager's Message" subBody='"Great things never come from comfort zones."' height={70}/>
    <div className='flex-col mb-10 flex h-auto]'>
      <div><h1 className='font-extralight text-[3rem] mt-4 mb-6 lg:ml-10 sm:mx-4 xs:mx-4'>Manager&apos;s Message</h1></div>
      <div className='flex xs:flex-col sm:flex-col mx-5 lg:flex-row md:flex-row' >
        <Image className='lg:rounded-lg sm:h-auto  sm:w-auto  lg:ml-8 lg:mr-8 lg:h-[500px] lg:w-[500px] md:h-auto md:w-[400px]' src={Manager} alt='Manager' />
        <div className='mx-1 md:ml-[2rem] text-justify sm:mt-8 '>
          <p className='sm:text-[1rem] lg:text-xl'>Since its inception in 1996, the society has been a guiding force in delivering quality education and has become a symbol of excellence. Governed by distinguished personalities from various fields, it is led by people of excellence who work in the larger interest of society.</p>
          <p className='mt-4 sm:text-[1rem] lg:text-xl'>Committed to the philosophy of quality education for all, the society has established two senior secondary schools in Kalsiya, Saharanpur, to serve as many children as possible. Centralized governance by eminent leaders ensures high standards, making these schools torchbearers in education. With a strong belief that children are the nation’s wealth, the society remains dedicated to its fundamental educational principles.</p>


          <div className='flex sm:mt-4 xs:mt-4 lg:mt-16 lg:mr-4'>
            <div className=' w-[1.2rem] h-auto mr-3 lg:ml-auto bg-lime-800'></div>
            <div className='flex  flex-col  w-max'>
              <p className='font-bold'>Mrs. Pooja Sharma</p>
              <p>Manager</p>
              <p>Green Heaven English Academy</p>
            </div>
          </div>
        
        </div>
        
      </div>
    </div>
    <Footer/>
    </>
  )
}


export default ManagerMessage

