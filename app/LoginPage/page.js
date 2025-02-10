"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SchoolLogo from "@/assets/images/logo.png";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Submitted! (Handle authentication logic here)");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#5E9547]">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl lg:m-0 sm:m-4 shadow-2xl p-8 w-[24rem] flex flex-col items-center"
      >
        <Image src={SchoolLogo} alt="School Logo" width={80} height={80} className="mb-4" />
        <h2 className="text-2xl font-bold text-[#2F5233]">Login to Your Account</h2>
        <p className="text-sm text-gray-600 mb-6">Enter your credentials below</p>

        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#76B947]"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#76B947]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#2F5233] text-white py-2 rounded-lg font-bold text-lg hover:bg-[#76B947] transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-4">
          Don't have an account? <a href="#" className="text-[#76B947] font-semibold">Sign Up</a>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;
