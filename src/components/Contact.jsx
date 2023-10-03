import React from 'react'
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";


const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen bg-dark_3 flex justify-end">
      <div className="w-full lg:w-5/6 h-full flex flex-col">
        <div className="relative flex justify-center items-center lg:h-1/3 bg-clip-text p-20">
          <h3 className="text-white text-xl sm:text-4xl border-b-2 border-primary">
            Get in Touch
          </h3>
          <p className="absolute inset-0 text-white text-[60px] sm:text-[100px] opacity-10 font-semibold flex items-center justify-center">
            CONTACT
          </p>
        </div>
        <div className="flex flex-col lg:flex-row h-2/3 p-10">
          <div className="flex flex-col text-white">
            <div className="mb-5">
              <h3 className="text-xl font-medium text-primary pb-5">Address</h3>
              <p>Gulberg-III Lahore, Pakistan</p>
            </div>
            <div className="flex">
              <span className="pt-1 pr-2 text-primary"><FiPhone /></span>
              <p><a href="tel:+923457626267">+92 345 7626267</a></p>
            </div>
            <div className="flex">
              <span className="pt-1 pr-2 text-primary"><FiMail /></span>
              <p><a href="mailto:atifjavaid.dev@gmail.com">atifjavaid.dev@gmail.com</a></p>
            </div>
            <div className="mb-5">
              <h3 className="text-xl font-medium pb-5 text-primary mt-10">Follow Me</h3>
              <div className="flex text-white text-xl space-x-5">
                <a href="https://github.com/atifjavaid267" target="_blank"><FiGithub /></a>
                <a href="https://www.linkedin.com/in/atifjavaid267" target="_blank"><FiLinkedin /></a>
                <a href="https://instagram.com/ch.atifjavaid" target="_blank"><FiInstagram /></a>
                <a href="mailto:atifjavaid.dev@gmail.com"><FiMail /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
