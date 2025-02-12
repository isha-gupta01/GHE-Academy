"use client";
import React, { useState } from "react";
import Masonry from "react-masonry-css";
import Navbar from '@/Sections/Navbar';
import Footer from '@/Sections/Footer';
import Hero from '@/Sections/Hero';
import SchoolImage from "@/assets/images/gallery.jpg";
import Updates from '@/components/Updates';

const events = [
  {
    title: "Annual Day Celebration",
    images: [
      "/gallery/event1-1.jpeg",
      "/gallery/event1-2.jpeg",
      "/gallery/event1-3.jpeg",
      "/gallery/event1-4.jpeg",
      "/gallery/event1-5.jpeg",
      "/gallery/event1-6.jpeg",
      "/gallery/event1-7.jpeg",
      "/gallery/event1-8.jpeg",
      "/gallery/event1-9.jpeg"
    ]
  },
  {
    title: "Sports Meet",
    images: []
  },
  {
    title: "Independence Day",
    images: [
      "/gallery/event3-1.jpg",
      "/gallery/event3-2.jpg",
      "/gallery/event3-3.jpg",
      "/gallery/event3-4.jpg",
      "/gallery/event3-5.jpg",
      "/gallery/event3-6.jpg",
      "/gallery/event3-7.jpg",
      "/gallery/event3-8.jpg",
      "/gallery/event3-9.jpg",
      "/gallery/event3-10.jpg",
      "/gallery/event3-11.jpg",
      "/gallery/event3-12.jpg",
      "/gallery/event3-13.jpg",
      "/gallery/event3-14.jpg",
      "/gallery/event3-15.jpg"
    ]
  }
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentEventImages, setCurrentEventImages] = useState([]);

  const openFullscreen = (images, index) => {
    setCurrentEventImages(images);
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const closeFullscreen = () => {
    setSelectedImage(null);
  };

  const showNextImage = () => {
    if (currentIndex < currentEventImages.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedImage(currentEventImages[currentIndex + 1]);
    }
  };

  const showPrevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedImage(currentEventImages[currentIndex - 1]);
    }
  };

  return (
    <>
      <Updates />
      <Navbar />
      <Hero image={SchoolImage} title="" subBody="Gallery" height={70} />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center my-4">Event Gallery</h1>
        {events.map((event, index) => (
          <div key={index} className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">{event.title}</h2>
            {event.images.length > 0 ? (
              <Masonry
                breakpointCols={{ default: 4, 1024: 3, 768: 2, 500: 1 }}
                className="flex gap-2"
                columnClassName="masonry-column space-y-2"
              >
                {event.images.map((image, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="relative group cursor-pointer"
                    onClick={() => openFullscreen(event.images, imgIndex)}
                  >
                    <img
                      src={image}
                      alt={`Event ${index + 1} - Image ${imgIndex + 1}`}
                      className="shadow-md hover:shadow-lg transition-all duration-300 w-full mb-2"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                      <p className="text-white text-lg">View in Fullscreen</p>
                    </div>
                  </div>
                ))}
              </Masonry>
            ) : (
              <p className="text-gray-500">No images available for this event.</p>
            )}
          </div>
        ))}
      </div>
      <Footer />

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <button
            className="absolute top-5 right-5 text-white text-2xl"
            onClick={closeFullscreen}
          >
            &times;
          </button>
          <button
            className="absolute left-5 text-white text-2xl"
            onClick={showPrevImage}
            disabled={currentIndex === 0}
          >
            &#8249;
          </button>
          <img
            src={selectedImage}
            alt="Fullscreen View"
            className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
          />
          <button
            className="absolute right-5 text-white text-2xl"
            onClick={showNextImage}
            disabled={currentIndex === currentEventImages.length - 1}
          >
            &#8250;
          </button>
        </div>
      )}
    </>
  );
};

export default GalleryPage;