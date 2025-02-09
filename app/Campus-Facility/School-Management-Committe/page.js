import React from 'react'
import Header from '@/Sections/Header'
import Navbar from '@/Sections/Navbar'
import Footer from '@/Sections/Footer'
import Hero from '@/Sections/Hero'
import SchoolImage from "@/assets/images/ghe1.png"


const SchoolManagementCommitte  = () => {
  return (
    <>
        <div>
            <Header/>
            <Navbar/>
            <Hero image={SchoolImage} title="School Management Committe" subBody="Excellence in every Student" height={70}/>
            <div className='min-h-screen'>I am the SchoolManagementCommitte</div>
            <Footer/>
        </div>
      
    </>
  )
}

export default SchoolManagementCommitte