import React from 'react'
import Navbar from '@/Sections/Navbar'
import Footer from '@/Sections/Footer'
import Hero from '@/Sections/Hero'
import SchoolImage from "@/assets/images/ghe1.png"
import Updates from '@/components/Updates'


const SchoolManagementCommitte = () => {
  const images = [
    "/certificates/SMC.jpg",
  ];
  return (
    <>
      <div>
        <Updates />
        <Navbar />
        <Hero image={SchoolImage}  title="School Management Committee" subBody="" height={70} />
        <div className="h-auto mb-10 flex flex-col items-center p-4">
          <h1 className="text-3xl mt-8 font-bold text-green-700">List of School Management Committee</h1>
          <div className="w-full mt-12 shadow-[0px_0px_5px_2px_rgba(0,_0,_0,_0.1)] p-3 rounded-lg max-w-3xl flex flex-col items-center gap-4">
            {images.map((src, index) => (
              <img key={index} src={src} alt={`Image ${index + 1}`} className="w-full rounded-lg shadow-md" />
            ))}
          </div>
        </div>
        <Footer />
      </div>

    </>
  )
}

export default SchoolManagementCommitte