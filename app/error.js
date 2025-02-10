"use client"; // Required for error boundaries

import { useEffect } from "react";
import Image from "next/image";
import ErrorImage from "@/assets/images/error.png"
import Link from "next/link";

const Error=({ error, reset })=> {
  useEffect(() => {
    console.error("Error occurred:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 px-6">
      {/* Container */}
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg text-center border border-gray-200">
        {/* Image */}
        <div className="flex justify-center">
          <Image
            src={ErrorImage} 
            alt="Page Not Found"
            width={250}
            height={250}
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-red-800 mt-4">Oops! An error occurred.</h1>

        {/* Message */}
        <p className="text-gray-600 mt-2">
          Sorry, Some Error Occurred.
        </p>

        {/* Back Button */}
        <Link href="/">
          <button onClick={()=>reset()} className="mt-6 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition">
            Try Again
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Error
