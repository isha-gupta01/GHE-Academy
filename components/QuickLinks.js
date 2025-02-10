"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuData = [
    {
      title: "About",
      items: [
        "About-Us",
        "Principal-Message",
        "Manager-Message",
        "Vision-&-Mission",
        "Progress-Report",
        "Academic-Year",
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
      title: "Campus-Facility",
      items: [
        "Art-Lab",
        "Board-Exam-Applicability",
        "Computer-Lab",
        "English-Language-Lab",
        "Extra-Curricular-Activities",
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
        "Building-Safety-Certificate",
        "Fire-Safety-Certificate",
        "Land-Certificate",
        "No-Objection-Certificate",
        "Recognition-Certificate",
        "School-Infrastructure-Certificate",
        "Self-Certification",
        "Society-Trust-Certificate",
        "Water-Health-&-Sanitation-Certificate",
      ],
    },
    {
      title: "Contact",
      items: [],
    },
  ];

const QuickLinks = () => {
  const pathname = usePathname(); // Get current path

  // Find the active menu section based on the current path
  const activeMenu = menuData.find((menu) => pathname.startsWith(`/${menu.title}`));

  return (
    <div className="p-6 bg-gray-100 rounded-2xl shadow-lg max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Access</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {menuData.map((menu, index) =>
          menu.title !== activeMenu?.title // Exclude the current section
            ? menu.items.map((item, idx) => (
                <Link key={idx} href={`/${menu.title}/${item}`}>
                  <div className="p-4 bg-white rounded-lg shadow hover:bg-green-500 hover:text-white transition cursor-pointer text-center font-semibold">
                    {item.replace(/-/g, " ")}
                  </div>
                </Link>
              ))
            : null
        )}
      </div>
    </div>
  );
};

export default QuickLinks;

