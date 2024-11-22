'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const text = `
    Hello! I'm Prasada Mani, a passionate full-stack web developer, designer, and tech enthusiast.
    As a student and aspiring professional, I specialize in creating scalable and responsive web applications using modern technologies like React, Next.js, Node.js, and Tailwind CSS.

    My expertise extends beyond web development. I have hands-on experience with cloud platforms like AWS, where I have deployed scalable applications and optimized server infrastructures. I'm also proficient in container orchestration with Kubernetes, enabling me to manage and scale microservices-based architectures.

    I actively explore new tools and methodologies to refine my craft and deliver innovative, future-ready solutions. Let's build something amazing together!
  `;
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Faster typing speed
  const typingSpeed = 7; // Typing speed in milliseconds per character

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <div id="about" className="h-screen flex flex-col justify-center items-center relative">
      {/* Animated Heading */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text animate-gradientText"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: 'linear-gradient(270deg, #FF5733, #FFC300, #DAF7A6, #FF33A6, #FF8C00)',
          backgroundSize: '400% 400%',
        }}
      >
        About Me
      </motion.h1>

      {/* Typing Content */}
      <motion.div
        className="w-[90%] md:w-[60%] max-h-[80%] bg-gray-900 rounded-lg shadow-2xl relative overflow-auto p-6 mt-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Frame Border */}
        <div className="absolute top-0 left-0 w-full h-[10px] bg-gray-800"></div>
        <div className="absolute bottom-0 left-0 w-full h-[10px] bg-gray-800"></div>
        <div className="absolute top-0 left-0 w-[10px] h-full bg-gray-800"></div>
        <div className="absolute top-0 right-0 w-[10px] h-full bg-gray-800"></div>
        {/* Typing Animation */}
        <p className="text-green-500 font-mono text-lg md:text-2xl leading-relaxed whitespace-pre-wrap">
          {displayText}
          <span className="blinking-cursor">|</span>
        </p>
      </motion.div>
    </div>
  );
};

export default About;
