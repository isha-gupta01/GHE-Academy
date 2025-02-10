"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuData = [
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
];
const QuickLinks = () => {
  const pathname = usePathname(); // Get current path

  // Find the active menu section based on the current path
  const activeMenu = menuData.find((menu) => pathname.startsWith(`/${menu.title}`));

  if (!activeMenu || activeMenu.items.length === 0) return null; // Hide Quick Links if no submenu

  // Extract the currently opened item from the URL
  const currentItem = pathname.split("/").pop();

  return (
    <div className="mt-20 px-5 mx-auto  rounded-2xl  max-w-[20rem] ">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Quick Links</h2>
      <div className="flex flex-col gap-4">
        {activeMenu.items
          .filter((item) => item !== currentItem) // Exclude current page
          .map((item, index) => (
            <Link key={index} href={`/${activeMenu.title}/${item}`}>
              <div className="p-4 bg-white rounded-lg shadow hover:bg-green-500 hover:text-white transition cursor-pointer text-center font-semibold">
                {item.replace(/-/g, " ")}
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default QuickLinks;


