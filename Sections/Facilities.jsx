import React from "react";
import Image from "next/image";
import Bus from "@/assets/images/bus.jpg";
import Book from "@/assets/images/books2.jpg";
import Science from "@/assets/images/sciencelab.png";
import Staff from "@/assets/images/staff1.jpg";
import Link from "next/link";

const FacilitiesSection = () => {
  return (
    <div className="relative h-[100vh]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={Staff}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>
      <div className="w-full z-30 relative h-[10rem] bg-gradient-to-r from-[#87d152] to-[#5E9538] flex flex-col gap-4 items-center justify-center">
        <span className="text-xl text-white">Admissions For Sessions 2025-26</span>
        <button className=" rounded-full shadow-[0px_0px_14px_2px_rgba(0,_0,_0,_0.1)] flex items-center bg-[#678f1f] font-bold px-4 py-2 gap-4 text-white"><Link href="/Admissions/Fee-Structure">Know More</Link></button>
      </div>
      {/* Main Content */}
      <div className="relative z-20 h-[80vh] overflow-y-auto">
        <div className="container mx-auto px-4 text-center py-12">
          {/* Section Title */}
          <h1 className="text-3xl font-bold text-white uppercase mb-8">
            Facilities
          </h1>
          <hr className="w-16 border-t-2 border border-white mx-auto mb-8" />

          {/* Cards Section */}
          <div className="flex flex-wrap justify-center gap-6">
            {/* Card 1 */}
            <div className="bg-white text-gray-800 shadow-lg rounded-2xl overflow-hidden w-full sm:w-[300px]">
              <Image
                src={Book}
                alt="Library"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">Library</h2>
                <p className="text-sm">
                  An effective school library enhances student learning outcomes
                  by providing a range of programs, services, and resources.
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white text-gray-800 shadow-lg rounded-2xl overflow-hidden w-full sm:w-[300px]">
              <Image
                src={Bus}
                alt="Transport"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">Transport</h2>
                <p className="text-sm">
                  At Green Heaven English Academy, students can avail the school
                  transport, subject to seat availability.
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white text-gray-800 shadow-lg rounded-2xl overflow-hidden w-full sm:w-[300px]">
              <Image
                src={Science}
                alt="Laboratory"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">Laboratory</h2>
                <p className="text-sm">
                  Practical knowledge is placed on an equal footing with
                  theoretical knowledge for students' overall development.
                </p>
              </div>
            </div>
          </div>

          

          {/* Button */}
          <div className="mt-8">
            <button  className="bg-[#678f1f] hover:bg-[#8bb837] text-white font-bold py-2 px-6 rounded-full shadow-[0px_0px_14px_2px_rgba(0,_0,_0,_0.1)]">
             <Link href="/CampusFacility/Facility"> View All Facilities</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilitiesSection;
