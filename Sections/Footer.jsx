import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

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
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="/about" className="hover:text-green-400">About Us</a></li>
            <li><a href="/admissions" className="hover:text-green-400">Admissions</a></li>
            <li><a href="/academics" className="hover:text-green-400">Academics</a></li>
            <li><a href="/contact" className="hover:text-green-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          <p className="mt-2">Vill./Post Madanpura/Talhapur at Jasmour-Biharigarh Road, UP-247129</p>
          <p>Email: greenheavenacademy2011@gmail.com</p>
          <p>Phone: +91 97196 71243</p>
          <p>Phone: +91 97198 00456</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a href="#" className="hover:text-blue-500"><FaFacebook size={24} /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram size={24} /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter size={24} /></a>
            <a href="#" className="hover:text-blue-700"><FaLinkedin size={24} /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center border-t border-gray-700 pt-4 text-sm">
        © {new Date().getFullYear()} Green Heaven English Academy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;