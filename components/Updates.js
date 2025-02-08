"use client"
import React from 'react'
import {motion} from "framer-motion"

const Updates = () => {
    return (
        <>
            <div className="relative w-full  overflow-hidden bg-gray-900  py-[0.4rem]">
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: "-100%" }}
                    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                    className="whitespace-nowrap text-sm   text-white"
                >
                    Admissions Open 2025-26 - Register Now!!!
                </motion.div>
            </div>
        </>
    )
}

export default Updates
