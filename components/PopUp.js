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
              <div className="bg-white pt-4 h-[30rem] w-[25rem] rounded-2xl flex justify-center flex-col gap-20 items-center">
            <div className="flex flex-col justify-center">
                <Image src={SchoolLogo} alt="icon" width={200} height={200}/>
                </div>
              <div className="text-white w-full bg-yellow-500 h-[13rem] rounded-b-2xl flex flex-col items-center justify-center">
                <span>Updates</span>
                <span>Admissions Open 2025-26</span>
                <button>Register Now!</button>
              </div>
              
            </div>
          </motion.div>
        </>
      )}
    </>
  );
};

export default PopUp;
