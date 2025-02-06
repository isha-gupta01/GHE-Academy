"use client"; // Needed for Next.js App Router
import { useState } from "react";
import Link from "next/link";
// import { Menu, X } from "lucide-react"; // Icons

export default function Sidebar({menuTitles=[],menuItems=[]}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="text-black z-10 p-4 flex  items-center lg:hidden md:hidden">
        <button onClick={() => setIsOpen(true)} className="p-2">
          |||
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 w-64 h-[100vh] bg-[#94c973be] text-black transform ${
          isOpen ? "translate-x-0 backdrop-blur" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-20`}>
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsOpen(false)}>
          X
        </button>
        <nav className="py-20 px-8 space-y-6">
          <ul>
            {menuTitles.map((title, index) => (
              <li key={index} className="p-2 font-bold text-lg">
                <span>{title}</span>
                {/* Map over corresponding submenu items */}
                {menuItems[index] && menuItems[index].length > 0 && (
                  <ul className="pl-4">
                    {menuItems[index].map((item, subIndex) => (
                      <li key={subIndex} className="p-2 hover:bg-gray-400">
                        <Link href={`/${title}/${item}`}>{item}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {isOpen && (
        <div
          className="absolute inset-0 z-10 bg-black opacity-50 h-[100vh] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
