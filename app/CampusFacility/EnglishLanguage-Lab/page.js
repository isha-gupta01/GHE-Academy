import React from 'react'
import Header from '@/Sections/Header'
import Navbar from '@/Sections/Navbar'
import Footer from '@/Sections/Footer'
import Hero from '@/Sections/Hero'
import SchoolImage from "@/assets/images/ghe1.png"


const EnglishLab = () => {
  return (
    <>
        <div>
            <Header/>
            <Navbar/>
            <Hero image={SchoolImage} title="English Lab" subBody="Excellence in every Student" height={70}/>
            <div className='min-h-screen'>I am the EnglishLab</div>
            <Footer/>
        </div>
      
    </>
  )
}

export default EnglishLab