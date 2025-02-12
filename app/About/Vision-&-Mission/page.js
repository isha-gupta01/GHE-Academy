import React from 'react'
import Navbar from '@/Sections/Navbar'
import Hero from '@/Sections/Hero'
import Pencil2 from "@/assets/images/library2.jpg"
import Footer from '@/Sections/Footer'
import Updates from "@/components/Updates";



const VisionMission = () => {
  return (
    <>
      <div className=''>
        <Updates/>
        <Navbar />
        <Hero image={Pencil2} title="Vision & Mission" subBody="Excellence in every Student" height={70} />
        <div className='w-[80%] mb-10 mr-auto ml-auto'>
          <h1 className='text-center mt-10 font-extralight text-[3rem] text-[#76B947]'>Vision & Mission</h1>
          <p className='text-lg'>Green Heaven English Academy provides a balanced mix of academic excellence and personal development, creating opportunities for students to thrive in a nurturing environment and reach their full potential.</p>
          <div className='shadow-[0px_0px_12px_0px_rgba(0,_0,_0,_0.35)] rounded-3xl bg-[#76b9478d] mt-10 p-5'>
            <h1 className='text-center mb-2 text-[#2F5233] font-bold text-[2rem]'>Vision</h1>
            <h2 className='text-xl text-[#2F5233]'>Our vision is to create a nurturing and inclusive learning environment where every student can unlock their full potential, embrace lifelong learning, and become responsible, compassionate global citizens. We aim to inspire curiosity, foster creativity, and develop the skills needed to excel in a rapidly changing world. Through strong values and a student-centered approach, we strive to build a foundation for lifelong success.</h2>
          </div>
          <div className='shadow-[0px_0px_12px_0px_rgba(0,_0,_0,_0.35)] rounded-3xl bg-[#76b9478d] my-10 p-5'>
            <h1 className='text-center mb-2 text-[#2F5233] font-bold text-[2rem]'>Mission</h1>
            <h2 className='text-xl text-[#2F5233]'>Our mission is to provide a high-quality, holistic education that empowers students to grow intellectually, socially, and emotionally. We are committed to fostering a culture of respect, discipline, and collaboration, where each child is encouraged to strive for excellence, develop critical thinking, and contribute positively to society. Through innovative teaching methods and a supportive community, we prepare our students for a successful future.</h2>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default VisionMission
