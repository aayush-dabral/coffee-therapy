import React, { useEffect, useState } from 'react'
import gsap from "gsap"
import { useGSAP } from "@gsap/react";
import scrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(scrollTrigger)

import ambience1 from '../../assets/images/gallery/ambience/img1.jpg'
import ambience2 from '../../assets/images/gallery/ambience/img2.jpg'
import ambience3 from '../../assets/images/gallery/ambience/img3.jpg'
import ambience4 from '../../assets/images/gallery/ambience/img4.jpg'
import ambience5 from '../../assets/images/gallery/ambience/img5.jpg'
import ambience6 from '../../assets/images/gallery/ambience/img6.jpg'
import ambience7 from '../../assets/images/gallery/ambience/img7.jpg'
import ambience8 from '../../assets/images/gallery/ambience/img8.jpg'
import menu1 from '../../assets/images/gallery/menu/img1.webp'
import menu2 from '../../assets/images/gallery/menu/img2.jpg'
import menu3 from '../../assets/images/gallery/menu/img3.jpg'
import menu4 from '../../assets/images/gallery/menu/img4.webp'
import menu5 from '../../assets/images/gallery/menu/img5.jpg'
import menu6 from '../../assets/images/gallery/menu/img6.webp'
import menu7 from '../../assets/images/gallery/menu/img7.jpg'
import menu8 from '../../assets/images/gallery/menu/img8.jpg'
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
    
    gsap.from(".img9", {
      scrollTrigger: ".img9",
      x: 50,
      ease: "circ",
      opacity: 0,
      delay: 0.3
    })

    gsap.from(".img10", {
      scrollTrigger: ".img10",
      x: -50,
      ease: "circ",
      opacity: 0,
      delay: 0.2
    })
    gsap.from(".img11", {
      scrollTrigger: ".img11",
      x: 50,
      ease: "circ",
      opacity: 0,
      delay: 0.2
    })

    gsap.from(".img12", {
      scrollTrigger: ".img12",
      x: -50,
      ease: "circ",
      opacity: 0,
      delay: 0.2
    })
    gsap.from(".img13", {
      scrollTrigger: ".img13",
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
                    <div className='img1 sm:w-[33%] overflow-hidden'>
                      <img src={ambience1} className=' w-full h-full object-cover'/>
                    </div>
                    <div className='img2 sm:w-[33%] overflow-hidden'>
                      <img src={ambience3} className=' w-full h-full object-cover'/>
                    </div>
                    <div className='img3 sm:w-[33%] overflow-hidden'>
                      <img src={ambience2} className=' w-full h-full object-cover'/>
                    </div>
                  </div>
                  <div className='img1 flex flex-col sm:flex-row justify-between gap-4 sm:gap-8 sm:h- [340px]'>
                    <div className='img4 sm:w-[50%] overflow-hidden'>
                      <img src={menu1} className=' w-full h-full object-cover'/>
                    </div>
                    <div className='img5 sm:w-[50%] overflow-hidden'>
                      <img src={menu2} className=' w-full h-full object-cover'/>
                    </div>
                  </div>
                  <div className='img1 flex flex-col sm:flex-row justify-between gap-4 sm:gap-8 sm:h- [340px]'>
                    <div className='img6 sm:w-[33%] overflow-hidden'>
                      <img src={menu3} className=' w-full h-full object-cover'/>
                    </div>
                    <div className='img7 sm:w-[33%] overflow-hidden'>
                      <img src={menu4} className=' w-full h-full object-cover'/>
                    </div>
                    <div className='img8 sm:w-[33%] overflow-hidden'>
                      <img src={menu5} className=' w-full h-full object-cover'/>
                    </div>
                  </div>
                  <div className='img9 flex flex-col sm:flex-row justify-between gap-4 sm:gap-8 sm:h- [340px]'>
                    <div className='img1 sm:w-[50%] overflow-hidden'>
                      <img src={ambience4} className=' w-full h-full object-cover'/>
                    </div>
                    <div className='img10 sm:w-[50%] overflow-hidden'>
                      <img src={ambience5} className=' w-full h-full object-cover'/>
                    </div>
                  </div>
                  <div className='img11 flex flex-col sm:flex-row justify-between gap-4 sm:gap-8 sm:h- [340px]'>
                    <div className='img3 sm:w-[33%] overflow-hidden'>
                      <img src={menu6} className=' w-full h-full object-cover'/>
                    </div>
                    <div className='img12 sm:w-[33%] overflow-hidden'>
                      <img src={menu7} className=' w-full h-full object-cover'/>
                    </div>
                    <div className='img13 sm:w-[33%] overflow-hidden'>
                      <img src={ambience8} className=' w-full h-full object-cover'/>
                    </div>
                  </div>
                </>
              ) : selectedCategory === "ambience" ? (
                <>
                  <div className='flex flex-col sm:flex-row justify-between  gap-4 sm:gap-8 sm:h- [340px]'>
                    <div className='img1 sm:w-[33%] overflow-hidden'>
                      <img src={ambience7} className=' w-full h-full object-cover'/>
                    </div>
                    <div className='img2 sm:w-[33%] overflow-hidden'>
                      <img src={ambience3} className=' w-full h-full object-cover'/>
                    </div>
                    <div className='img3 sm:w-[33%] overflow-hidden'>
                      <img src={ambience6} className=' w-full h-full object-cover'/>
                    </div>
                  </div>
                  <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-8 sm:h- [340px]'>
                    <div className='img4 sm:w-[50%] overflow-hidden'>
                      <img src={ambience2} className=' w-full h-full object-cover'/>
                    </div>
                    <div className='img5 sm:w-[50%] overflow-hidden'>
                      <img src={ambience1} className=' w-full h-full object-cover'/>
                    </div>
                  </div>
                  <div className='flex flex-col sm:flex-row justify-between  gap-4 sm:gap-8 sm:h- [340px]'>
                    <div className='img6 sm:w-[33%] overflow-hidden'>
                      <img src={ambience8} className=' w-full h-full object-cover'/>
                    </div>
                    <div className='img7 sm:w-[33%] overflow-hidden'>
                      <img src={ambience4} className=' w-full h-full object-cover'/>
                    </div>
                    <div className='img8 sm:w-[33%] overflow-hidden'>
                      <img src={ambience5} className=' w-full h-full object-cover'/>
                    </div>
                  </div>
                </>
              ) : (
                <>                  
                  <div className='flex flex-col sm:flex-row justify-between  gap-4 sm:gap-8 sm:h- [340px]'>
                    <div className='img1 sm:w-[33%] overflow-hidden'>
                      <img src={menu4} className=' w-full h-full object-cover'/>
                    </div>
                    <div className='img2 sm:w-[33%] overflow-hidden'>
                      <img src={menu3} className=' w-full h-full object-cover'/>
                    </div>
                    <div className='img3 sm:w-[33%] overflow-hidden'>
                      <img src={menu1} className=' w-full h-full object-cover'/>
                    </div>
                  </div>
                  <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-8 sm:h- [340px]'>
                    <div className='img4 sm:w-[50%] overflow-hidden'>
                      <img src={menu5} className=' w-full h-full object-cover'/>
                    </div>
                    <div className='img5 sm:w-[50%] overflow-hidden'>
                      <img src={menu2} className=' w-full h-full object-cover'/>
                    </div>
                  </div>
                  <div className='flex flex-col sm:flex-row justify-between  gap-4 sm:gap-8 sm:h- [340px]'>
                    <div className='img6 sm:w-[33%] overflow-hidden'>
                      <img src={menu7} className=' w-full h-full object-cover'/>
                    </div>
                    <div className='img7 sm:w-[33%] overflow-hidden'>
                      <img src={menu6} className=' w-full h-full object-cover'/>
                    </div>
                    <div className='img8 sm:w-[33%] overflow-hidden'>
                      <img src={menu8} className=' w-full h-full object-cover'/>
                    </div>
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
