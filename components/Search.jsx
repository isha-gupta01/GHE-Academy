"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";

const menuData = [
  { menuTitle: "About", items: ["About-Us", "Principal-Message", "Manager-Message", "Vision-&-Mission", "Progress-Report", "Academic-Year", "Institutional-Rules"] },
  { menuTitle: "Admissions", items: ["Application-Process", "Fee-Structure"] },
  { menuTitle: "Certificates", items: ["Affilation-Certificate", "Building-Safety-Certificate", "Fire-Safety-Certificate", "Land-Certificate", "No-Objection-Certificate", "Recognition-Certificate", "School-Infrastructure-Certificate", "Self-Certification", "Society-Trust-Certificate", "Water-Health-&-Sanitation-Certificate"] },
  { menuTitle: "Campus-Facility", items: ["Art-Lab", "Board-Exam-Applicability", "Computer-Lab", "English-Language-Lab", "Extra-Curricular-Activities", "Facility", "Faculty-and-Staff", "Parent-Teacher-Association", "School-Management-Committee", "Science-Lab", "Transportation"] },
  { menuTitle: "Gallery", items: [] },
  { menuTitle: "Contact", items: [] },
];

const Search = ({show}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const searchInputRef = useRef(null);
  const router = useRouter();

  // Disable page scrolling when search is open
  useEffect(() => {
    if (showSearch) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Cleanup when unmounted
    };
  }, [showSearch]);

  // Flattened list of all search items with menuTitle for routing
  const searchItems = menuData.flatMap(({ menuTitle, items }) =>
    items.map((item) => ({ menuTitle, item }))
  );

  // Filter search results
  const filteredResults = searchQuery
    ? searchItems.filter(({ item }) =>
        item.replace(/-/g, " ").toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  // Focus input when search box opens
  useEffect(() => {
    if (showSearch) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [showSearch]);

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (filteredResults.length > 0) {
      if (e.key === "ArrowDown") {
        setSelectedIndex((prev) => (prev + 1) % filteredResults.length);
      } else if (e.key === "ArrowUp") {
        setSelectedIndex((prev) => (prev - 1 + filteredResults.length) % filteredResults.length);
      } else if (e.key === "Enter") {
        const selectedItem = filteredResults[selectedIndex];
        if (selectedItem) {
          router.push(`/${selectedItem.menuTitle}/${selectedItem.item}`);
          setShowSearch(false);
          setSearchQuery("");
        }
      }
    }
  };

  // Toggle search box and reset search query
  const toggleSearch = () => {
    setShowSearch(!showSearch);
    setSearchQuery(""); // Clear search results when opening/closing
    setSelectedIndex(0);
  };

  return (
    <nav className="lg:ml-4 flex justify-between items-center text-white relative">
      {/* Search Icon */}
      <button onClick={toggleSearch} className="relative ">
        <FaSearch className={`text-xl  cursor-pointer sm:size-6 md:size-5 ${show}`} />
      </button>

      {/* Search Box */}
      <div
        className={`absolute top-full right-0 mt-2 w-72   bg-gray-800 shadow-lg rounded-2xl p-3 transition-all duration-300 ${
          showSearch ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setSelectedIndex(0); // Reset selection when typing
          }}
          onKeyDown={handleKeyDown}
          className="w-full p-2 border border-gray-300 bg-gray-900 rounded-md text-white"
        />

        {/* Search Suggestions (Internal Scroll) */}
        {filteredResults.length > 0 && (
          <ul className="mt-2 border border-gray-300 rounded-md overflow-y-auto max-h-[50vh]">
            {filteredResults.map(({ menuTitle, item }, index) => (
              <li
                key={item}
                className={`border-b last:border-none cursor-pointer px-3 py-2 ${
                  index === selectedIndex ? "bg-gray-500" : ""
                }`}
              >
                <Link href={`/${menuTitle}/${item}`} className="block text-white">
                  {item.replace(/-/g, " ")}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Search;