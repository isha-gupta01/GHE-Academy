"use client"
import React from 'react'
import {motion} from "framer-motion"

const Updates = () => {
    return (
        <>
            <div className="relative w-full overflow-hidden bg-red-600  py-2">
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: "-100%" }}
                    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                    className="whitespace-nowrap text-2xl font-bold  text-white"
                >
                    Admissions Open 2025-26 - Register Now!!!
                </motion.div>
            </div>
        </>
    )
}

export default Updates
