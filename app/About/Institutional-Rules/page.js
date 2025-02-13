import React from 'react'
import Nav from '@/Sections/Nav'
import Footer from '@/Sections/Footer'
import Hero from '@/Sections/Hero'
import SchoolImage from "@/assets/images/ghe1.png"
import Updates from "@/components/Updates";



const InstitutionalRules = () => {
  return (
    <>
    <div>
      <Updates/>
      <Nav/>
      <Hero image={SchoolImage} title="Institutional Rules" subBody="" height={70}/>
      <div className="min-h-[70vh]  flex flex-col items-center justify-center p-6">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-red-700">Institutional Rules</h1>
        <p className="text-gray-700 mt-2 max-w-2xl">
          All students are expected to follow the rules and regulations to maintain a disciplined and respectful learning environment.
        </p>
      </div>

      {/* Rules Section */}
      <div className="bg-white p-6 rounded-lg shadow-[0px_0px_12px_0px_rgba(0,_0,_0,_0.35)] max-w-4xl w-full">
        <ul className="list-disc list-inside space-y-4 text-gray-700">
          <li><strong>No Electronic Devices:</strong> Students are prohibited from bringing electrical or electronic devices to school.</li>
          <li><strong>No Gifts to Staff:</strong> Students are not allowed to present gifts to any staff member of the school.</li>
          <li><strong>Mandatory English Communication:</strong> Speaking in English is required at all times.</li>
          <li><strong>Regular Attendance:</strong> Students must attend school regularly to ensure academic success.</li>
          <li><strong>Dress Code:</strong> Boys are not allowed to wear earrings or ear studs, and tattoos are strictly forbidden.</li>
        </ul>
      </div>

      </div>
      <Footer/>
    </div>
      
    </>
  )
}

export default InstitutionalRules



