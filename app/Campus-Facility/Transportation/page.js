import React from 'react'
import Navbar from '@/Sections/Navbar'
import Footer from '@/Sections/Footer'
import Hero from '@/Sections/Hero'
import SchoolImage from "@/assets/images/ghe1.png"
import Updates from '@/components/Updates'


const Transportation  = () => {
  return (
    <>
        <div>
            <Updates/>
            <Navbar/>
            <Hero image={SchoolImage} title="Transportation" subBody="Excellence in every Student" height={70}/>
            <div className='min-h-screen'>I am the Transportation</div>
            <Footer/>
        </div>
      
    </>
  )
}

export default Transportation