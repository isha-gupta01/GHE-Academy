import React from "react";
import Image from "next/image";

const Hero = ({ image, title, subBody, height, className, className2 }) => {
    return (
        <div className={`relative w-full z-0 font-ubuntu`} style={{ height: `${height}vh` }}>
            {/* Background Image */}
            <div className="absolute inset-0 "><Image src={image} loading="lazy" alt="School Image" fill className=" object-cover top-16" /></div>

            {/* Overlay (Gray Opaque Background) */}
            <div className="absolute inset-0   bg-gray-900/50"></div>

            {/* Text Content - Inside Overlay */}
            {/* <div className="flex flex-col items-center "> */}
            <div className={`absolute inset-0 flex flex-col  justify-center   text-white px-4 font-ubuntu`}>
                <h1 className={` md:text-4xl text-white inline-flex gap-2 xs:text-5xl   tracking-wide  text-transparent bg-clip-text sm:text-5xl lg:text-6xl font-bold font-ubuntu ${className}`}>{title}</h1>
                <p className={`md:text-6xl lg:text-2xl   text-white inline-flex gap-2  tracking-wide text-transparent bg-clip-text sm:text-[1.7rem]  font-ubuntu mt-2 ${className2}`}>
                    {subBody}
                </p>
            </div>
            {/* </div> */}
        </div>
    );
};

export default Hero;
