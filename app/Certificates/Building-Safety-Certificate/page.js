"use client";
import React from 'react';
import Navbar from '@/Sections/Navbar'
import Footer from '@/Sections/Footer'
import Hero from '@/Sections/Hero'
import SchoolImage from "@/assets/images/certification1.png"
import Updates from '@/components/Updates'
import QuickLinks from '@/components/QuickLinks';

const ImageGallery = () => {
  const images = [
    "/certificates/BUILDING SAFETY1.jpg",
  ];

  return (
    <>
    <Updates/>
    <Navbar/>
    <Hero image={SchoolImage}  title="Building safety certificate" subBody="" height={70}/>
    <div className="flex md:flex-row lg:m-20 md:gap-32 sm:flex-col xs:flex-col">

      <div className="min-h-screen flex flex-col items-center p-4">

          
          <div className='flex'>
          <h1 className="text-3xl mt-8 font-bold text-green-700">Building safety Certicifate</h1>
          
                      <button className="mt-8 flex items-center gap-2 px-4 py-2  text-white rounded-lg  transform hover:scale-150 transition-transform duration-300">
            <a href="/certificates/BUILDING SAFETY1.pdf" download className="flex items-center gap-2">
              <Image src={DownloadIcon} alt="Download" width={24} height={24} />
            </a>
          </button>
          
                    </div>

          
        <div className="w-full mt-12 shadow-[0px_0px_5px_2px_rgba(0,_0,_0,_0.1)] p-3 rounded-lg max-w-3xl flex flex-col items-center gap-4">
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Image ${index + 1}`} className="w-full rounded-lg shadow-md" />
          ))}
        </div>
    </div>
      <div><QuickLinks /></div>
    </div>
    <Footer/>
    </>
  );
};

export default ImageGallery;