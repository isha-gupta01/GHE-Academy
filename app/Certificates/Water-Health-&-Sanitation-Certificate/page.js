"use client";
import React from 'react';
import Nav from '@/Sections/Nav'
import Footer from '@/Sections/Footer'
import Hero from '@/Sections/Hero'
import SchoolImage from "@/assets/images/certification1.png"
import Updates from '@/components/Updates'
import QuickLinks from '@/components/QuickLinks';

const ImageGallery = () => {
  const images = [
    "/certificates/HEALTHWATER.jpg",
    "/certificates/HEALTHWATER1.jpg",
  ]; // Replace with your actual image paths

  return (
    <>
    <Updates/>
    <Nav/>
    <Hero image={SchoolImage}  title="Water health and Sanitation certificate" subBody="" height={70}/>
    <div className="flex md:flex-row lg:m-20 md:gap-32 sm:flex-col xs:flex-col">
      <div className="min-h-screen flex flex-col items-center p-4">
          <h1 className="text-3xl mt-8 font-bold text-green-700">Water health and Sanitation Certicifate</h1>
        <div className="w-full mt-12 shadow-[0px_0px_5px_2px_rgba(0,_0,_0,_0.1)] p-3 rounded-lg max-w-3xl flex flex-col items-center gap-4">
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Image ${index + 1}`} className="w-full rounded-lg shadow-md" />
          ))}
        </div>

    </div>
    <QuickLinks/>
    </div>
    <Footer/>
    </>
  );
};

export default ImageGallery;