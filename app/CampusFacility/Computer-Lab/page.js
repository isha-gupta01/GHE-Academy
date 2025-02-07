import React from 'react'
import Header from '@/Sections/Header'
import Navbar from '@/Sections/Navbar'
import Footer from '@/Sections/Footer'
import Hero from '@/Sections/Hero'
import SchoolImage from "@/assets/images/ghe1.png"


const ComputerLab = () => {
  return (
    <>
        <div>
            <Header/>
            <Navbar/>
            <Hero image={SchoolImage} title="Computer Lab" subBody="Excellence in every Student" height={70}/>
            <div className='min-h-screen'>I am the ComputerLab</div>
            <Footer/>
        </div>
      
    </>
  )
}

export default ComputerLab