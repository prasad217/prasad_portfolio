'use client';

import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaAws, FaDocker } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiMysql, SiKubernetes, SiPython, SiCplusplus } from 'react-icons/si';

const skillCategories = [
  {
    title: 'Web Development',
    skills: [
      { name: 'HTML', icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
      { name: 'CSS', icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-500 text-3xl" /> },
      { name: 'React.js', icon: <FaReact className="text-blue-400 text-3xl" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-gray-500 text-3xl" /> },
      { name: 'Node.js', icon: <FaNode className="text-green-500 text-3xl" /> },
    ],
  },
  {
    title: 'Programming & Databases',
    skills: [
      { name: 'Python', icon: <SiPython className="text-blue-300 text-3xl" /> },
      { name: 'C++', icon: <SiCplusplus className="text-purple-500 text-3xl" /> },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-500 text-3xl" /> },
      { name: 'MySQL', icon: <SiMysql className="text-blue-600 text-3xl" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-400 text-3xl" /> },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', icon: <FaAws className="text-orange-400 text-3xl" /> },
      { name: 'Docker', icon: <FaDocker className="text-blue-400 text-3xl" /> },
      { name: 'Kubernetes', icon: <SiKubernetes className="text-blue-500 text-3xl" /> },
    ],
  },
];

const Skills = () => {
  return (
    <div id="skills" className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <motion.h2
        className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 animate-gradientText"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Skills
      </motion.h2>
      <div className="w-full max-w-6xl space-y-12">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">{category.title}</h3>
            <div className="flex flex-wrap gap-6">
              {category.skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center justify-center bg-gray-900 p-4 rounded-lg shadow-md hover:scale-105 transition transform duration-300 hover:bg-gray-700"
                  whileHover={{ scale: 1.1 }}
                >
                  {skill.icon}
                  <p className="text-white mt-2">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
