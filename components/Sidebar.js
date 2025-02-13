"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Hamburger from "@/assets/icons/icons8-menu.png"
import Cross from "@/assets/icons/icons8-multiply-100.png"
import Image from "next/image";
import { motion } from "framer-motion";

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
      "School-Management-Committee",
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

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleMenu = (index) =>
    setActiveMenu(activeMenu === index ? null : index);

  useEffect(() => {
    setActiveMenu(null)
  }, [])

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    }
    else {
      document.body.style.overflow = "auto";
    }
  }, [isSidebarOpen])



  return (
    <>
      {/* Hamburger Menu Button (Visible only on small screens) */}
      <button
        className="md:hidden  text-white z-50  "
        onClick={toggleSidebar}
      >
        <Image src={Hamburger} alt="menu" width={40} height={40} className="invert xs:w-[27px] xs:h-auto  sm:w-[30px] sm:h-auto "/>
      </button>
      {/* <a href="https://www.freepik.com/search">Icon by pocike</a> */}

      {/* Sidebar (Appears when isSidebarOpen is true) */}
      <aside
        className={`fixed z-50 top-[16px]  right-0 w-72 h-[100vh] backdrop-blur-3xl text-white p-2 transform ${isSidebarOpen ? "translate-x-0 " : "translate-x-full hidden"
          } transition-transform duration-300 xl:hidden`}
      >
        <button className="relative top-0 pt-7 left-56 mb-4 invert" onClick={toggleSidebar}>
          <Image src={Cross} alt="Cross" width={20} height={20} />
        </button>
        

        <ul className="space-y-2">
          {menuData.map((menu, index) => (
            <li key={index}>

              <button
                className="w-full text-left font-semibold p-2 bg-gray-900 rounded-md"
                onClick={() => toggleMenu(index)}
              >
                {/* {menu.title} */}

                {(index === 2 || index === 5) ? (
                  
                  <Link href={`/${menu.title}`}>
                    {menu.title.replace(/-/g," ")}
                  </Link>
                ) : (
                  <span>{menu.title.replace(/-/g," ")}</span>
                )}

              </button>
              <motion.ul
                initial="hidden"
                animate={activeMenu === index ? "visible" : "hidden"}
                variants={{
                  hidden: { height: 0, opacity: 0 },
                  visible: {
                    height: "auto",
                    opacity: 1,
                    transition: { duration: 0.3 },
                  },
                }}
                className="overflow-y-auto  max-h-48 mt-2 pl-4"
              >

                {menu.items.length > 0 && (
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
              </motion.ul>
            </li>
          ))}
        </ul>

      </aside>

      {/* Overlay (Closes sidebar when clicked outside) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 top-[16px] h-[100vh] bg-black opacity-50 z-40 ip:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
