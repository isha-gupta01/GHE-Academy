import React from 'react'
import Navbar from '@/Sections/Navbar'
import Hero from '@/Sections/Hero'
import Pencil from "@/assets/images/pencils.jpg"
import Footer from '@/Sections/Footer'
import Updates from "@/components/Updates";




export default function FeeStructure() {
    const data = [
      { class: "1", regFees: "₹500", admissionFees: "₹1,000", tuitionFees: "₹650" },
      { class: "2", regFees: "₹500", admissionFees: "₹1,000", tuitionFees: "₹800" },
      { class: "3", regFees: "₹500", admissionFees: "₹1,000", tuitionFees: "₹1,000" },
      { class: "4", regFees: "₹500", admissionFees: "₹1,000", tuitionFees: "₹1,200" },
      { class: "5", regFees: "₹500", admissionFees: "₹1,000", tuitionFees: "₹1,500" },
      { class: "6", regFees: "₹500", admissionFees: "₹1,000", tuitionFees: "₹1,700" },
      { class: "7", regFees: "₹500", admissionFees: "₹1,000", tuitionFees: "₹1,900" },
      { class: "8", regFees: "₹500", admissionFees: "₹1,000", tuitionFees: "₹2,100" },
    ];
  
    return (
    <>
    <Updates/>
    <Navbar />
    <Hero image={Pencil} title="Fee Structure" subBody="Excellence in every Student" height={70} />
      <div className="p-6 lg:mx-20">
        <h2 className="text-3xl mx-auto text-center font-bold mb-4">Green Heaven English Academy Fee Structure 2025-26 </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-[#94C973]">
                <th className="border p-2 text-left">Class</th>
                <th className="border p-2 text-left">Reg. Fees</th>
                <th className="border p-2 text-left">Admission Fees</th>
                <th className="border p-2 text-left">Tuition Fees</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-100">
                  <td className="border p-2">{item.class}</td>
                  <td className="border p-2">{item.regFees}</td>
                  <td className="border p-2">{item.admissionFees}</td>
                  <td className="border p-2">{item.tuitionFees}</td>
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
