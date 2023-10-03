import React from 'react'


const Home = () => {
  return (
    <div id="home" className="w-full h-screen flex justify-end bg-computer bg-cover bg-no-repeat bg-fixed">
      <div className="w-full lg:w-5/6 h-full xl:h-screen space-y-10 bg-dark_2 bg-opacity-80 flex flex-col justify-center items-center">
        <div className="space-y-3">
          <span className="text-white">
            Hi, it's
          </span>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold font-heading">
            Atif Javaid
          </h1>
          <h3 className="text-primary text-xl sm:text-2xl lg:text-3xl font-semibold">
            Software Engineer
          </h3>
        </div>
        <div className="text-primary hover:text-white hover:bg-primary ring-2 ring-primary rounded-3xl animate-pulse">
          <button class="py-2 px-5 sm:py-3 sm:px-10">
            <a href="#portfolio" className="text-md">Let's Connect</a>
          </button>
        </div>
      </div>
    </div>

  )
}

export default Home;
