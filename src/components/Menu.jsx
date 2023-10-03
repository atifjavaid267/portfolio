import React from 'react'
import { FiX } from "react-icons/fi";

const Menu = () => {
  return (
    <div id="portfolio" className="flex flex-col w-60 h-screen bg-dark_1 text-primary">
      <div className="h-10 flex items-center justify-end">
        <div id="menu" className="text-white text-3xl pl-8"><FiMenu /></div>
      </div>
      <div className="h-10 flex items-center">
        <a href="#home">Home</a>
      </div>
      <div className="h-10 flex items-center">
        <a href="#about">About</a>
      </div>
      <div className="h-10 flex items-center">
        <a href="#resume">Resume</a>
      </div>
      <div className="h-10 flex items-center">
        <a href="#portfolio">Portfolio</a>
      </div>
      <div className="h-10 flex items-center">
        <a href="#contact">Contact</a>
      </div>
    </div>
  )
}

export default Menu;
