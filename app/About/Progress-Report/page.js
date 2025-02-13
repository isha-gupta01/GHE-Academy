import React from 'react'
import Navbar from '@/Sections/Navbar'
import Footer from '@/Sections/Footer'
import Hero from '@/Sections/Hero'
import SchoolImage from "@/assets/images/pencils3.jpg"
import Updates from "@/components/Updates";


const ProgressReport = () => {
  return (
    <>
      <div>
      <Updates/>
      <Navbar/>
      <Hero image={SchoolImage} title="Progress Report" subBody='"Learning never stops, growth happens in every effort you make."' height={70}/>
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-[#5E9538]">Progress Report</h1>
        <p className="text-gray-700 mt-2 max-w-2xl text-justify">
          Our institution follows a comprehensive evaluation system to track students' academic and overall growth.
        </p>
      </div>

      {/* Progress Report Content */}
      <div className="bg-white p-6 rounded-lg shadow-[0px_0px_12px_0px_rgba(0,_0,_0,_0.35)] max-w-4xl w-full">
        <p className="text-gray-700 leading-relaxed text-justify">
          At our institution, we prioritize a <strong>comprehensive evaluation system</strong> to assess the academic and overall development of our students. 
          Regular assessments, including <strong>paper-pencil tests, unit tests, and semester examinations</strong>, are conducted to measure student performance effectively. Additionally, innovative teaching methodologies, such as the <strong>play-way approach and learning by doing</strong>, are incorporated to enhance engagement and understanding.
        </p>

        <p className="text-gray-700 mt-4 leading-relaxed text-justify">
          Our teaching strategies are continuously reviewed and adapted to align with each child’s learning abilities, ensuring an <strong>efficient, interactive, and enjoyable</strong> educational experience. Teachers provide <strong>detailed reports</strong> that extend beyond academics, covering key aspects of a child’s <strong>physical, mental, emotional, and social development</strong>.
        </p>

        <p className="text-gray-700 mt-4 leading-relaxed text-justify">
          Recognizing that every child has unique learning needs, we also offer <strong>specialized remedial support</strong> for students facing learning difficulties. This personalized approach ensures that each student receives the guidance and encouragement necessary to overcome challenges and reach their full potential.
        </p>
      </div>
    </div>
    <Footer/>
    </div>
      
    </>
  )
}

export default ProgressReport
