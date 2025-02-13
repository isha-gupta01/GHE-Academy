import React from 'react'
import Navbar from '@/Sections/Navbar'
import Footer from '@/Sections/Footer'
import Hero from '@/Sections/Hero'
import SchoolImage from "@/assets/images/ghe1.png"
import Image from 'next/image'
import English from '@/assets/images/englishlab.png'
import Updates from '@/components/Updates'


const EnglishLab = () => {
  return (
    <>
        <div>
            <Updates/>
            <Navbar/>
            <Hero image={SchoolImage}  title="English Language Lab" subBody="" height={70}/>
            <div className='flex-col flex md:h-[80vh] sm:h-[100vh]'>
                      <div><h1 className='font-extralight text-[3rem] mt-4 mb-6 lg:ml-14 sm:mx-4'>English Language Lab</h1></div>
                      <div className='sm:flex-col mx-5 lg:flex-row md:flex-row flex' >
                        <Image className='lg:rounded-lg sm:h-auto  sm:w-auto  lg:ml-8 lg:mr-8 lg:h-[400px] lg:w-[400px] md:h-auto md:w-[400px]' src={English} alt='English' />
                        <div className='mx-1 md:ml-[2rem] text-justify sm:mt-8 '>
                          <p className='sm:text-[1rem] lg:text-xl'>English language lab is designed to develop English language proficiency and the learners of English as a second language.</p>
                          <p className='mt-4 sm:text-[1rem] lg:text-xl'>ELL is a unique English learning programme that prepones the participant to communicate in English with clarity and confidence. it offers the best in terms of continuous evaluation, content, teachers expertise and methodology. The methodology is a blend of instructor LED training ILT with a Computer Based training CBT, practice and evaluation. The session is designed so that the course follows a parallel structure in which concepts are introduced in the ILT session and, Reinform with practice and innovative approach to learning in the CBT session.</p>
                        </div>
                      </div>
                    </div>    
            <Footer/>
        </div>
      
    </>
  )
}

export default EnglishLab