import React from 'react'
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="fixed z-10 lg:hidden w-full flex items-center h-20 bg-dark_1 border-b-2 border-dark_2 py-5 justify-between px-10">
      <div>
        <h2 className="text-primary font-semibold">Atif Javaid</h2>
      </div>
      <div className="flex text-white">
        <div className="flex text-xl justify-between space-x-3 md:space-x-5 pt-1">
          <a href="https://github.com/atifjavaid267" target="_blank"><FiGithub /></a>
          <a href="https://www.linkedin.com/in/atifjavaid267" target="_blank"><FiLinkedin /></a>
          <a href="https://instagram.com/ch.atifjavaid" target="_blank"><FiInstagram /></a>
          <a href="mailto:atifjavaid.dev@gmail.com"><FiMail /></a>
        </div>
        <div id="menu" className="text-white text-3xl pl-8"><FiMenu /></div>
      </div>
    </div>
  )
}

export default Navbar;


