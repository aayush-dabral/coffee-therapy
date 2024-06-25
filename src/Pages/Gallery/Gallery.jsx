import React, { useEffect, useState } from 'react'
import gsap from "gsap"
import { useGSAP } from "@gsap/react";
import scrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(scrollTrigger)

import img1 from '../../assets/images/gallery/ambience/img1.webp'
import img2 from '../../assets/images/gallery/ambience/img2.webp'
import img3 from '../../assets/images/gallery/ambience/img3.webp'
import img4 from '../../assets/images/gallery/ambience/img4.webp'
import img5 from '../../assets/images/gallery/menu/img5.webp'
import img6 from '../../assets/images/gallery/menu/img6.webp'
import img7 from '../../assets/images/gallery/menu/img7.png'
import img8 from '../../assets/images/gallery/menu/img8.png'

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  useGSAP(() =>{
    gsap.from(".main-screen", {
      scrollTrigger: ".main-screen",
      ease: true,
      opacity: 0,
      delay: 0,
      duration: 1
    })
    gsap.from(".homeText1", {
      scrollTrigger: ".homeText1",
      y: 50,
      ease: "circ",
      opacity: 0,
      delay: 0.4
    })

    gsap.from(".cat1", {
      scrollTrigger: {
        trigger: ".aero1",
        start: "top 75%",
      },
      y: 30,
      opacity: 0,
      stagger: 0.05 ,
      delay: 0.6,
      duration: 0.2
    })
    gsap.from(".cat2", {
      scrollTrigger: {
        trigger: ".aero1",
        start: "top 75%",
      },
      y: 30,
      opacity: 0,
      stagger: 0.05 ,
      delay: 0.8,
      duration: 0.2
    })
    gsap.from(".cat3", {
      scrollTrigger: {
        trigger: ".aero1",
        start: "top 75%",
      },
      y: 30,
      opacity: 0,
      stagger: 0.05 ,
      delay: 1,
      duration: 0.2
    })

    gsap.from(".img1", {
      scrollTrigger: ".img1",
      x: -50,
      ease: "circ",
      opacity: 0,
      delay: 1
    })
    gsap.from(".img2", {
      scrollTrigger: ".img2",
      x: 50,
      ease: "circ",
      opacity: 0,
      delay: 1
    })

    gsap.from(".img3", {
      scrollTrigger: ".img3",
      x: -50,
      ease: "circ",
      opacity: 0,
      delay: 1
    })
    gsap.from(".img4", {
      scrollTrigger: ".img4",
      x: 50,
      ease: "circ",
      opacity: 0,
      delay: 0.3
    })

    gsap.from(".img5", {
      scrollTrigger: ".img5",
      x: -50,
      ease: "circ",
      opacity: 0,
      delay: 0.2
    })
    gsap.from(".img6", {
      scrollTrigger: ".img6",
      x: 50,
      ease: "circ",
      opacity: 0,
      delay: 0.2
    })

    gsap.from(".img7", {
      scrollTrigger: ".img7",
      x: -50,
      ease: "circ",
      opacity: 0,
      delay: 0.2
    })
    gsap.from(".img8", {
      scrollTrigger: ".img8",
      x: 50,
      ease: "circ",
      opacity: 0,
      delay: 0.2
    })
  })
  return (
    <div className='font-poppins text-white'>
      <div 
        className="main-screen bg-cover bg-center" 
        // style={{ backgroundImage: `url(${aeropressBg})` }}
      >
        <div className="flex justify-between items-start w-[90%] sm:w-[70%] mx-auto mt-12 ">
          <div className="w-full  text-white py-8">
            <div className="homeText1 sm:w-[48%] font-anton text-[45.83px] text-center sm:text-left">
              A GLIMPSE INSIDE OUR<br/>
              COFFEE OASIS
            </div>
            {/* <div className="w-[9%] h-[2px] bg-white -mt-1" /> */}
            <div className="sm:w-[48%] flex gap-4 mt-8">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`cat1 w-32 py-1 ${
                  selectedCategory === "all"
                    ? "bg-white text-black font-semibold"
                    : "bg-transparent text-white border-2 border-white"
                }`}
              >
                All Photos
              </button>
              <button
                onClick={() => setSelectedCategory("ambience")}
                className={`cat2 w-32 py-1 ${
                  selectedCategory === "ambience"
                    ? "bg-white text-black font-semibold"
                    : "bg-transparent text-white border-2 border-white"
                }`}
              >
                Ambience
              </button>
              <button
                onClick={() => setSelectedCategory("menu")}
                className={`cat3 w-32 py-1 ${
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
                  <div className=' flex flex-col sm:flex-row justify-between gap-4 sm:gap-8 sm:h- [340px]'>
                    <img src={img1} className='img1 sm:w-[33%]'/>
                    <img src={img2} className='img2 sm:w-[33%]'/>
                    <img src={img3} className='img3 sm:w-[33%]'/>
                  </div>
                  <div className='img1 flex flex-col sm:flex-row justify-between gap-4 sm:gap-8 sm:h- [340px]'>
                    <img src={img4} className='img4 sm:w-[50%]'/>
                    <img src={img5} className='img5 sm:w-[50%]'/>
                  </div>
                  <div className='img1 flex flex-col sm:flex-row justify-between gap-4 sm:gap-8 sm:h- [340px]'>
                    <img src={img6} className='img6 sm:w-[33%]'/>
                    <img src={img7} className='img7 sm:w-[33%]'/>
                    <img src={img8} className='img8 sm:w-[33%]'/>
                  </div>
                  <div className='img1 flex flex-col sm:flex-row justify-between gap-4 sm:gap-8 sm:h- [340px]'>
                  </div>
                </>
              ) : selectedCategory === "ambience" ? (
                <>
                  <div className='flex flex-col sm:flex-row justify-between  gap-4 sm:gap-8 sm:h- [340px]'>
                    <img src={img1} className='img1 sm:w-[33%]'/>
                    <img src={img2} className='img2 sm:w-[33%]'/>
                    <img src={img3} className='img3 sm:w-[33%]'/>
                  </div>
                  <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-8 sm:h- [340px]'>
                    <img src={img3} className='img3 sm:w-[50%]'/>
                    <img src={img4} className='img4 sm:w-[50%]'/>
                  </div>
                </>
              ) : (
                <>
                  <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-8 sm:h- [340px]'>
                    <img src={img5} className='img1 sm:w-[33%]'/>
                    <img src={img6} className='img2 sm:w-[33%]'/>
                    <img src={img8} className='img4 sm:w-[33%]'/>
                  </div>
                  <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-8 sm:h- [340px]'>
                    <img src={img7} className='img3 sm:w-[50%]'/>
                    <img src={img8} className='img4 sm:w-[50%]'/>
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
