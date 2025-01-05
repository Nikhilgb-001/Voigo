import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
  const textArray = [
    "From Coriander to Coriander Leaves, Bananas to Basmati - Voigo Delivers It All, Free!",
    "A New Era of Convenience Shopping - Just Voigo It!",
    "Whatever's on Your List - Be It Big or Small - Just Say It, and Voigo's on the Way!",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, [textArray.length]);

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="bg-blue-950 text-white py-20 flex flex-col justify-center items-center">
      <AnimatePresence mode="wait">
        <motion.h1
          key={currentIndex} // Ensure Framer Motion treats text changes as unique
          className="text-xl p-3  lg:text-3xl font-bold text-center"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={textVariants}
          transition={{
            duration: 0.8, // Animation duration for each phase
          }}
        >
          {textArray[currentIndex]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default HeroSection;
