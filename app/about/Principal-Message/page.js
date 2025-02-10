import React from 'react'
import Navbar from '@/Sections/Navbar'
import Hero from '@/Sections/Hero'
import Image from 'next/image'
import Principle from "@/assets/images/principle.png"
import SchoolImage from "@/assets/images/ghe1.png"
import Footer from '@/Sections/Footer'
import Updates from "@/components/Updates";


const PrincipalMessage = () => {
  return (
    <>
    <Updates/>
    <Navbar/>
    <Hero image={SchoolImage} title="Principal's Message" subBody="Excellence in every Student" height={70}/>
    <div className='flex-col flex h-auto'>
      <div><h1 className='font-extralight text-[3rem] mt-4 mb-6 lg:ml-10 sm:mx-4'>Principal's Message</h1></div>
      <div className='sm:flex-col mx-5 lg:flex-row md:flex-row flex' >
        <Image className='lg:rounded-lg sm:h-auto  sm:w-auto  lg:ml-8 lg:mr-8 lg:h-auto lg:w-[500px] md:h-auto md:w-[400px]' src={Principle} alt='Principal'  />
        <div className='mx-1 md:ml-[2rem] text-justify sm:mt-8 '>
          <p className='sm:text-[1rem] lg:text-xl'>At Green Heaven English Academy, we believe education is a partnership between students, parents, and teachers. We foster strong relationships with parents to provide the best support for our students. Our school offers excellent learning opportunities, helping students develop holistically and reach their full potential as confident global citizens.</p>
          <p className='mt-4 sm:text-[1rem] lg:text-xl'>Recognized as one of the top-performing schools in Saharanpur, we take pride in our high academic standards and vibrant learning environment. Our commitment to continuous improvement ensures that students achieve outstanding results, and we constantly strive to enhance the quality of education. We look forward to welcoming you into our school community.</p>
          
          
          <div className='flex sm:mt-4 lg:mt-16 lg:mr-4'>
            <div className=' w-[1.2rem] h-auto mr-3 lg:ml-auto bg-lime-800'></div>
            <div className='flex  flex-col  w-max'>
              <p className='font-bold'>Mr. Manuj Dutt Sharma</p>
              <p>Principle</p>
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


export default PrincipalMessage


