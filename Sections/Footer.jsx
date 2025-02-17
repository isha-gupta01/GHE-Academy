"use client"
import React from "react";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { Karla } from "next/font/google";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Logo & Intro */}
        <div>
          <h2 className="text-2xl font-bold text-white">Green Heaven English Academy</h2>
          <p className="text-sm mt-2">
            A nurturing environment where students unlock their full potential.
          </p>
        </div>

        {/* Quick Links */}
        <div className="">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><Link href="/About/About-Us" className="hover:text-green-400">About Us</Link></li>
            <li><Link href="/Admissions/Application-Process" className="hover:text-green-400">Admissions</Link></li>
            <li><Link href="/Admissions/Fee-Structure" className="hover:text-green-400">Fee Structure</Link></li>
            <li><Link href="/Contact" className="hover:text-green-400">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="lg:w-[22rem]">
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          <a href="https://maps.app.goo.gl/CLFakoPYffS6W3TW9" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">Vill: Post Madanpura/ Talhapur at Jasmour-Biharigarh Road, UP-247129</a>
          {/* <p>Email: greenheavenacademy2011@gmail.com</p> */}
          <p>Phone: +91 97196 71243</p>
          <p>Phone: +91 97198 00456</p>
          <a href="mailto:greenheavenacademy2011@gmail.com" className="text-green-400 hover:underline">Email: greenheavenacademy2011@gmail.com</a>
        </div>

        {/* Social Media */}
        <div className="lg:ml-[4rem]">
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a href="https://www.facebook.com/Education.temple.G.H.E.Academy/" className="hover:text-blue-500"><FaFacebook size={24} /></a>
            <a href="https://wa.me/919058695869" className="hover:text-green-500"><FaWhatsapp size={24} /></a>
            {/* <a href="#" className="hover:text-blue-400"><FaTwitter size={24} /></a> */}
            {/* <a href="#" className="hover:text-blue-700"><FaLinkedin size={24} /></a> */}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 h-[1rem] text-center border-t border-gray-700 xs:pt-2 pt-4 xs:text-xs sm:text-xs md:text-sm lg:text-sm">
        © {new Date().getFullYear()} Green Heaven English Academy. All rights reserved. <span>| Powered by Night Owls</span>
      </div>
    </footer>
  );
};

export default Footer;