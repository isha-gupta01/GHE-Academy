"use client";
import Header from '@/Sections/Header'
import Navbar from '@/Sections/Navbar'
import Footer from '@/Sections/Footer'
// import Hero from '@/Sections/Hero'
// import SchoolImage from "@/assets/images/contact.jpg"
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch("http://localhost:5001/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
  
    if (response.ok) {
      alert("Email sent successfully!");
      setFormData({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" });
    } else {
      alert("Failed to send email. Please try again.");
    }
  };
  

  return (
    <>
    <Header/>
    <Navbar />
    {/* <Hero image={SchoolImage} title="" subBody="" height={70}/> */}
    <div className="min-h-screen  flex justify-center items-center bg-[#5E9538] p-4">
      <div className="w-full sm:mt-[10rem] lg:mt-[8rem] max-w-4xl bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg shadow-xl p-6 md:p-10 flex flex-col md:flex-row">
        {/* Left Section - Form */}
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-bold text-[#5E9538]">Contact Us</h2>
          <p className="text-gray-300 mb-6">How can we help?</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:border-[#5E9538] focus:outline-none"
                />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:border-[#5E9538] focus:outline-none"
                />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:border-[#5E9538] focus:outline-none"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:border-[#5E9538] focus:outline-none"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>
            </div>
            {/* Subject Field (Optional) */}
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject (Optional)"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:border-[#5E9538] focus:outline-none"
              />
            </div>
            {/* Message Field */}
            <div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:border-[#5E9538] focus:outline-none"
                rows="4"
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>
            <button
            onClick={handleSubmit}
              type="submit"
              className="w-full p-2 bg-[#76B947] hover:bg-[#5E9538] rounded text-white font-bold"
            >
              SUBMIT
            </button>
          </form>
        </div>

        {/* Right Section - Contact Info */}
        <div className="w-full md:w-1/3 mt-8 md:mt-0 md:ml-8 text-gray-300">
          <h2 className="text-lg font-bold text-[#5E9538]">Contact Information</h2>
          <p className="mt-2">Vill: Post Madanpura, Talhapur at Jasmour-Biharigarh Road, UP-247129</p>
          <p className="mt-2">Call Us: Phone: +91 97196 71243</p>
          <p className="mt-2">Call Us: Phone: +91 97198 00456</p>
          <p className="mt-2">We are open from Monday - Saturday, 08:00 AM - 05:00 PM</p>

          <h2 className="text-lg font-bold text-[#5E9538] mt-6">Follow Us</h2>
          <div className="flex gap-4 mt-2">
            <a href="#" className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-white hover:from-[#1877f2] hover:to-[#3b5998]">Facebook</a>
            <a href="#" className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500 hover:from-[#f46f30] hover:to-[#c32aa3]">Instagram</a>
            <a href="https://wa.me/91" className="text-[#25d366]">Whatsapp</a>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ContactPage;