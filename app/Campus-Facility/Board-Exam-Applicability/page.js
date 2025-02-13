"use client";
import React from 'react';
import Nav from '@/Sections/Nav'
import Footer from '@/Sections/Footer'
import Hero from '@/Sections/Hero'
import Updates from '@/components/Updates'
import SchoolImage from "@/assets/images/books2.jpg"

const ImageGallery = () => {
  const images = [
    "/certificates/3yrresult.jpg",
  ]; 

  return (
    <>
    <Updates/>
    <Nav/>
    <Hero image={SchoolImage}  title="Board Examination Applicability" subBody="" height={70}/>
    <div className="min-h-screen mb-10 flex flex-col items-center p-4">
        <h1 className="text-3xl mt-8 font-bold text-green-700">List of 3 years Board Examination Applicability</h1>
      <div className="w-full mt-12 shadow-[0px_0px_5px_2px_rgba(0,_0,_0,_0.1)] p-3 rounded-lg max-w-3xl flex flex-col items-center gap-4">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Image ${index + 1}`} className="w-full rounded-lg shadow-md" />
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ImageGallery;