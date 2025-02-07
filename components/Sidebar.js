"use client";

import { useState } from "react";
import Link from "next/link";

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
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  return (
    <aside className="w-64 h-screen bg-gray-900 text-white p-4 md:hidden lg:hidden">
      <h2 className="text-xl font-bold mb-4">Sidebar Menu</h2>
      <ul className="space-y-2">
        {menuData.map((menu, index) => (
          <li key={index}>
            <button
              className="w-full text-left font-semibold p-2 bg-gray-800 rounded-md"
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
  );
};

export default Sidebar;
