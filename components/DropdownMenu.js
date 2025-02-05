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
        }, 300);
    };

    

    return (
        <div className='border border-black px-5 py-4'>
            <li 
            className='text-xl relative'>
            <button  onClick={()=>setIsDropdownOpen(!isDropdownOpen)}>{menuTitle}</button>
            {isDropdownOpen && (
                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <ul className='absolute top-12 -left-6 w-28 bg-white text-black  shadow-lg rounded-md'>
                        {menuItems.map((item, index) => (
                            <li key={index} className='p-2 hover:bg-gray-400'>
                                <Link href={item}>{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </li>
        </div>
    );
};

export default DropdownMenu;
