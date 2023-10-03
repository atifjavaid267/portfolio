import React from 'react'
import { FiDownload } from "react-icons/fi";

const Resume = () => {
  return (
    <div id="resume" className="w-full bg-dark_3 flex justify-end">
      <div className="w-full lg:w-5/6 h-auto flex flex-col px-10">
        <div className="relative flex justify-center items-center lg:h-1/2 bg-clip-text p-20">
          <h3 className="text-white text-xl sm:text-4xl border-b-2 border-primary">
            Resume
          </h3>
          <p className="absolute inset-0 text-white text-[60px] sm:text-[100px] opacity-10 font-semibold flex items-center justify-center">
            SUMMARY
          </p>
        </div>
        <div className="flex flex-col lg:flex-row text-white lg:space-x-10">
          <div className="flex flex-col lg:w-1/2">
            <h3 className="text-xl font-medium pb-5">My Education</h3>
            <div className="h-auto sm:h-44 flex flex-col bg-dark_2 p-5 rounded-md mb-5 shadow-lg shadow-dark_1">
              <div className="flex">
                <h6 className="text-sm bg-primary px-2 rounded-md mb-2">2013 - 2015</h6>
              </div>
              <h4 className="text-lg">Matriculation</h4>
              <h5 className="text-sm text-primary mb-2">Government High School, Layyah</h5>
              <p className="text-sm text-white text-opacity-60">Studied FSc. Pre-Engineering</p>
            </div>
            <div className="h-auto sm:h-44 flex flex-col bg-dark_2 p-5 rounded-md mb-5 shadow-lg shadow-dark_1">
              <div className="flex">
                <h6 className="text-sm bg-primary px-2 rounded-md mb-2">2015 - 2017</h6>
              </div>
              <h4 className="text-lg">Intermediate</h4>
              <h5 className="text-sm text-primary mb-2">Government College, Layyah</h5>
              <p className="text-sm text-white text-opacity-60">Studied FSc. Pre-Engineering</p>
            </div>
            <div className="h-auto sm:h-44 flex flex-col bg-dark_2 p-5 rounded-md mb-5 shadow-lg shadow-dark_1">
              <div className="flex">
                <h6 className="text-sm bg-primary px-2 rounded-md mb-2">2018 - 2022</h6>
              </div>
              <h4 className="text-lg">BS Computer Science</h4>
              <h5 className="text-sm text-primary mb-2">University of the Punjab, Lahore</h5>
              <p className="text-sm text-white text-opacity-60">Graduated in Bachelors degree in Computer Science</p>
            </div>
          </div>
          <div className="flex flex-col lg:w-1/2">
            <h3 className="text-xl font-medium pb-5">My Experience</h3>
            <div className="h-auto sm:h-44 flex flex-col bg-dark_2 p-5 rounded-md mb-5 shadow-lg shadow-dark_1">
              <div className="flex">
                <h6 className="text-sm bg-primary px-2 rounded-md mb-2">2021 - 2023</h6>
              </div>
              <h4 className="text-lg">Freelancer</h4>
              <h5 className="text-sm text-primary mb-2">Fiverr</h5>
              <p className="text-sm text-white text-opacity-60">
                A Frontend Developer specializes in creating interactive and visually appealing web interfaces using HTML, CSS, and JavaScript.</p>
            </div>
            <div className="h-auto sm:h-44 flex flex-col bg-dark_2 p-5 rounded-md mb-5 shadow-lg shadow-dark_1">
              <div className="flex">
                <h6 className="text-sm bg-primary px-2 rounded-md mb-2">2023 - 2024</h6>
              </div>
              <h4 className="text-lg">Full Stack Engineer</h4>
              <h5 className="text-sm text-primary mb-2">TechieMinions, Lahore</h5>
              <p className="text-sm text-white text-opacity-60">Experienced Associate Software Engineer skilled in Ruby on Rails (ROR) for web app development and maintenance.</p>
            </div>
          </div>
        </div>
        <h3 className="text-xl text-white font-medium my-5">My Skills</h3>
        <div className="flex flex-col lg:flex-row text-white lg:space-x-10 mb-10">
          <div className="lg:w-1/2 flex flex-col">
            <div className="h-12">
              <div className="flex justify-between">
                <h5>HTML/CSS</h5>
                <h5>85%</h5>
              </div>
              <div className="flex h-2 bg-dark_2 rounded-md">
                <div className="w-[85%] bg-primary rounded-md"></div>
              </div>
            </div>
            <div className="h-12">
              <div className="flex justify-between">
                <h5>JavaScript</h5>
                <h5>75%</h5>
              </div>
              <div className="flex h-2 bg-dark_2 rounded-md">
                <div className="w-[75%] bg-primary rounded-md"></div>
              </div>
            </div>
            <div className="h-12">
              <div className="flex justify-between">
                <h5>BootStrap</h5>
                <h5>80%</h5>
              </div>
              <div className="flex h-2 bg-dark_2 rounded-md">
                <div className="w-[80%] bg-primary rounded-md"></div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col">
            <div className="h-12">
              <div className="flex justify-between">
                <h5>Ruby on Rails (ROR)</h5>
                <h5>85%</h5>
              </div>
              <div className="flex h-2 bg-dark_2 rounded-md">
                <div className="w-[85%] bg-primary rounded-md"></div>
              </div>
            </div>
            <div className="h-12">
              <div className="flex justify-between">
                <h5>React JS</h5>
                <h5>75%</h5>
              </div>
              <div className="flex h-2 bg-dark_2 rounded-md">
                <div className="w-[75%] bg-primary rounded-md"></div>
              </div>
            </div>
            <div className="h-12">
              <div className="flex justify-between">
                <h5>Web Design</h5>
                <h5>90%</h5>
              </div>
              <div className="flex h-2 bg-dark_2 rounded-md">
                <div className="w-[90%] bg-primary rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-10">
          <button className="flex hover:bg-white hover:bg-opacity-20 border-2 border-white border-opacity-60 px-10 hover:px-12 py-2 rounded-3xl text-white text-opacity-60 hover:text-opacity-95">
            Download CV <span className="pl-2 pt-1"><FiDownload /></span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Resume;
