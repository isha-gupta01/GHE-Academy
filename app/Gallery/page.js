"use client";
import { useState } from "react";
import Header from '@/Sections/Header'
import Navbar from '@/Sections/Navbar'
import Footer from '@/Sections/Footer'
import Hero from '@/Sections/Hero'
import SchoolImage from "@/assets/images/gallery.jpg"
import Updates from '@/components/Updates'

import Image from "next/image";

const events = [
  {
    title: "Annual Day Celebration",
    images: [
      "/images/event1-1.jpeg",
      "/images/event1-2.jpeg",
      "/images/event1-3.jpeg",
      "/images/event1-4.jpeg",
      "/images/event1-5.jpeg",
      "/images/event1-6.jpeg",
      "/images/event1-7.jpeg",
      "/images/event1-8.jpeg",
      "/images/event1-9.jpeg",
      "/images/event1-10.jpeg",
      "/images/event1-11.jpeg",
      "/images/event1-12.jpeg",
      "/images/event1-13.jpeg",
      "/images/event1-14.jpeg",
    ],
  },
  {
    title: "Sports Meet",
    images: [
      "/images/event2-1.jpeg",
      "/images/event2-2.jpeg",
      "/images/event2-3.jpeg",
      "/images/event2-4.jpeg",
      "/images/event2-5.jpeg",
    ],
  },
  {
    title: "Independence Day",
    images: [
      "/images/event3-1.jpg",
      "/images/event3-2.jpg",
      "/images/event3-3.jpg",
      "/images/event3-4.jpg",
      "/images/event3-5.jpg",
      "/images/event3-6.jpg",
      "/images/event3-7.jpg",
      "/images/event3-8.jpg",
      "/images/event3-9.jpg",
      "/images/event3-10.jpg",
      "/images/event3-11.jpg",
      "/images/event3-12.jpg",
      "/images/event3-13.jpg",
      "/images/event3-14.jpg",
      "/images/event3-15.jpg",
    ],
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedEvent, setExpandedEvent] = useState(null);

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev + 1 < events.find((e) => e.images.includes(selectedImage)).images.length
        ? prev + 1
        : 0
    );
    setSelectedImage(events.find((e) => e.images.includes(selectedImage)).images[currentIndex + 1] || events.find((e) => e.images.includes(selectedImage)).images[0]);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev - 1 >= 0
        ? prev - 1
        : events.find((e) => e.images.includes(selectedImage)).images.length - 1
    );
    setSelectedImage(events.find((e) => e.images.includes(selectedImage)).images[currentIndex - 1] || events.find((e) => e.images.includes(selectedImage)).images[events.find((e) => e.images.includes(selectedImage)).images.length - 1]);
  };

  return (

    <>
    <Updates/>
    <Header/>
    <Navbar/>
    <Hero image={SchoolImage} title="Gallery" subBody="Photo in every Student" height={70}/>
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-[#5E9538] mb-6">
        School Gallery
      </h1>

      {events.map((event, eventIndex) => (
        <div key={eventIndex} className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {event.title}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {event.images
              .slice(0, expandedEvent === eventIndex ? event.images.length : 4)
              .map((image, imgIndex) => (
                <div
                  key={imgIndex}
                  className="relative group cursor-pointer"
                  onClick={() => openModal(image, imgIndex)}
                >
                  <Image
                    src={image}
                    alt={`Event ${eventIndex + 1} Image ${imgIndex + 1}`}
                    width={300}
                    height={300}
                    className="rounded-lg w-auto h-auto shadow-md transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-lg font-bold transition-opacity duration-300">
                    View in Fullscreen
                  </div>
                </div>
              ))}
          </div>

          {event.images.length > 4 && (
            <button
              onClick={() =>
                setExpandedEvent(expandedEvent === eventIndex ? null : eventIndex)
              }
              className="mt-4 text-sm px-4 py-2 bg-[#5E9538] text-white rounded-lg"
            >
              {expandedEvent === eventIndex ? "Less ▲" : "More ▼"}
            </button>
          )}
        </div>
      ))}

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative lg:h-[90vh] bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
            <button
              className="absolute top-2 right-2 text-white text-xl font-bold bg-[#5E9538] px-3 py-1 rounded-full"
              onClick={closeModal}
            >
              ✖
            </button>

            <Image
              src={selectedImage}
              alt="Selected Event"
              width={500}
              height={300}
              className="lg:h-[80vh] w-auto rounded-lg"
            />

            <div className="flex justify-between mt-4 w-full px-6">
              <button
                onClick={prevImage}
                className="px-4 py-1 bg-gray-700 text-white rounded-lg"
              >
                Prev
              </button>
              <button
                onClick={nextImage}
                className="px-4 py-2 bg-gray-700 text-white rounded-lg"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
}