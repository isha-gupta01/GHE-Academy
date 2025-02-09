"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Bus from "@/assets/images/bus.jpg";
import Book from "@/assets/images/books2.jpg";
import Science from "@/assets/images/sciencelab.png";
import Staff from "@/assets/images/staff1.jpg";
import Back from "@/assets/icons/back.png"
import Next from "@/assets/icons/next.png"

const FacilitiesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: Book,
      title: "Library",
      description:
        "An effective school library enhances student learning outcomes by providing a range of programs, services, and resources.",
    },
    {
      image: Bus,
      title: "Transport",
      description:
        "At Green Heaven English Academy, students can avail the school transport, subject to seat availability.",
    },
    {
      image: Science,
      title: "Laboratory",
      description:
        "Practical knowledge is placed on an equal footing with theoretical knowledge for students' overall development.",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative h-screen">
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

      {/* Admission Notice */}
      <div className="w-full z-30 relative h-[10rem] bg-gray-800 flex flex-col gap-4 items-center justify-center">
        <span className="text-xl text-white">Admissions For Sessions 2025-26</span>
        <Link href="/Admissions/Fee-Structure">
          <button className="rounded-full shadow-md flex items-center bg-[#678f1f] hover:bg-[#8bb837] font-bold px-6 py-3 gap-4 text-white">
            Know More
          </button>
        </Link>
      </div>

      {/* Main Content */}
      <div className="relative z-20 h-[80vh] overflow-y-auto">
        <div className="container mx-auto px-4 text-center py-12">
          {/* Section Title */}
          <h1 className="text-3xl font-bold text-white uppercase mb-8">Facilities</h1>
          <hr className="w-16 border-t-2 border-white mx-auto mb-8" />

          {/* Cards Section (Desktop View) */}
          <div className="hidden md:flex flex-wrap justify-center gap-6">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="bg-white text-gray-800 shadow-lg rounded-2xl overflow-hidden w-full sm:w-[300px]"
              >
                <Image src={slide.image} alt={slide.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{slide.title}</h2>
                  <p className="text-sm">{slide.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel for Small Screens */}
          <div className="md:hidden">
            <div className="relative">
              {/* Slide */}
              <div className="bg-white text-gray-800 shadow-lg rounded-2xl overflow-hidden w-[90%] mx-auto">
                <Image
                  src={slides[currentIndex].image}
                  alt={slides[currentIndex].title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{slides[currentIndex].title}</h2>
                  <p className="text-sm">{slides[currentIndex].description}</p>
                </div>
              </div>

              {/* Navigation */}
              <button
                onClick={handlePrev}
                className="absolute -left-5 invert top-1/2 transform -translate-y-1/2 "
              >
                <Image  src={Back} alt="back" width={30} height={30}/>
              </button>
              <button
                onClick={handleNext}
                className="absolute -right-5 invert top-1/2 transform -translate-y-1/2 "
              >
                <Image src={Next} alt="next" width={30} height={30} />
              </button>
            </div>
          </div>

          {/* View All Facilities Button */}
          <div className="mt-8">
            <Link href="/CampusFacility/Facility">
              <button className="bg-[#678f1f] hover:bg-[#8bb837] text-white font-bold py-2 px-6 rounded-full shadow-md">
                View All Facilities
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilitiesSection;
