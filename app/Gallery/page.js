"use client";
import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import Navbar from '@/Sections/Navbar'
import Footer from '@/Sections/Footer';
import Hero from '@/Sections/Hero';
import SchoolImage from "@/assets/images/gallery.jpg";
import Updates from '@/components/Updates';
import { motion, AnimatePresence } from "framer-motion";

const events = [
  {
    title: "",
    images: [
      "/gallery/event1-1.jpg",
      "/gallery/event1-2.jpg",
      "/gallery/event1-3.jpg",
      "/gallery/event1-4.jpg",
      "/gallery/event1-5.jpg",
      "/gallery/event1-6.jpg",
      "/gallery/event1-7.jpg",
      "/gallery/event1-8.jpg",
      "/gallery/event1-9.jpg",
      "/gallery/event1-10.jpg",
      "/gallery/event1-11.jpg",
      "/gallery/event1-12.jpg",
      "/gallery/event1-13.jpg",
      "/gallery/event1-14.jpg",
      "/gallery/event1-15.jpg",
      "/gallery/event1-16.jpg",
      "/gallery/event1-17.jpg",
      "/gallery/event1-19.jpg",
      "/gallery/event1-20.jpg",
      "/gallery/event1-21.jpg",
      "/gallery/event1-22.jpg",
      "/gallery/event1-23.jpg",
      "/gallery/event1-24.jpg",
      "/gallery/event1-25.jpg",
      "/gallery/event1-26.jpg",
      "/gallery/event1-27.jpg",
      "/gallery/event1-28.jpg",
      "/gallery/event1-29.jpg",
      "/gallery/event1-30.jpg"
    ]
  }
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentEventImages, setCurrentEventImages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    // Set page as loaded after a small delay for initial animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const openFullscreen = (images, index) => {
    setCurrentEventImages(images);
    setCurrentIndex(index);
    setSelectedImage(images[index]);
    setDirection(0);
    document.body.style.overflow = "hidden";
  };

  const closeFullscreen = () => {
    document.body.style.overflow = "auto";
    setSelectedImage(null);
  };

  const showNextImage = () => {
    if (currentIndex < currentEventImages.length - 1) {
      setDirection(1);
      setCurrentIndex(currentIndex + 1);
      setSelectedImage(currentEventImages[currentIndex + 1]);
    }
  };

  const showPrevImage = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(currentIndex - 1);
      setSelectedImage(currentEventImages[currentIndex - 1]);
    }
  };

  // Animation variants
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const titleVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.05,
        delayChildren: 0.3
      }
    }
  };

  const imageVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: { 
      scale: 1.03,
      boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3 }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  const slideVariants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    },
    exit: (direction) => {
      return {
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        transition: {
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.3 }
        }
      };
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      if (e.key === "ArrowRight") {
        showNextImage();
      } else if (e.key === "ArrowLeft") {
        showPrevImage();
      } else if (e.key === "Escape") {
        closeFullscreen();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex, currentEventImages]);

  return (
    <>
      <Updates />
      <Navbar />
      <Hero image={SchoolImage} title="Gallery" subBody="" height={70} />
      
      <motion.div 
        className="container mx-auto p-4"
        initial="initial"
        animate={isLoaded ? "animate" : "initial"}
        variants={pageVariants}
      >
        <motion.h1 
          className="text-4xl font-bold text-center my-4"
          variants={titleVariants}
        >
          Event Gallery
        </motion.h1>
        
        {events.map((event, index) => (
          <motion.div 
            key={index} 
            className="mb-10"
            variants={containerVariants}
          >
            <motion.h2 
              className="text-2xl font-semibold xs:whitespace-nowrap underline mb-4"
              variants={titleVariants}
            >
              {event.title}
            </motion.h2>
            
            {event.images.length > 0 ? (
              <Masonry
                breakpointCols={{ default: 4, 1024: 3, 768: 2, 500: 1 }}
                className="flex gap-2"
                columnClassName="masonry-column space-y-2"
              >
                {event.images.map((image, imgIndex) => (
                  <motion.div
                    key={imgIndex}
                    className="relative group cursor-pointer overflow-hidden"
                    onClick={() => openFullscreen(event.images, imgIndex)}
                    variants={imageVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    layout
                  >
                    <motion.img
                      src={image}
                      alt={`Event ${index + 1} - Image ${imgIndex + 1}`}
                      className="w-full mb-2 transition-all duration-300"
                      loading="lazy"
                    />
                    <motion.div 
                      className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.p 
                        className="text-white text-lg"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        View in Fullscreen
                      </motion.p>
                    </motion.div>
                  </motion.div>
                ))}
              </Masonry>
            ) : (
              <p className="text-gray-500">No images available for this event.</p>
            )}
          </motion.div>
        ))}
      </motion.div>
      
      <Footer />

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.button
              className="absolute top-5 right-5 text-white text-2xl p-4 z-30 hover:scale-110"
              onClick={closeFullscreen}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              &times;
            </motion.button>
            
            <motion.button
              className="absolute left-5 text-white text-4xl p-4 z-30 opacity-70 hover:opacity-100"
              onClick={showPrevImage}
              disabled={currentIndex === 0}
              whileHover={{ scale: 1.2, opacity: 1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: currentIndex === 0 ? 0.5 : 0.7 }}
            >
              &#8249;
            </motion.button>
            
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={selectedImage}
                className="absolute inset-0 flex justify-center items-center"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <motion.img
                  src={selectedImage}
                  alt="Fullscreen View"
                  className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
                  initial={{ opacity: 0.8, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </AnimatePresence>
            
            <motion.button
              className="absolute right-5 text-white text-4xl p-4 z-30 opacity-70 hover:opacity-100"
              onClick={showNextImage}
              disabled={currentIndex === currentEventImages.length - 1}
              whileHover={{ scale: 1.2, opacity: 1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ x: 10, opacity: 0 }}
              animate={{ 
                x: 0, 
                opacity: currentIndex === currentEventImages.length - 1 ? 0.5 : 0.7 
              }}
            >
              &#8250;
            </motion.button>
            
            <motion.div 
              className="absolute bottom-5 text-white text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {currentIndex + 1} / {currentEventImages.length}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryPage;