import React from 'react'
import Navbar from '@/Sections/Navbar'
import Header from '@/Sections/Header'
import Hero from '@/Sections/Hero'
import Maths from "@/assets/images/maths.jpg"
import Footer from '@/Sections/Footer'

export default function AcademicCalendar() {
    const data = [
      { term: "Academic Year", details: "April beginning to March end" },
      { term: "Summer Vacation", details: "Mid-May to June end" },
      { term: "Winter Vacation", details: "Scheduled during the year" },
    ];
  
    return (
    <>
    <Header />
    <Navbar />
    <Hero image={Maths} title="Academic Year and Vacations" subBody="Excellence in every Student" height={70} />
    
      <div className="p-6 lg:mx-20">
        <h2 className="text-xl font-bold mb-4">Academic Year and Vacations</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2 text-left">Term</th>
                <th className="border p-2 text-left">Details</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-100">
                  <td className="border p-2">{item.term}</td>
                  <td className="border p-2">{item.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer/>
    </>   
    );
  }
