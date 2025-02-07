import React from "react";
import Navbar from '@/Sections/Navbar'
import Header from '@/Sections/Header'
import Hero from '@/Sections/Hero'
import Pencil2 from "@/assets/images/library2.jpg"
import Footer from '@/Sections/Footer'
import Image from "next/image";
import Logo from "@/assets/images/logo.png"

export default function About() {
  return (
    <>
    <Header />
    <Navbar />
    <Hero image={Pencil2} title="About" subBody="Green Heaven English Adacemy" height={92} />
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      

      {/* Text Section */}
      <div className="bg-white border shadow-[0px_0px_12px_0px_rgba(0,_0,_0,_0.35)] p-6 mt-6 rounded-lg max-w-4xl">
          {/* Logo Section */}
        <div className="mb-6 flex justify-center ">
          <Image
            src={Logo} // Replace with the actual path to your school logo
            alt="Green Heaven English Academy Logo"
            width={150}
            height={150}
            className="rounded-full shadow-lg"
          />
      </div>
        <h1 className="text-2xl font-bold text-center mb-4 text-green-700">
          About Green Heaven English Academy
        </h1>
        <p className="text-gray-700 mb-4">
          At <strong>Green Heaven English Academy</strong>, we recognize the imperative of imparting an educational experience that is world-class in every respect, preparing children for global citizenship.
        </p>
        <p className="text-gray-700 mb-4">
          We believe that a curriculum of excellence with a global dimension is central to the education of children, enabling them to face the challenges of the 21st century with confidence and strength of character.
        </p>
        <p className="text-gray-700 mb-4">
          Our talented staff provides each student with rigorous standards, high academics, behavioral expectations, and a solid foundation. We ensure a safe environment, which is paramount in creating a successful learning experience.
        </p>
        <p className="text-gray-700 mb-4">
          Special attention is given to students who are weak in English and those who have minor health issues.
        </p>
        <p className="text-gray-700 mb-4">
          At <strong>Green Heaven English Academy</strong>, every student receives individual attention. Along with academics, we emphasize extracurricular activities such as indoor and outdoor games, debates, crafts, music, and drama, helping to discover each child's hidden talents.
        </p>
        <p className="text-gray-700 mb-4">
          Each student gets the opportunity to perform on stage during special assemblies conducted regularly, helping them overcome stage fear.
        </p>
        <p className="text-gray-700 mb-4">
          At the heart of our institution is the belief that children are full of curiosity and creativity—they are not empty memory banks waiting to be filled with facts, figures, and dates.
        </p>
        <p className="text-gray-700 mb-4">
          Our curriculum is flexible and emerges from children's ideas, thoughts, and observations. Our goal is to cultivate within children a lifelong passion for learning and exploration.
        </p>
        <p className="text-gray-700">
          We intensively focus on developing truthfulness, generosity, and etiquette to nurture a well-rounded child.
        </p>

        <h1 className="text-2xl font-bold text-center mb-4 mt-6 text-green-700">
          Educational Approach
        </h1>
        <p className="text-gray-700 mb-4">
        To provide a safe secure and conducive enviroment in which each child can dare to dream, enjoy learning, achieve goal and become a life long learner.
        </p>
        <p className="text-gray-700 mb-4">
        We offer education programs that support children's academic, physical, social and moral development.
        </p>
        <p className="text-gray-700 mb-4">
        We aim to inculcate in children, the values of truth, co-operation & respect towards others and the environment
        </p>
        <p className="text-gray-700 font-bold mb-4">
        Focuses on and engages with critical contemporary issues:
        </p>
        <p className="text-gray-700 mb-4">
        <span className="font-bold">1. </span>Prioritizes humanity and culture in designing systems and environments to improve the human conditions.
        </p>
        <p className="text-gray-700 mb-4">
        <span className="font-bold">2. </span>Places collaborative, project-based learning at the centre of the educational experience.
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
}