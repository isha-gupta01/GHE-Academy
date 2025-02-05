"use client"; // Needed for Next.js App Router
import { useState } from "react";
// import { Menu, X } from "lucide-react"; // Icons

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="text-white p-4 flex justify-between items-center md:hidden">
        <button onClick={() => setIsOpen(true)} className="p-2">
          |||
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 w-64 h-full bg-[#94c973be] text-white transform ${
          isOpen ? "translate-x-0 backdrop-blur" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 md:hidden`}>
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsOpen(false)}>
          X
        </button>
        <nav className="py-20 px-8 space-y-6">
          <a href="/" className="block text-lg hover:text-gray-400">Home</a>
          <a href="/about" className="block text-lg hover:text-gray-400">About</a>
          <a href="/services" className="block text-lg hover:text-gray-400">Services</a>
          <a href="/contact" className="block text-lg hover:text-gray-400">Contact</a>
        </nav>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
