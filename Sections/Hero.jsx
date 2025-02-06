import React from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"], // Include different weights
    style: ["normal", "italic"], // Include both normal and italic styles
    display: "swap",
  });

const Hero = ({ image, title, subBody, height,className,className2 }) => {
    return (
        <div className={`relative w-full z-0 ${playfair.className}`} style={{ height: `${height}vh` }}>
            {/* Background Image */}
            <div className="absolute inset-0 "><Image src={image} alt="School Image" fill className=" object-cover top-16" /></div>

            {/* Overlay (Gray Opaque Background) */}
            <div className="absolute inset-0   bg-gray-900/50"></div>

            {/* Text Content - Inside Overlay */}
            {/* <div className="flex flex-col items-center "> */}
                <div className={`absolute inset-0 flex flex-col  justify-center   text-white px-4 ${playfair.className}`}>
                    <h1 className={`text-3xl md:text-4xl text-[#9bf759] lg:text-5xl ${className}`}>{title}</h1>
                    <p className={`text-base md:text-lg lg:text-6xl itallic font-bold text-[#9bf759]  mt-2 ${className2}`}>{subBody}</p>
                </div>
            {/* </div> */}
        </div>
    );
};

export default Hero;
