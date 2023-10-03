import React from 'react'

const About = () => {
  return (
    <div id="about" className="w-full lg:h-screen bg-dark_2 flex justify-end">
      <div className="w-full lg:w-5/6 h-full flex flex-col">
        <div className="relative flex justify-center items-center lg:h-1/3 bg-clip-text p-20">
          <h3 className="text-white text-xl sm:text-4xl border-b-2 border-primary">
            Know Me More
          </h3>
          <p className="absolute inset-0 text-white text-[60px] sm:text-[100px] opacity-10 font-semibold flex items-center justify-center">
            ABOUT ME
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:h-1/3">
          <div className="lg:w-2/3 flex flex-col space-y-5 px-10">
            <h2 className="text-2xl sm:text-4xl font-semibold text-white">I'm <span className="text-primary">Atif Javaid</span> - a Web Developer</h2>
            <p className="text-md sm:text-lg text-white text-opacity-60 text-justify">
              A versatile software engineer proficient in crafting seamless user experiences using React.js and Tailwind CSS, while also harnessing the power of Ruby on Rails to develop robust and scalable back-end solutions. With a passion for elegant code and a dedication to innovation, I thrive in creating dynamic web applications that bridge form and function effortlessly.
            </p>
          </div>
          <div className="lg:w-1/3 flex flex-col justify-around text-white text-opacity-60">
            <div className="flex flex-col space-y-3 p-10">
              <p><span className="font-semibold">Name: </span>Atif Javaid</p>
              <hr />
              <p><span className="font-semibold">Email: </span><a href="malto:atifjavaid.dev@gmail.com">atifjavaid.dev@gmail.com</a></p>
              <hr />
              <p><span className="font-semibold">Age: </span>24</p>
              <hr />
              <p><span className="font-semibold">From: </span>Lahore, Pakistan</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center lg:h-1/3 text-white text-opacity-60 p-10">
          <div class="lg:w-1/4 flex flex-col justify-center items-center p-10">
            <h2 className="text-5xl font-bold">1+</h2>
            <span>Years Experience</span>
          </div>
          <div class="h-px w-40 md:h-20 md:w-px bg-white bg-opacity-60"></div>
          <div class="lg:w-1/4 flex flex-col justify-center items-center p-10">
            <h2 className="text-5xl font-bold">3</h2>
            <span>Projects Done</span>
          </div>
          <div class="h-px w-40 md:h-20 md:w-px bg-white bg-opacity-60"></div>
          <div class="lg:w-1/4 flex flex-col justify-center items-center p-10">
            <h2 className="text-5xl font-bold">1</h2>
            <span>Working Companies</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
