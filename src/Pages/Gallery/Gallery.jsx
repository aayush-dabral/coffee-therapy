import React, { useState } from 'react'
import images from "./imageList"

const Gallery = () => {
  const categories = Object.keys(images);
  const [selectedCategory, setSelectedCategory] = useState("all");
  return (
    <div className='font-poppins text-white'>
      <div 
        className="bg-cover bg-center" 
        // style={{ backgroundImage: `url(${aeropressBg})` }}
      >
        <div className="flex justify-between items-start w-[90%] sm:w-[70%] mx-auto mt-12 ">
          <div className="w-full  text-white py-8">
            <div className="sm:w-[48%] font-anton text-[45.83px] text-center sm:text-left">
              A GLIMPSE INSIDE OUR<br/>
              COFFEE OASIS
            </div>
            {/* <div className="w-[9%] h-[2px] bg-white -mt-1" /> */}
            <div className="sm:w-[48%] flex gap-4 mt-8">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`w-32 py-1 ${
                  selectedCategory === "all"
                    ? "bg-white text-black font-semibold"
                    : "bg-transparent text-white border-2 border-white"
                }`}
              >
                All Photos
              </button>
              <button
                onClick={() => setSelectedCategory("ambience")}
                className={`w-32 py-1 ${
                  selectedCategory === "ambience"
                    ? "bg-white text-black font-semibold"
                    : "bg-transparent text-white border-2 border-white"
                }`}
              >
                Ambience
              </button>
              <button
                onClick={() => setSelectedCategory("menu")}
                className={`w-32 py-1 ${
                  selectedCategory === "menu"
                    ? "bg-white text-black font-semibold"
                    : "bg-transparent text-white border-2 border-white"
                }`}
              >
                Menu
              </button>
            </div>
            <div className="w-[88%  text-[16.5px] text-justify flex flex-col justify-between gap-4 sm:gap-8 w-full font-poppins font-light mt-8 ">
              {selectedCategory === "all" ? (
                <>
                    {/* <img src='' />      */}
                  <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-8 sm:h-[340px]'>
                    <img src={images?.[selectedCategory][0].src} className='sm:w-[55%]'/>
                    <img src={images?.[selectedCategory][1].src} className='sm:w-[45%]'/>
                  </div>
                  <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-8 sm:h-[340px]'>
                    <img src={images?.[selectedCategory][2].src} className='sm:w-[45%]'/>
                    <img src={images?.[selectedCategory][3].src} className='sm:w-[55%]'/>
                  </div>
                  <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-8 sm:h-[340px]'>
                    <img src={images?.[selectedCategory][4].src} className='sm:w-[55%]'/>
                    <img src={images?.[selectedCategory][5].src} className='sm:w-[45%]'/>
                  </div>
                  <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-8 sm:h-[340px]'>
                    <img src={images?.[selectedCategory][6].src} className='sm:w-[45%]'/>
                    <img src={images?.[selectedCategory][7].src} className='sm:w-[55%]'/>
                  </div>
                </>
              ) : selectedCategory === "ambience" ? (
                <>
                  <div className='flex flex-col sm:flex-row justify-between  gap-4 sm:gap-8 sm:h-[340px]'>
                    <img src={images?.[selectedCategory][0].src} className='sm:w-[55%]'/>
                    <img src={images?.[selectedCategory][1].src} className='sm:w-[45%]'/>
                  </div>
                  <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-8 sm:h-[340px]'>
                    <img src={images?.[selectedCategory][2].src} className='sm:w-[45%]'/>
                    <img src={images?.[selectedCategory][3].src} className='sm:w-[55%]'/>
                  </div>
                </>
              ) : (
                <>
                  <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-8 sm:h-[340px]'>
                    <img src={images?.[selectedCategory][0].src} className='sm:w-[55%]'/>
                    <img src={images?.[selectedCategory][1].src} className='sm:w-[45%]'/>
                  </div>
                  <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-8 sm:h-[340px]'>
                    <img src={images?.[selectedCategory][2].src} className='sm:w-[45%]'/>
                    <img src={images?.[selectedCategory][3].src} className='sm:w-[55%]'/>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
