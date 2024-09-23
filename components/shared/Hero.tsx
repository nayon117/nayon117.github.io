"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const textVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.section
      className="relative flex h-screen items-center overflow-hidden px-5 pt-16 sm:px-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="absolute inset-0 z-0">
        <video
          className="size-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://assets.mixkit.co/videos/49122/49122-720.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="relative z-10 w-full max-w-2xl px-4 text-left text-white sm:px-6 lg:px-8">
        <motion.h1
          className="mb-4 text-2xl font-bold md:text-3xl lg:whitespace-nowrap"
          variants={textVariants}
        >
          Designer, developer, and tech enthusiast
        </motion.h1>
        <motion.p
          className="mb-8 text-lg sm:text-xl md:text-2xl"
          variants={textVariants}
        >
          creating exceptional web and digital experiences.
        </motion.p>
        <a href="/Hasibul Hasan Nayon's Resume.pdf" download>
          <motion.button
            className="inline-flex items-center rounded-md bg-green-700 px-6 py-3 font-bold text-white transition duration-300 ease-in-out hover:bg-green-800"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Resume
            <FaDownload className="ml-2" />
          </motion.button>
        </a>
      </div>
    </motion.section>
  );
};

export default Hero;
