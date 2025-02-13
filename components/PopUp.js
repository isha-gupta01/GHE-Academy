"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Cross from "@/assets/icons/icons8-cross-48.png";
import Alert from "@/assets/icons/alert1.jpg";
import SignUp from "@/assets/icons/signup.png"
import Link from "next/link";

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
            <div className="bg-white pt-4 md:h-[32rem] md:w-[25rem] sm:h-[35rem] sm:w-[22rem] rounded-2xl flex justify-center flex-col gap-4 items-center">
              <button onClick={closePopup} className=" z-10 md:pl-[22rem] sm:pl-[18rem]"><Image src={Cross} alt="cross" width={30} height={30}/></button>
              <div className="flex flex-col justify-center">
                <Image src={Alert} alt="icon" width={250} height={300} />
              </div>
              <div className="text-white w-full gap-5 bg-yellow-500 h-[13rem] sm:h-[15rem] rounded-b-2xl flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-gray-800 uppercase ">Updates</span>
                <span className="text-2xl  ">Admissions Open 2025-26</span>
                <button className="border border-black rounded-full shadow-[0px_0px_14px_2px_rgba(0,_0,_0,_0.1)] flex items-center bg-emerald-500 px-4 py-2 gap-4 text-xl"><Link href="/Contact">Register Now! </Link><span><Image src={SignUp} alt="register" width={30} height={30}/></span></button>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </>
  );
};

export default PopUp;
