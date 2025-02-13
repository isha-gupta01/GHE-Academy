"use client"; // Required since we are using `useEffect` (fetching data on client side)

import React, { useEffect, useState } from "react";
import Nav from "@/Sections/Nav";
import Hero from "@/Sections/Hero";
import Pencil from "@/assets/images/pencils.jpg";
import Footer from "@/Sections/Footer";
import Updates from "@/components/Updates";

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
      <Nav />
      <Hero image={Pencil} title="Fee Structure" subBody="" height={70} />

      <div className="p-6 lg:mx-20">
        <h2 className="text-3xl mx-auto text-center font-bold mb-4">Green Heaven English Academy Fee Structure 2025-26</h2>

        {loading ? (
          <p className="text-lg">Loading fee structure...</p>
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
