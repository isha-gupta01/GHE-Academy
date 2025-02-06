import React from "react";
import Image from "next/image";

const Hero = ({ image, title, subBody, height }) => {
    return (
        <div className="relative w-full z-0" style={{ height: `${height}vh` }}>
            {/* Background Image */}
            <div className="absolute inset-0 "><Image src={image} alt="School Image" fill className=" object-cover top-16" /></div>

            {/* Overlay (Gray Opaque Background) */}
            <div className="absolute inset-0   bg-gray-900/50"></div>

            {/* Text Content - Inside Overlay */}
            {/* <div className="flex flex-col items-center "> */}
                <div className="absolute inset-0 flex flex-col items-center justify-center   text-white px-4 ">
                    <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">{title}</h1>
                    <p className="text-base md:text-lg lg:text-xl mt-2">{subBody}</p>
                </div>
            {/* </div> */}
        </div>
    );
};

export default Hero;
