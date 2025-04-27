"use client"; // Required since we are using `useEffect` (fetching data on client side)

import React, { useEffect, useState } from "react";
import Navbar from '@/Sections/Navbar'
import Hero from "@/Sections/Hero";
import Pencil from "@/assets/images/pencils.jpg";
import Footer from "@/Sections/Footer";
import Updates from "@/components/Updates";
import { SyncLoader } from "react-spinners";

export default function FeeStructure() {
  const [data, setData] = useState([]); // Store fetched data
  const [loading, setLoading] = useState(true);

  // Fetch fee structure from API
  useEffect(() => {
    const fetchFees = async () => {
      try {
        const response = await fetch("/api/Fees"); // Fetch from Next.js API route
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching fees:", error);
        setLoading(false);
      }
    };

    fetchFees();
  }, []);

  return (
    <>
      <Updates />
      <Navbar />
      <Hero image={Pencil} title="Fee Structure" subBody="" height={70} />

      <div className="p-6 lg:mx-20">
        <h2 className="text-3xl mx-auto text-center font-bold mb-4">Green Heaven English Academy Fee Structure 2025-26</h2>

        {loading ? (
          <div className=" flex items-center justify-center">
            <SyncLoader
          color="#28ae35"
          margin={7}
          size={9}
        />
          </div>
          
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border text-center border-gray-300">
              <thead>
                <tr className="bg-[#94C973] ">
                  <th className="border p-2 ">Class</th>
                  <th className="border p-2 ">Reg. Fees</th>
                  <th className="border p-2 ">Admission Fees</th>
                  <th className="border p-2 ">Tuition Fees</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="odd:bg-white even:bg-gray-100">
                    <td className="border p-2">{item.Grade}</td>
                    <td className="border p-2">₹{item.RegFees}</td>
                    <td className="border p-2">₹{item.AdmissionFees}</td>
                    <td className="border p-2">₹{item.TuitionFees}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
