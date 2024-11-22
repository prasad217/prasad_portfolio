'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

export default function Home() {
  const words = ['Student', 'Developer', 'Designer'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSwapped, setIsSwapped] = useState(false);

  // Typing animation logic
  useEffect(() => {
    let typingTimeout;

    if (isDeleting) {
      typingTimeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
      }, 50);
    } else {
      typingTimeout = setTimeout(() => {
        setDisplayText((prev) =>
          words[currentWordIndex].slice(0, prev.length + 1)
        );
      }, 100);
    }

    if (!isDeleting && displayText === words[currentWordIndex]) {
      setTimeout(() => setIsDeleting(true), 800);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }

    return () => clearTimeout(typingTimeout);
  }, [displayText, isDeleting, currentWordIndex, words]);

  // Color swapping logic for "I am"
  useEffect(() => {
    const colorSwapInterval = setInterval(() => {
      setIsSwapped((prev) => !prev);
    }, 4000);
    return () => clearInterval(colorSwapInterval);
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 animate-gradientMove">
      {/* Home Section */}
      <div
        id="home"
        className="h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-10"
      >
        <motion.div
          className="text-center md:text-left md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-4xl font-bold text-gray-200 mb-4">Hello,</p>
          <h1 className="text-5xl md:text-8xl font-extrabold mb-6">
            <span className={isSwapped ? 'text-orange-500' : 'text-white'}>I am</span>{' '}
            <span className={isSwapped ? 'text-white' : 'text-orange-500'}>
              Prasada Mekala
            </span>
          </h1>
          <div
            className="text-4xl md:text-5xl font-bold mt-4 bg-clip-text text-transparent animate-gradientText"
            style={{
              backgroundImage:
                'linear-gradient(270deg, #FF5733, #FFC300, #DAF7A6, #FF33A6, #FF8C00)',
              backgroundSize: '400% 400%',
            }}
          >
            {displayText}
            <span className="blinking-cursor">|</span>
          </div>
          <div className="mt-6">
            <a
              href="/documents/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 text-lg font-medium text-white bg-orange-500 rounded-lg hover:bg-pink-500 transition duration-300"
            >
              View Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative mt-8 md:mt-0 md:w-1/2 flex items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="w-60 md:w-[500px] h-auto">
            <Image
              src="/images/profile.png"
              alt="Prasada Mekala"
              width={500}
              height={500}
              className="rounded-lg object-cover shadow-xl"
            />
          </div>
        </motion.div>
      </div>

      {/* About Section */}
      <div
        id="about"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <About />
      </div>

      {/* Skills Section */}
      <div
        id="skills"
        className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
        style={{
          marginBottom: '4rem', // Added margin at the bottom for spacing
        }}
      >
        <Skills />
      </div>

      {/* Projects Section */}
      <div
        id="projects"
        className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
        style={{
          marginTop: '4rem', // Added margin at the top for spacing
        }}
      >
        <Projects />
      </div>
    </div>
  );
}
