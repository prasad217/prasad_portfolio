'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'E-Commerce Website',
    description:
      'A full-stack e-commerce platform that provides a seamless user experience for browsing, adding to cart, and purchasing products. It also features functionalities like user authentication, order tracking, and data management.',
    tags: ['React.js', 'Node.js', 'Express', 'MySQL'],
    link: 'https://github.com/prasad217/ecommerce_app.git',
  },
  {
    title: 'NLP Text Summarizer',
    description:
      'An AI-powered tool to summarize large amounts of text efficiently, supporting multiple methods for summarization. Built with Flask for backend processing and Google Colab for model training.',
    tags: ['Python', 'Flask', 'NLP', 'Google Colab'],
    link: 'https://github.com/prasad217/NLP-Based-Text-Summarizer-Web-Application.git',
  },
  {
    title: 'Movie Recommendations',
    description:
      'A recommendation system to suggest movies based on user preferences and viewing history, using cosine similarity and cosine distance for accuracy.',
    tags: ['Python', 'Machine Learning', 'Flask'],
    link: '#', // Replace with GitHub link if available
  },
  {
    title: 'Waste Management',
    description:
      'A React-based system for route optimization and bin placement, featuring SMS notifications and efficient waste collection powered by OpenRouteService.',
    tags: ['React.js', 'MySQL', 'OpenRouteService'],
    link: 'https://github.com/prasad217/waste-management.git',
  },
  {
    title: 'Typing Wizard',
    description:
      'A simple typing practice application built with HTML, CSS, and JavaScript to improve typing speed and accuracy.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/prasad217/TypeWizardry.git',
  },
  {
    title: 'Deployment Guide',
    description:
      'Step-by-step guides for deploying web applications on platforms like AWS, Vercel, and Kubernetes, using React.js.',
    tags: ['React.js', 'AWS', 'Kubernetes', 'Vercel'],
    link: 'https://github.com/prasad217/Deployment-Guide.git',
  },
];

const Projects = () => {
  return (
    <div id="projects" className="min-h-screen py-20 flex flex-col items-center">
      <motion.h2
        className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 animate-gradientText"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl px-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-8 bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 text-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">{project.title}</h3>
              <p className="text-lg mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 text-sm lg:text-base font-medium bg-gray-800 text-gray-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto px-6 py-3 text-lg bg-orange-500 hover:bg-yellow-500 text-white font-semibold rounded transition-colors duration-300 text-center"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
