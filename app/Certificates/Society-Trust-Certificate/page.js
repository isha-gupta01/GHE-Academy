"use client";
import React from 'react';
import Header from '@/Sections/Header'
import Navbar from '@/Sections/Navbar'
import Footer from '@/Sections/Footer'
import Hero from '@/Sections/Hero'
import SchoolImage from "@/assets/images/pencils3.jpg"

const ImageGallery = () => {
  const images = [
    "/certificates/SOCIETY1.jpg",
  ]; // Replace with your actual image paths

  return (
    <>
    <Header/>
    <Navbar/>
    <Hero image={SchoolImage} title="" subBody="Society / Trust Certificate" height={70}/>
    <div className="min-h-screen flex flex-col items-center p-4">
        <h1 className="text-3xl mt-8 font-bold text-green-700">Society / Trust Certificate</h1>
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