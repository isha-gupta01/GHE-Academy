"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Cross from "@/assets/icons/icons8-cross-48.png";
import SchoolLogo from "@/assets/images/logo.png";

const PopUp = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  useEffect(() => {
    setIsPopUpOpen(true);
  }, []);

  const closePopup = () => setIsPopUpOpen(false);

  return (
    <>
      {isPopUpOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={closePopup}
          ></div>

          {/* Popup Container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="fixed inset-0 flex justify-center items-center z-50"
          >
            <div className="flex flex-col items-center py-4 px-6 border-2 border-black backdrop-blur-lg bg-[#2F5233] text-[#89d552] w-[22rem] h-[20rem] rounded-[3rem] shadow-xl">
              
              {/* Logo */}
              <Image src={SchoolLogo} alt="School Logo" width={90} height={90} />

              {/* Header Section */}
              <div className="flex justify-between items-center w-full">
                <h2 className="text-4xl font-serif font-bold text-[#B1D8B7] underline">
                  Updates
                </h2>
                <button onClick={closePopup}>
                  <Image
                    src={Cross}
                    alt="Close"
                    width={30}
                    height={30}
                    className="bg-white rounded-full"
                  />
                </button>
              </div>

              {/* Notification Text */}
              <p className="py-2 text-2xl font-serif">Admission Open 2025-26</p>
              <p className="py-1 text-3xl font-serif font-bold text-[#76B947]">
                Register Now!
              </p>
              <p className="px-2 text-lg font-serif text-[#B1D8B7]">
                Admissions close on 25th Feb 2025.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
};

export default PopUp;
