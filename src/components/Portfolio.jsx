import React from 'react'

const Portfolio = () => {
  return (
    <div id="portfolio" className="w-full lg:h-screen bg-dark_2 flex justify-end">
      <div className="w-full lg:w-5/6 h-full flex flex-col">
        <div className="relative flex justify-center items-center lg:h-1/3 bg-clip-text p-20">
          <h3 className="text-white text-xl sm:text-4xl border-b-2 border-primary">
            My Work
          </h3>
          <p className="absolute inset-0 text-white text-[60px] sm:text-[100px] opacity-10 font-semibold flex items-center justify-center">
            PORTFOLIO
          </p>
        </div>
        <div className="flex justify-center h-2/3">
          <p className="text-white text-3xl p-20 text-opacity-70">In Progress ...</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;
