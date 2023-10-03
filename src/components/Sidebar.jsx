import React from 'react'
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="fixed hidden w-1/6 lg:flex flex-col items-center h-screen bg-dark_1 border-r-4 border-dark_2 py-5 justify-between">
      <div className="flex flex-col justify-between items-center py-10 space-y-5">
        <img src="/assets/atif.jpeg" alt="Atif's Photo" className="lg:h-32 lg:w-32 xl:h-40 xl:w-40 ring-4 ring-dark_2 rounded-full" />
        <h2 className="text-primary text-xl font-bold font-mono">Atif Javaid</h2>
      </div>
      <div className="flex flex-col">
        <ul className="text-white text-xl space-y-4 pb-16">
          <li><a href="#home" className="active:text-primary">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="flex text-primary text-xl justify-between space-x-2 mb-10">
        <a href="https://github.com/atifjavaid267" target="_blank" className="p-2 rounded-full hover:text-white hover:bg-primary"><FiGithub /></a>
        <a href="https://www.linkedin.com/in/atifjavaid267" target="_blank" className="p-2 rounded-full hover:text-white hover:bg-primary"><FiLinkedin /></a>
        <a href="https://instagram.com/ch.atifjavaid" target="_blank" className="p-2 rounded-full hover:text-white hover:bg-primary"><FiInstagram /></a>
        <a href="mailto:atifjavaid.dev@gmail.com" className="p-2 rounded-full hover:text-white hover:bg-primary"><FiMail /></a>
      </div>
    </div>
  )
}

export default Sidebar;
