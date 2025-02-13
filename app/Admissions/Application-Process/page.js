import React from "react";
import Nav from '@/Sections/Nav'
import Hero from '@/Sections/Hero'
import Pencil2 from "@/assets/images/library2.jpg"
import Footer from '@/Sections/Footer'
import Updates from "@/components/Updates";


export default function ApplicationProcess() {
  return (
    <>
    <Updates/>
    <Nav />
    <Hero image={Pencil2} title="Application Process" subBody="" height={70} />
    <div className="min-h-screen bg-white  flex flex-col items-center justify-center p-6">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-green-700 ">Application Process</h1>
        <p className="text-gray-700 mt-2 max-w-2xl text-justify">
          Our school staff and admissions team will ensure that your child’s enrollment process is as smooth as possible. 
          Our admission procedure is broken down into easy steps to ensure a hassle-free experience.
        </p>
      </div>

      {/* Steps Section */}
      <div className="bg-white p-6 rounded-lg shadow-[0px_0px_12px_0px_rgba(0,_0,_0,_0.35)] max-w-6xl w-full">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-green-600">Step 1: Inquiry</h2>
          <p className="text-gray-700 mt-2 text-justify">
            Admission meetings and school tours are available <span className="font-bold">by appointment only</span>. 
            Our school representative will show you around and answer your queries.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-green-600">Step 2: Entrance Test</h2>
          <p className="text-gray-700 mt-2 text-justify">
            Admissions will be based on an <span className="font-bold">entrance test</span>. Exam dates will be provided at the time of registration. 
            Students will receive a <span className="font-bold">sample question paper</span> to prepare for the test.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-green-600">Step 3: Admission & Enrollment</h2>
          <p className="text-gray-700 mt-2 text-justify">
            Parents need to submit an <span className="font-bold">original transfer certificate</span> and a <span className="font-bold">previous year report card</span> at the admission office. 
            This helps in placing the child in the most suitable class for their age.
          </p>
          <p className="text-gray-700 mt-2 text-justify">
            Starting at a new school is both <span className="font-bold">exciting and challenging</span>. Our mentors and student community ensure a smooth transition
            and make your child feel welcomed and comfortable in the new environment.
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}