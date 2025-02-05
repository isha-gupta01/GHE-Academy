import React from 'react'
import Image from 'next/image'

const Hero = ({image,title,subBody}) => {
    return (
        <div>
            <div className={`relative w-full h-[73vh]`}>
                <Image src={image} alt='School Image' fill className='object-cover' />
            </div>
            <div className="absolute inset-0 bottom-[2.9rem] top-[8.87rem] flex flex-col items-center justify-center text-white bg-black/50">
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">{title}</h1>
                <p className="text-base md:text-lg lg:text-xl mt-2">{subBody}</p>
            </div>

        </div>
    )
}

export default Hero
