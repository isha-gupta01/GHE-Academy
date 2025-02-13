"use client";  // Ensures this runs on the client side

import { useState, useEffect } from "react";
import Image from "next/image";

const HeroSection = ({ image, video, title, subBody, height, className, className2 }) => {
    const [showMedia, setShowMedia] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMedia(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`relative w-full z-0 font-ubuntu`} style={{ height: `${height}vh` }}>
            {/* Background */}
            {showMedia ? (
                <div className="absolute inset-0">
                    <Image src={image} loading="lazy" alt="School Image" fill className="object-cover top-16" />
                </div>
            ) : (
                video && (
                    <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
                        <source src={video} type="video/mp4" />
                    </video>
                )
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-gray-900/50"></div>

            {/* Text Content */}
            <div className={`absolute inset-0 flex flex-col justify-center text-white px-4 font-ubuntu`}>
                <h1 className={`md:text-4xl xs:text-5xl text-white inline-flex gap-2 tracking-wide text-transparent bg-clip-text sm:text-5xl lg:text-5xl font-ubuntu ${className}`}>
                    {title}
                </h1>
                <p className={`md:text-6xl xs:text-[1.7rem] lg:text-6xl text-white inline-flex gap-2 tracking-wide text-transparent bg-clip-text sm:text-[1.7rem] font-bold font-ubuntu mt-2 ${className2}`}>
                    {subBody}
                </p>
            </div>
        </div>
    );
};

export default HeroSection;