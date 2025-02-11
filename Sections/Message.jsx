import React from 'react'
import PrincipleImage from "@/assets/images/principle.png"
import ManagerImage from "@/assets/images/manager.png"
import VisionImage from "@/assets/images/sqLIbrary.jpg"
import grainImage from "@/assets/images/grain.jpg"
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.png"
import Image from 'next/image'
import Link from 'next/link'


const Message = () => {
    const cards = [
        {
            title: "Principal's Message",
            results: "At Green Heaven English Academy, we believe education is a partnership between students, parents, and teachers. We foster strong relationships with parents to provide the best support for our students. Our school offers excellent learning opportunities, helping students develop holistically and reach their full potential as confident global citizens.",
            link: "/About/Principal-Message",
            image: PrincipleImage,
        },
        {
            title: "Manager's Message",
            results: "Since its inception in 1996, the society has been a guiding force in delivering quality education and has become a symbol of excellence. Governed by distinguished personalities from various fields, it is led by people of excellence who work in the larger interest of society.",
            link: "/About/Manager-Message",
            image: ManagerImage,
        },
        {
            title: "Vision and Mission",
            results: "Our vision is to create a nurturing and inclusive learning environment where every student can unlock their full potential, embrace lifelong learning, and become responsible, compassionate global citizens. We aim to inspire curiosity, foster creativity, and develop the skills needed to excel in a rapidly changing world.",
            link: "/About/Vision-&-Mission",
            image: VisionImage,
        },
    ];
    return (
        <>
            <section className="pb-16 pt-24 lg:py-24">
                <div className="container">
                    <div className="flex justify-center">
                        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">Message from our Authorities</p>
                    </div>
                    <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">Our Intellectual Assets</h2>
                    <p className="text-center max-w-md mx-auto lg:text-xl text-black mt-4 md:text-lg">GHE Academy has a team of highly dedicated, experienced, and qualified teachers.They are the best teacher with high moral values; a real role model for students.</p>
                    <div className="flex flex-col mt-10 lg:mt-3 md:mt-12 gap-20">
                        {cards.map((project,index) => (
                            <div key={project.title} style={{top:`calc(112px + ${index * 64}px)`,z:`calc(10 + ${index * 10})`}} className="bg-gray-800 rounded-3xl sticky  overflow-hidden pointer-events-none   after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10  lg:pt-16 lg:px-20 ">
                                <div className="absolute inset-0  opacity-5" style={{
                                    backgroundImage: `url(${grainImage.src})`,
                                }}></div>
                                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                                    <div className="lg:pb-16">
                                        <h3 className="font-serif md:text-4xl md:mt-5  text-2xl mt-2 bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2  uppercase tracking-widest  text-transparent bg-clip-text ">{project.title}</h3>
                                        <hr className="border-t-2 border-white/5 md:mt-5 mt-4" />
                                        <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                                            <p className="text-sm md:text-base text-white/50 mt-4">{project.results}</p>
                                        </ul>
                                        <Link href={project.link}><button className="bg-white cursor-pointer relative z-100 pointer-events-auto text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex gap-2 items-center justify-center mt-8 md:w-auto md:px-6">
                                            <span>Read More</span>
                                                <Image src={ArrowUpRightIcon} alt='arrow' width={24} height={24}/>
                                            </button></Link>
                                        
                                    </div>
                                    <div className="relative">
                                        <Image src={project.image} alt={project.title} width={500} height={500} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Message
