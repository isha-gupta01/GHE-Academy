"use client";

import Image from "next/image";
import Link from "next/link";
import  notFound  from "@/assets/images/notFound.jpg";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 px-6">
      {/* Container */}
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg text-center border border-gray-200">
        {/* Image */}
        <div className="flex justify-center">
          <Image
            src={notFound} 
            alt="Page Not Found"
            width={250}
            height={250}
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mt-4">Oops! Page Not Found</h1>

        {/* Message */}
        <p className="text-gray-600 mt-2">
          Sorry, the page you are looking for might have been removed or doesn't exist.  
          Please check the URL or return to the homepage.
        </p>

        {/* Back Button */}
        <Link href="/">
          <button className="mt-6 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition">
            Go to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
}
