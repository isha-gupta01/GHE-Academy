"use client"
import { useState,useEffect } from 'react'
import React from 'react'
import Nav from '@/Sections/Nav'
import Hero from '@/Sections/Hero'
import Maths from "@/assets/images/maths.jpg"
import Footer from '@/Sections/Footer'
import Updates from "@/components/Updates";


export default function AcademicCalendar() {
    const data = [
      { term: "Academic Year", details: "April beginning to March end" },
      { term: "Summer Vacation", details: "Mid-May to June end" },
      { term: "Winter Vacation", details: "Scheduled during the year" },
    ];
    const [dataset, setDataset] = useState([]); // Store fetched data
    
      // Fetch fee structure from API
      useEffect(() => {
        const fetchCalender = async () => {
          try {
            const response = await fetch("/api/Calendar"); // Fetch from Next.js API route
            const result = await response.json();
            setDataset(result);
            console.log(result)
          } catch (error) {
            console.error("Error fetching Calender:", error);
          }
        };
    
        fetchCalender();
      }, []);
  
    return (
    <>
    <Updates/>
    <Nav />
    <Hero image={Maths} title="Academic Year and Vacations" subBody='"This year, aim higher, work harder, and shine brighter!"' height={70} />
    
      <div className="p-6  lg:mx-20">
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
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Header */}
      <h1 className="text-3xl text-center font-bold text-[#5E9538] mb-4">
        Annual School Calendar (2024-25)
      </h1>
      <p className="text-gray-600 text-center mb-6 max-w-3xl">
        Our school follows the Indian academic year from <strong>April to March</strong>, ensuring a structured learning experience with academic and extracurricular activities.
      </p>

      {/* Calendar Table */}
      <div className="bg-white p-6 mb-6 rounded-lg shadow-md w-full max-w-5xl overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-[#5E9538] text-white">
              <th className="border border-gray-300 px-4 py-2">Month</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Event / Activity</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {dataset.map((item, index) => (
              <tr key={index} className="even:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 font-semibold">{item.month}</td>
                <td className="border border-gray-300 px-4 py-2">{item.date}</td>
                <td className="border border-gray-300 px-4 py-2">{item.event}</td>
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


