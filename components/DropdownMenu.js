'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from "next/navigation";

const DropdownMen = ({ menuTitle, menuItems }) => {
    const pathname = usePathname();

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    let timeoutId = null; // Store timeout reference

    const handleMouseEnter = () => {
        clearTimeout(timeoutId); // Prevent immediate hiding
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutId = setTimeout(() => {
            setIsDropdownOpen(false);
        }, 100);
    };

    // Check if the current route starts with the menu title path
    const isActive = pathname.startsWith(`/${menuTitle}`);

    return (
        <div className='lg:px-2 py-2 md:py-1 md:px-1'>
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`lg:text-lg md:text-sm relative ${isActive ? " bg-white text-black rounded-full  py-3 px-4 shadow-[inset_0px_0px_11px_-4px_rgba(0,_0,_0,_0.7)]" : "hover:bg-white/10 hover:border hover:border-white  hover:text-white px-4 py-3 rounded-full"}`}
            >
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    {menuTitle.replace(/-/g, " ")}
                </button>
                {isDropdownOpen && (
                    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <ul className='absolute top-16 -left-6 min-w-max bg-gray-800 text-white shadow-lg rounded-md max-h-[70vh] overflow-y-auto'>
                            {menuItems.map((item, index) => (
                                <Link key={index} href={`/${menuTitle}/${item}`} className={pathname === `/${menuTitle}/${item}` ? "text-green-500" : ""}>
                                    <li  className='p-2 rounded-md border-b-[1px] hover:text-green-500 border-white/5'>
                                        {item.replace(/-/g, " ")}
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DropdownMen;
