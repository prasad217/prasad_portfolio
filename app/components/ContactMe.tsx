'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 py-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center px-6 space-y-4">
        <motion.h2
          className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Find Me On
        </motion.h2>
        <p className="text-lg text-gray-300 text-center">
          Stay Connected.{' '}
          <span className="text-white font-semibold">Let's make things happen!</span>
        </p>
        <div className="flex space-x-6">
          {/* GitHub */}
          <motion.a
            href="https://github.com/prasad217"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-yellow-300 transition duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub />
          </motion.a>
          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/prasad-mani-84b9b5241/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-3xl hover:text-yellow-300 transition duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin />
          </motion.a>
          {/* Email */}
          <motion.a
            href="mailto:prasad.personal217@gmail.com"
            className="text-red-400 text-3xl hover:text-yellow-300 transition duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <FaEnvelope />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
