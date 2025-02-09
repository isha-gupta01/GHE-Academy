import React from 'react'
import Header from '@/Sections/Header'
import Navbar from '@/Sections/Navbar'
import Footer from '@/Sections/Footer'
import Hero from '@/Sections/Hero'
import SchoolImage from "@/assets/images/ghe1.png"


const BoardExam = () => {
  return (
    <>
        <div>
            <Header/>
            <Navbar/>
            <Hero image={SchoolImage} title="Board Exam Applicability" subBody="Excellence in every Student" height={70}/>
            <div className='flex-col flex md:h-[80vh] sm:h-[100vh]'>
                      <div><h1 className='font-extralight text-[3rem] mt-4 mb-6 lg:ml-14 sm:mx-4'>Art Lab</h1></div>
                      <div className='sm:flex-col mx-5 lg:flex-row md:flex-row flex' >
                        <Image className='lg:rounded-lg sm:h-auto  sm:w-auto  lg:ml-8 lg:mr-8 lg:h-[400px] lg:w-[400px] md:h-auto md:w-[400px]' src={Art} alt='art' />
                        <div className='mx-1 md:ml-[2rem] text-justify sm:mt-8 '>
                          <p className='sm:text-[1rem] lg:text-xl'>The Art Room provides a dynamic and inspiring space for students to explore and develop their artistic talents across various mediums. It offers opportunities for creative expression through computer graphics, clay modeling, painting, drawing, and craft, allowing students to refine their skills and experiment with different artistic techniques. The room is well-equipped with high-quality materials and tools to support both traditional and contemporary art forms, fostering innovation and creativity.</p>
                          <p className='mt-4 sm:text-[1rem] lg:text-xl'>The Music Room is designed to nurture a passion for music and performance. Equipped with a diverse range of musical instruments, it provides students with the opportunity to learn, practice, and collaborate in various musical disciplines.</p>
                        </div>
                      </div>
                    </div>
            <Footer/>
        </div>
      
    </>
  )
}

export default BoardExam