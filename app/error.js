"use client"; // Required for error boundaries

import { useEffect } from "react";
import Image from "next/image";

const Error=({ error, reset })=> {
  useEffect(() => {
    console.error("Error occurred:", error);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#5E9547] p-4">
      {/* Centered Container with rounded edges */}
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-full max-w-3xl flex flex-col md:flex-row">
        
        {/* Left Section - Error Image */}
        <div className="w-full md:w-1/2 relative">
          <Image 
            src="/error-image.png" 
            alt="Error Illustration" 
            width={400} 
            height={300} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Section - Error Message */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold text-red-600">Oops! Something went wrong</h1>
          <p className="text-gray-600 mt-2 text-center">An unexpected error occurred. Please try again later.</p>
          
          <button 
            onClick={() => reset()} 
            className="mt-4 px-6 py-2 bg-[#5E9547] text-white font-semibold rounded-lg hover:bg-green-700 transition"
          >
            Try Again
          </button>
        </div>

      </div>
    </div>
  );
}

export default Error
