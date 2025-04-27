"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Hamburger from "@/assets/icons/icons8-menu.png";
import Cross from "@/assets/icons/icons8-multiply-100.png";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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
      "Class-Room-Size-Certificate",
      "Fire-Safety-Certificate",
      "HT-Line-Certificate",
      "Land-Certificate",
      "No-Objection-Certificate",
      "Parents-Teachers-Association",
      "Recognition-Certificate",
      "School-Infrastructure-Certificate",
      "Self-Certification",
      "Society-Trust-Certificate",
      "Water-Health-&-Sanitation-Certificate",
      "Mandatory-Disclosure"
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
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleMenu = (index) => setActiveMenu(activeMenu === index ? null : index);

  useEffect(() => {
    setActiveMenu(null);
  }, []);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isSidebarOpen]);

  // Button variants for animation
  const hamburgerButtonVariants = {
    hover: { scale: 1.1, rotate: 5, transition: { duration: 0.2 } },
    tap: { scale: 0.95 }
  };

  // Sidebar animation variants
  const sidebarVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    },
    exit: { 
      x: "100%", 
      opacity: 0,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 40,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  // Menu item variants
  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
  };

  // Submenu item variants
  const submenuItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 500 } }
  };

  return (
    <>
      {/* Hamburger Menu Button (Visible only on small screens) */}
      <motion.button
        className="md:hidden text-white z-50 rounded-full shadow-lg"
        onClick={toggleSidebar}
        variants={hamburgerButtonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <Image src={Hamburger} alt="menu" width={40} height={40} className="invert sm:w-[30px] sm:h-auto xs:w-[25px] xs:h-auto" />
      </motion.button>

      {/* Sidebar (Appears when isSidebarOpen is true) */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 sm:top-[16px] xs:-top-[0.75rem] h-screen bg-black z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              onClick={toggleSidebar}
            />

            {/* Sidebar */}
            <motion.aside
              className="fixed z-50 sm:top-[16px] xs:-top-[0.75rem] right-0 w-72 h-screen bg-gray-900 text-white p-4 shadow-2xl"
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Close button */}
              <motion.button 
                className="absolute top-7 right-4  rounded-full  transition-colors"
                onClick={toggleSidebar}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image src={Cross} alt="Close" width={16} height={16} className="invert" />
              </motion.button>

              {/* Menu Logo or Title */}
              <motion.div 
                className="mb-8 mt-6 text-center"
                variants={menuItemVariants}
              >
                <h2 className="text-xl font-ubuntu  text-green-500">
                  Menu
                </h2>
                <div className="h-[1px] w-16 bg-green-700 mx-auto mt-2 rounded-full"></div>
              </motion.div>

              {/* Menu Items */}
              <ul className="space-y-3">
                {menuData.map((menu, index) => (
                  <motion.li 
                    key={index}
                    variants={menuItemVariants}
                    onHoverStart={() => setHoveredMenu(index)}
                    onHoverEnd={() => setHoveredMenu(null)}
                  >
                    <motion.button
                      className={`w-full text-left font-semibold p-3 rounded-lg flex justify-between items-center transition-all ${
                        activeMenu === index 
                          ? "bg-[#5e9538] text-white shadow-lg" 
                          : "bg-[#5e9538]/50 hover:bg-[#5e9538] text-gray-100"
                      }`}
                      onClick={() => toggleMenu(index)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {(index === 2 || index === 5) ? (
                        <Link href={`/${menu.title}`} className="flex-1">
                          {menu.title.replace(/-/g, " ")}
                        </Link>
                      ) : (
                        <span className="flex-1">{menu.title.replace(/-/g, " ")}</span>
                      )}
                      
                      {menu.items.length > 0 && (
                        <motion.span
                          animate={{ rotate: activeMenu === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-green-400"
                        >
                          ▼
                        </motion.span>
                      )}
                    </motion.button>

                    <AnimatePresence>
                      {activeMenu === index && menu.items.length > 0 && (
                        <motion.div
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          variants={{
                            hidden: { height: 0, opacity: 0 },
                            visible: {
                              height: "auto",
                              opacity: 1,
                              transition: { duration: 0.3, when: "beforeChildren", staggerChildren: 0.05 }
                            }
                          }}
                          className="overflow-hidden mt-1"
                        >
                          <ul className="mt-1 ml-3 pl-2 border-l-2 border-green-700/30 overflow-y-auto max-h-48 pr-1">
                            {menu.items.map((item, idx) => (
                              <motion.li 
                                key={idx} 
                                variants={submenuItemVariants}
                                className="py-2"
                              >
                                <Link
                                  href={`/${menu.title}/${item}`}
                                  className="block text-sm text-gray-300 hover:text-white pl-3 py-1 rounded-md hover:bg-green-800/40 transition-all"
                                >
                                  {item.replace(/-/g, " ")}
                                </Link>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>
                ))}
              </ul>
              
              {/* Footer section */}
              <motion.div 
                className="absolute bottom-6 left-0 right-0 text-center text-xs text-gray-400 px-4"
                variants={menuItemVariants}
              >
                <div className="h-px w-3/4 mx-auto mb-4 bg-green-700/30"></div>
                <p>© 2024 School Name</p>
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;