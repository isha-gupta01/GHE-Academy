"use client";

import { useState } from "react";
import Link from "next/link";
import Hamburger from "@/assets/icons/icons8-menu.svg"
import  Cross from "@/assets/icons/icons8-multiply-100.png"
import Image from "next/image";

const menuData = [
  {
    title: "About",
    items: [
      "Principal-Message",
      "Manager-Message",
      "Vision-&-Mission",
      "Progress-Report",
      "Academic-Year",
      "AnnualAcademic-Year",
      "Institutional-Rules",
    ],
  },
  {
    title: "Admissions",
    items: ["Application-Process", "Fee-Structure"],
  },
  {
    title: "Gallery",
    items: [],
  },
  {
    title: "CampusFacility",
    items: [
      "Art-Lab",
      "BoardExam-Applicability",
      "Computer-Lab",
      "EnglishLanguage-Lab",
      "ExtraCurricularActivities",
      "Facility",
      "Faculty-and-Staff",
      "Parent-Teacher-Association",
      "School-Management-Commitee",
      "Science-Lab",
      "Transportation",
    ],
  },
  {
    title: "Certificates",
    items: [
      "Affilation-Certificate",
      "Building_Safety-Certificate",
      "Fire-Safety-Certificate",
      "Land-Certificate",
      "No_Objection-Certificate",
      "Recognition-Certificate",
      "School_Infrastructure-Certificate",
      "Self-Certification",
      "Society_Trust-Certificate",
      "Water_Health_&_Sanitation-Certificate",
    ],
  },
  {
    title: "Contact",
    items: [],
  },
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleMenu = (index) =>
    setActiveMenu(activeMenu === index ? null : index);

  return (
    <>
      {/* Hamburger Menu Button (Visible only on small screens) */}
      <button
        className="md:hidden  text-white z-50  "
        onClick={toggleSidebar}
      >
        <Hamburger/>
      </button>

      {/* Sidebar (Appears when isSidebarOpen is true) */}
      <aside
        className={`fixed z-50 top-0  right-0 w-64 h-full backdrop-blur-3xl text-white p-4 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <button className=" mb-4" onClick={toggleSidebar}>
          <Image src={Cross} alt="Cross" width={50} height={50}/>
          </button>
        <ul className="space-y-2">
          {menuData.map((menu, index) => (
            <li key={index}>
              <button
                className="w-full text-left font-semibold p-2 bg-gray-900 rounded-md"
                onClick={() => toggleMenu(index)}
              >
                {menu.title}
              </button>
              {activeMenu === index && menu.items.length > 0 && (
                <ul className="mt-2 pl-4">
                  {menu.items.map((item, idx) => (
                    <li key={idx} className="py-1">
                      <Link
                        href={`/${menu.title}/${item}`}
                        className="hover:underline"
                      >
                        {item.replace(/-/g, " ")}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </aside>

      {/* Overlay (Closes sidebar when clicked outside) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0  bg-black opacity-50 z-10 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
