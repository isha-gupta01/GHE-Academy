'use client';

import { useState } from 'react';
import Link from 'next/link';

const DropdownMenu = ({ menuTitle, menuItems }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    let timeoutId = null; // Store timeout reference

    const handleMouseEnter = () => {
        clearTimeout(timeoutId); // Prevent immediate hiding
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutId = setTimeout(() => {
            setIsDropdownOpen(false);
        }, 150);
    };

    

    return (
        <div className='lg:px-2 py-2 md:px-2  '>
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            className='lg:text-xl md:text-sm relative'>
            <button  onClick={()=>setIsDropdownOpen(!isDropdownOpen)}>{menuTitle}</button>
            {isDropdownOpen && (
                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <ul className='absolute top-12 -left-6 min-w-max bg-white text-black  shadow-lg rounded-md'>
                        {menuItems.map((item, index) => (
                            <li key={index} className='p-2 hover:bg-gray-400'>
                                <Link href={`/${menuTitle}/${item}`} className=''>{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
        </div>
    );
};

export default DropdownMenu;
