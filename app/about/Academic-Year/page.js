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
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-[#5E9538] mb-4">
        Annual School Calendar (2024-25)
      </h1>
      <p className="text-gray-600 text-center mb-6 max-w-3xl">
        Our school follows the Indian academic year from <strong>April to March</strong>, ensuring a structured learning experience with academic and extracurricular activities.
      </p>

      {/* Calendar Table */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-5xl overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-[#5E9538] text-white">
              <th className="border border-gray-300 px-4 py-2">Month</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Event / Activity</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {[
              { month: "April", date: "5th", event: "New Academic Session Begins" },
              { month: "April", date: "10th", event: "Orientation for New Students" },
              { month: "April", date: "20th", event: "Welcome Assembly" },
              { month: "May", date: "8th", event: "Summer Sports Week Begins" },
              { month: "May", date: "15th", event: "Unit Test - 1" },
              { month: "May", date: "25th", event: "Parent-Teacher Meeting" },
              { month: "June", date: "1st - 30th", event: "Summer Vacation" },
              { month: "July", date: "1st", event: "School Reopens" },
              { month: "July", date: "10th", event: "Investiture Ceremony" },
              { month: "July", date: "20th", event: "Inter-House Competitions" },
              { month: "August", date: "10th", event: "English Debate Competition" },
              { month: "August", date: "15th", event: "Independence Day Celebrations" },
              { month: "August", date: "28th", event: "Annual Cultural Event" },
              { month: "September", date: "5th", event: "Teacher’s Day Celebration" },
              { month: "September", date: "10th", event: "Mid-Term Exams Begin" },
              { month: "September", date: "25th", event: "Science Exhibition" },
              { month: "October", date: "2nd", event: "Gandhi Jayanti Celebration" },
              { month: "October", date: "10th - 15th", event: "Dussehra Break" },
              { month: "October", date: "20th", event: "Annual Sports Meet" },
              { month: "November", date: "5th", event: "Art & Craft Competition" },
              { month: "November", date: "10th", event: "Diwali Break Begins" },
              { month: "November", date: "14th", event: "Children’s Day Celebration" },
              { month: "December", date: "5th", event: "Winter Carnival" },
              { month: "December", date: "20th", event: "Christmas Celebrations" },
              { month: "December", date: "26th", event: "Pre-Board Exams for Senior Students" },
              { month: "January", date: "1st", event: "New Year Celebration" },
              { month: "January", date: "10th", event: "Final Revision for Annual Exams" },
              { month: "January", date: "26th", event: "Republic Day Celebration" },
              { month: "February", date: "5th", event: "Annual Exams Begin" },
              { month: "February", date: "15th", event: "Project Submission Deadline" },
              { month: "February", date: "28th", event: "Farewell for Senior Students" },
              { month: "March", date: "10th", event: "Annual Result Day" },
              { month: "March", date: "15th", event: "Prize Distribution Ceremony" },
              { month: "March", date: "20th", event: "Parent-Teacher Conference" },
              { month: "March", date: "25th", event: "New Session Preparations" },
            ].map((item, index) => (
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


