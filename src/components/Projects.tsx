import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const webProjects = [
  {
    id: 1,
    title: "RentKart",
    description: "RentKart is a web platform where users can search for rental rooms in various cities. It simplifies the process of finding accommodation from anywhere, at any time.",
    live: "https://roomrenter.onrender.com/",
    code: "https://github.com/brijesh2004/roomrenderfrontend",
  },
  {
    id: 2,
    title: "Foodify",
    description: "Foodify acts as a digital menu for restaurants, allowing customers to browse, select, and order food from within the restaurant premises.",
    live: "https://restoclient.onrender.com/",
    code: "https://github.com/brijesh2004/ResoManagemnetclient",
  },
  {
    id: 3,
    title: "College Space",
    description: "College Space allows students to upload and download semester exam papers and notes. It serves as a collaborative platform for academic resources. Built with Next.js.",
    live: "https://mmmutmedia.netlify.app/",
    code: "https://github.com/brijesh2004/next-js-app",
  },
  {
    id: 4,
    title: "Task Management",
    description: "A full-featured task management app where users can add, update, delete, and change the status of tasks based on their progress or completion.",
    live: "https://task-management-system-6ar7.onrender.com/",
    code: "https://github.com/brijesh2004/TaskManagementclient",
  },
  {
    id: 5,
    title: "Series and Movies",
    description: "This app allows users to discover and review movies and TV series using external APIs to fetch real-time data and reviews.",
    live: "https://nextjs-website-brijesh2004.vercel.app",
    code: "https://github.com/brijesh2004/NextjsWebsite",
  },
  {
    id: 6,
    title: "Weather App",
    description: "A weather forecasting app that displays the current weather for your city or any other location using live weather APIs.",
    live: "https://weatherapp-new.onrender.com/",
    code: "https://github.com/brijesh2004/WeatherappBackend",
  },
  {
    id: 7,
    title: "Techi Support",
    description: "An educational website offering project ideas, concept videos, and tutorials — all in one place to help learners grow their skills.",
    live: "https://techi-support.onrender.com/",
    code: "https://github.com/brijesh2004/Techisupport1",
  },
  {
    id: 8,
    title: "Dist Todo App",
    description: "A decentralized ToDo app built using blockchain technology. It features React for the frontend, Solidity for smart contracts, Hardhat for testing, and Ether.js for blockchain interaction.",
    live: "https://d-todoapp.netlify.app",
    code: "https://github.com/brijesh2004/todoappblockchain",
  }
];


const mobileProjects = [
  {
    id: 12,
    title: "Setup Day",
    description: "Setup Day is a mobile productivity app to manage, plan, and track your daily setup tasks with intuitive reminders and progress tracking.",
    live: "https://github.com/brijesh2004",
    code: "https://github.com/brijesh2004",
  },
  {
    id: 9,
    title: "Tha Wall Hub",
    description: "Tha Wall Hub is a React Native app designed for discovering, managing, and sharing digital wall art collections with ease.",
    live: "https://github.com/brijesh2004/TheWallpaperApp",
    code: "https://github.com/brijesh2004/TheWallpaperApp",
  },
  {
    id: 10,
    title: "Foodify",
    description: "The mobile version of Foodify, this app serves as an interactive digital menu that allows customers to place orders directly within a restaurant.",
    live: "https://github.com/brijesh2004/RestoMobileApp",
    code: "https://github.com/brijesh2004/RestoMobileApp",
  },
  {
    id: 11,
    title: "GitHub Repos Finder",
    description: "A React Native app that lets users search and explore GitHub repositories. It fetches real-time data and displays key repository insights.",
    live: "https://github.com/brijesh2004/GithubRepoSearch",
    code: "https://github.com/brijesh2004/GithubRepoSearch",
  },
];


export default function Projects() {
  const [activeTab, setActiveTab] = useState('web');
  const projects = activeTab === 'web' ? webProjects : mobileProjects;

  return (
    <div className="mb-28 md:ml-28 md:mb-0 px-6 py-12">
      <h1 className="text-4xl font-bold text-red-500 mb-8">Projects</h1>

      {/* Tabs */}
      <div className="flex gap-6 mb-6">
        {['web', 'mobile'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-4 py-2 text-lg font-medium transition ${activeTab === tab
                ? 'text-red-600 font-semibold'
                : 'text-gray-600 hover:text-red-400'
              }`}
          >
            {tab === 'web' ? 'Web Applications' : 'Mobile Applications'}
            {activeTab === tab && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 bottom-0 h-[2px] w-full bg-red-500"
              />
            )}
          </button>
        ))}
      </div>

      {/* Projects List */}
      <motion.ul layout className="space-y-6">
        <AnimatePresence>
          {projects.map((project) => (
            <motion.li
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white shadow-md rounded-xl p-6 border-l-4 border-red-500"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600 transition"
                >
                  <FaExternalLinkAlt /> Live
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-50 transition"
                >
                  <FaCode /> Code
                </a>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}
