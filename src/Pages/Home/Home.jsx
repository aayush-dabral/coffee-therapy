import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import scrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(scrollTrigger);

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

import homeBg from "../../assets/images/backgrounds/homeBg.jpg";
import logo from "../../assets/images/ctLogo.png";
import ourStory from "../../assets/images/home/ourStory.png";
import bestsellersCover from "../../assets/images/home/bestsellersCover.webp";
import best1 from "../../assets/images/home/best1.webp";
import best2 from "../../assets/images/home/best2.webp";
import communityBg from "../../assets/images/home/communityBg.png";
import quote from "../../assets/images/home/quote.png";
import rev1 from "../../assets/images/home/rev1.jpg";
import rev2 from "../../assets/images/home/rev2.jpg";
import rev3 from "../../assets/images/home/rev3.jpg";
import dummy1 from "../../assets/images/home/dummy1.jpeg";
import dummy2 from "../../assets/images/home/dummy2.jpeg";
import dummy3 from "../../assets/images/home/dummy3.jpeg";
import dummy4 from "../../assets/images/home/dummy4.jpeg";
import contactBg from "../../assets/images/home/contactBg.png";
import brew1 from "../../assets/images/home/brew1.webp";
import brew2 from "../../assets/images/home/brew2.webp";
import brew3 from "../../assets/images/home/brew3.webp";
import brewBg from "../../assets/images/home/brewBg.png";

import icon2 from "../../assets/images/community/icon1.png";
import icon1 from "../../assets/images/community/icon2.png";
import icon3 from "../../assets/images/community/icon3.png";

import instagram from "../../assets/images/icons/instagram.png";

import "./style.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [toolHead, setToolHead] = useState("CLASSIC COLD BREW")
  const [toolDescription, setToolDescription] = useState("Smooth, bold, and refreshingly chilled, our cold brew is a harmonious blend of rich flavors brewed for 18 hours to perfection.")
  const scrollRef = useRef(null)

  const executeScroll = () => {
    const element = scrollRef.current;
    const offset = 50; // Adjust this value to scroll above the element
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;
  
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "100px",
    // autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 2000,
  };

  const homeText1 = useRef(null);

  const changeTooltip = (item) => {
    switch(item){
      case "classic":
        setToolHead("CLASSIC COLD BREW")
        setToolDescription("Smooth, bold, and refreshingly chilled, our cold brew is a harmonious blend of rich flavors brewed for 18 hours to perfection.")
        break;
      case "cappuccino":
        setToolHead("CAPPUCCINO")
        setToolDescription("A velvety blend of espresso, steamed milk, and frothy foam, creating a perfect harmony of bold flavor and creamy texture.")
        break;
      case "latte":
        setToolHead("CAFE LATTE")
        setToolDescription("A creamy and smooth espresso-based beverage, perfectly balanced with steamed milk, delivering a rich aroma and a satisfying caffeine kick.")
        break;
    }
  }

  useGSAP(() => {
    gsap.from(".main-screen", {
      scrollTrigger: ".main-screen",
      ease: true,
      opacity: 0,
      delay: 0,
      duration: 1,
    });
    gsap.from(".homeText", {
      scrollTrigger: ".homeText",
      y: 50,
      ease: "circ",
      opacity: 0,
      delay: 0.4,
    });
    gsap.from(homeText1.current, {
      scrollTrigger: ".homeText",
      y: 50,
      ease: "circ",
      opacity: 0,
      delay: 0.7,
    });
    gsap.from(".exploreButton", {
      y: 30,
      autoAlpha: 0,
      delay: 1,
      duration: 0.5,
    });

    gsap.from(".storyHeading", {
      scrollTrigger: {
        trigger: ".storyHeading",
        start: "top 75%",
      },
      ease: true,
      y: 50,
      opacity: 0,
      delay: 0,
      duration: 0.6,
    });
    gsap.from(".storyLine", {
      scrollTrigger: {
        trigger: ".storyLine",
        start: "top 75%",
      },
      ease: true,
      width: 0,
      opacity: 0,
      delay: 0,
      duration: 0.6,
    });
    gsap.from(".storyText", {
      scrollTrigger: {
        trigger: ".storyText",
        start: "top 75%",
      },
      y: 50,
      ease: "circ",
      opacity: 0,
      delay: 0.4,
    });

    gsap.from(".bestsellerText", {
      scrollTrigger: {
        trigger: ".bestsellerText",
        start: "top 75%",
      },
      ease: true,
      y: 50,
      opacity: 0,
      delay: 0,
      duration: 0.5,
    });
    gsap.from(".best1", {
      scrollTrigger: {
        trigger: ".best1",
        start: "top 75%",
      },
      ease: true,
      y: 50,
      opacity: 0,
      delay: 0.3,
      duration: 0.5,
    });
    gsap.from(".best2", {
      scrollTrigger: {
        trigger: ".best2",
        start: "top 75%",
      },
      ease: true,
      y: 50,
      opacity: 0,
      delay: 0.5,
      duration: 0.5,
    });
    gsap.from(".bestButton", {
      scrollTrigger: {
        trigger: ".bestButton",
        start: "top 85%",
      },
      y: 30,
      autoAlpha: 0,
      duration: 0.5,
    });

    gsap.from(".brewText", {
      scrollTrigger: {
        trigger: ".brewText",
        start: "top 75%",
      },
      ease: true,
      y: 50,
      opacity: 0,
      delay: 0,
      duration: 0.6,
    });
    gsap.from(".brewLine", {
      scrollTrigger: {
        trigger: ".brewLine",
        start: "top 75%",
      },
      ease: true,
      width: 0,
      opacity: 0,
      delay: 0,
      duration: 0.6,
    });

    gsap.from(".brew1", {
      scrollTrigger: {
        trigger: ".brew1",
        start: "top 75%",
      },
      ease: true,
      x: -50,
      opacity: 0,
      delay: 0.2,
      duration: 0.6,
    });
    gsap.from(".brew2", {
      scrollTrigger: {
        trigger: ".brew2",
        start: "top 75%",
      },
      ease: true,
      y: 50,
      opacity: 0,
      delay: 0.5,
      duration: 0.6,
    });
    gsap.from(".brew3", {
      scrollTrigger: {
        trigger: ".brew3",
        start: "top 75%",
      },
      ease: true,
      x: 50,
      opacity: 0,
      delay: 0.8,
      duration: 0.6,
    });

    gsap.from(".brewButton", {
      scrollTrigger: {
        trigger: ".brewButton",
        start: "top 90%",
      },
      y: 30,
      autoAlpha: 0,
      delay: 0,
      duration: 0.5,
    });

    gsap.from(".communityHeading", {
      scrollTrigger: {
        trigger: ".communityHeading",
        start: "top 90%",
      },
      y: 30,
      opacity: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 0.2,
    });
    gsap.from(".communityText", {
      scrollTrigger: {
        trigger: ".communityText",
        start: "top 75%",
      },
      y: 50,
      ease: "circ",
      opacity: 0,
      delay: 0.2,
    });
    gsap.from(".communityButton", {
      scrollTrigger: {
        trigger: ".communityButton",
        start: "top 90%",
      },
      y: 30,
      autoAlpha: 0,
      delay: 0.4,
      duration: 0.5,
    });

    gsap.from(".testHeading", {
      scrollTrigger: {
        trigger: ".testHeading",
        start: "top 75%",
      },
      y: 30,
      opacity: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 0.2,
    });
    gsap.from(".test1", {
      scrollTrigger: {
        trigger: ".test1",
        start: "top 75%",
      },
      ease: true,
      x: -50,
      opacity: 0,
      delay: 0.2,
      duration: 0.6,
    });
    gsap.from(".test11", {
      scrollTrigger: {
        trigger: ".test1",
        start: "top 75%",
      },
      y: 50,
      ease: "circ",
      opacity: 0,
      delay: 0.7,
    });
    gsap.from(".test2", {
      scrollTrigger: {
        trigger: ".test2",
        start: "top 75%",
      },
      ease: true,
      y: 50,
      opacity: 0,
      delay: 0.5,
      duration: 0.6,
    });
    gsap.from(".test22", {
      scrollTrigger: {
        trigger: ".test1",
        start: "top 75%",
      },
      y: 50,
      ease: "circ",
      opacity: 0,
      delay: 1,
    });
    gsap.from(".test3", {
      scrollTrigger: {
        trigger: ".test3",
        start: "top 75%",
      },
      ease: true,
      x: 50,
      opacity: 0,
      delay: 0.8,
      duration: 0.6,
    });
    gsap.from(".test33", {
      scrollTrigger: {
        trigger: ".test1",
        start: "top 75%",
      },
      y: 50,
      ease: "circ",
      opacity: 0,
      delay: 1.3,
    });

    gsap.from(".igText1", {
      scrollTrigger: {
        trigger: ".igText1",
        start: "top 75%",
      },
      y: 30,
      opacity: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 0.2,
    });
    gsap.from(".igText2", {
      scrollTrigger: {
        trigger: ".igText2",
        start: "top 75%",
      },
      y: 30,
      opacity: 0,
      stagger: 0.05,
      delay: 0.3,
      duration: 0.2,
    });
    gsap.from(".igText3", {
      scrollTrigger: {
        trigger: ".igText3",
        start: "top 75%",
      },
      y: 30,
      opacity: 0,
      stagger: 0.05,
      delay: 0.4,
      duration: 0.2,
    });
    gsap.from(".ig1", {
      scrollTrigger: {
        trigger: ".ig1",
        start: "top 75%",
      },
      x: -50,
      opacity: 0,
      ease: "circ",
      delay: 0.2,
      duration: 0.3,
    });
    gsap.from(".ig2", {
      scrollTrigger: {
        trigger: ".ig1",
        start: "top 75%",
      },
      y: 50,
      opacity: 0,
      ease: "circ",
      delay: 0.4,
      duration: 0.3,
    });
    gsap.from(".ig3", {
      scrollTrigger: {
        trigger: ".ig1",
        start: "top 75%",
      },
      y: 50,
      opacity: 0,
      ease: "circ",
      delay: 0.6,
      duration: 0.3,
    });
    gsap.from(".ig4", {
      scrollTrigger: {
        trigger: ".ig1",
        start: "top 75%",
      },
      x: 50,
      opacity: 0,
      ease: "circ",
      delay: 0.8,
      duration: 0.3,
    });

    gsap.from(".contact1", {
      scrollTrigger: {
        trigger: ".contact1",
        start: "top 75%",
      },
      y: 30,
      opacity: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 0.2,
    });
    gsap.from(".contact2", {
      scrollTrigger: {
        trigger: ".contact2",
        start: "top 75%",
      },
      y: 30,
      opacity: 0,
      stagger: 0.05,
      delay: 0.3,
      duration: 0.2,
    });
    gsap.from(".contact3", {
      scrollTrigger: {
        trigger: ".contact3",
        start: "top 75%",
      },
      y: 30,
      opacity: 0,
      stagger: 0.05,
      delay: 0.6,
      duration: 0.2,
    });
  });

  return (
    <div className="smooth-wrapper">
      <div className="smooth-content main-screen font-poppins text-white">
        <Tooltip 
          id="my-tooltip" 
          className="absolute z-40 bg-white bg-opacity-40 text-black"
          style={{
            "width": "300px",
            "backgroundColor": "white",
            "color": "#2A1E18",
            "borderRadius": "3%"
          }}
          place="bottom-start"
        >
          <div className="text-xl font-anton pt-2">{toolHead}</div>
          <div className="mt-2 leading-relaxed pb-2">{toolDescription}</div>
        </Tooltip>
        {/* Hero Section  */}
        <div
          className="relative h-screen w-full bg-cover bg-home_large_banner bg-center text-white font-poppins"
          // style={{ backgroundImage: `url(${homeBg})` }}
        >
          <div className="absolute left-[8%] sm:left-[10%] top-[35%] sm:top-[48%] transform -translate-y-1/2">
            <div className="homeText overflow-hidden text-[80px] sm:text-[120px] leading-none font-anton text-wrap">
              COFFEE
              <br />
              THERAPY
              <br />
              <span className="flex items-center gap-6">
                ARTISAN
                <img src={logo} className="size-16 sm:size-24" />
              </span>
              {/* <span className="sm:hidden">
                
              <img src={logo} className="sm:hidden size-24" />
              </span> */}
            </div>
            <div
              ref={homeText1}
              className="text-[16px] sm:text-[23.6px] mt-2 font-medium"
            >
              POURING PASSION, BREWING PURPOSE
            </div>
          </div>
          {/* <button className="exploreButton absolute left-1/2 bottom-[14%] sm:bottom-[8%] transform -translate-x-1/2 px-6 py-[6px] text-[18px] border-2 border-white">
            <div className="exploreText"> Explore Now </div>
          </button> */}
          <div className="absolute left-1/2 bottom-[14%] sm:bottom-[8%] transform -translate-x-1/2 text-[18px]">
            <button onClick={executeScroll} class="exploreButton group relative m-1 cursor-pointer overflow-hidden border-2 border-white px-8 py-[6px]">
              <span class="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-white transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"></span>
              <span class="ease relative text-white transition duration-300 group-hover:text-[#05060A] font-semibold">
                Explore Now
              </span>
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="flex flex-col sm:flex-row justify-between sm:items-center w-[90%] sm:w-[80%] mx-auto mt-12">
          <div className="sm:w-[58%] text-white">
            <div className="storyHeading font-anton text-[49.44px] sm:text-[74.16px] ">
              OUR STORY
            </div>
            <div className="storyLine w-[32%] h-[2px] bg-white mt-4" />

            <img src={ourStory} className=" sm:hidden size-[500px mt-8" />
            <div className="storyText text-[16.28px] text-pretty font-poppins mt-8 leading-relaxed ">
              "As a former mechanical engineer turned cafe owner, I blend
              precision and passion in every cup. My expertise ensures efficient
              operations and innovative brewing techniques, creating a haven
              where coffee lovers revel in a blend of therapy and hospitality."
              <span className="flex">
                -Aniruddha Anwekar
              </span>
            </div>
          </div>
          <div className="hidden sm:block sm:w-[48%]">
            <img src={ourStory} className="h-[500px] ml-auto" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center w-[80% mx-auto mt-16">
          <div className="lg:w-[50%] w-full">
            <div className="bestsellerText md:hidden font-anton text-[49.44px] md:text-[74.16px] my-4 text-center">
              OUR BESTSELLERS
            </div>
            <div className="relative">
              <img src={bestsellersCover} className="w-full" />
              <a data-tooltip-id="my-tooltip" place="bottom-end" 
                className="absolute text-black flex items-center drop-shadow-white animate-pulse appearance-none justify-center text-3xl no-underline  size-10 bg-white rounded-full top-[58%] left-1/4 cursor-pointer"
                onMouseEnter={() => changeTooltip("classic")}  
              ></a>
              <a data-tooltip-id="my-tooltip" place="bottom-end" 
                className="absolute text-black flex items-center drop-shadow-white animate-pulse appearance-none justify-center text-3xl no-underline size-10 bg-white rounded-full top-[51%] left-[74%] cursor-pointer"
                onMouseEnter={() => changeTooltip("latte")}  
              ></a>
              <a data-tooltip-id="my-tooltip" place="bottom-end" 
                className="absolute text-black flex items-center drop-shadow-white animate-pulse appearance-none justify-center text-3xl no-underline  size-10 bg-white rounded-full top-[34%] left-[45%] cursor-pointer"
                onMouseEnter={() => changeTooltip("cappuccino")}  
              ></a>
            </div>
          </div>
          <div className="w-[90%] lg:w-[50%] px- text-white mt-8 md:mt-0">
            <div className="bestsellerText hidden md:block font-anton text-[49.44px] md:text-[74.16px] text-center">
              OUR BESTSELLERS
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-4 px-4">
              <div className="best1 w-[90% md:w-[48%] bg-[#1A1A1A] p-2 pb-8 text-[17.5px flex-1">
                <img src={best1} className="w-full" />
                <div className="px-2 py-4 font-semibold">
                  White Mocha{" "}
                </div>
                <div className="px-2 ">
                  Indulge in the creamy richness of a white chocolate mocha,
                  where velvety white chocolate meets bold espresso for a
                  blissful sip of sweetness.
                </div>
              </div>
              <div className="best2 w-[90% md:w-[48%] bg-[#1A1A1A] p-2 pb-8 text-[17.5px flex-1">
                <img src={best2} className="w-full" />
                <div className="px-2 py-4 font-semibold">
                  Cappuccino{" "}
                </div>
                <div className="px-2 ">
                  Savor our Cappuccino, where frothy steamed milk meets robust
                  espresso, creating a harmonious blend of rich flavors in every
                  comforting sip.
                </div>
              </div>
            </div>
            <div className=" flex justify-center md:justify-end mt-4 px-4">
              <button onClick={() => navigate("/products")} class="bestButton group relative m-1 cursor-pointer overflow-hidden  border-2 border-white px-8 py-[6px]">
                <span class="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-white transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"></span>
                <span class="ease relative text-white transition duration-300 group-hover:text-[#05060A] font-semibold">
                  View All
                </span>
              </button>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col justify-center items-center mx-auto py-16 sm:pb-20 text-white bg-cover bg-center"
          style={{ backgroundImage: `url(${brewBg})` }}
        >
          <div className="w-[90%] flex flex-col items-center sm:items-end">
            <div className="brewText w-[58%] font-anton text-center sm:text-right leading-tight text-[45.83px] ">
              BREWING BASICS
            </div>
            <div className="brewLine w-[170px] h-[2px] bg-white mt-4" />
          </div>
          <div className="w-[80%] sm:w-[90%] hidden sm:flex flex-col items-center md:items-start md:flex-row justify-center gap-8 mt-12">
            <div className="brew1 flex flex-col sm:flex-row w-[3 00px] sm:w-[400px] items-center bg-[#1A1A1A]">
              <img src={brew1} className="sm:w-[45%] h-[250px] w-full" />
              <div className="sm:w-[55%] px-6 py-2 flex gap-4 flex-col items-center text-center text-[12px] lgtext-[14px]">
                <img src={icon1} className="size-20 sm:size-16" />
                <div className="font-semibold">Origin of coffee</div>
                <div className="mt-2 font-light ">
                  From Ethiopian legend to global phenomenon, coffee's origins
                  trace a flavorful journey.
                </div>
              </div>
            </div>

            <div className="brew2 flex flex-col sm:flex-row w-[3 00px] sm:w-[400px] items-center bg-[#1A1A1A]">
              <img src={brew2} className="sm:w-[45%] h-[250px] w-full" />
              <div className="sm:w-[55%] px-6 py-2 flex gap-4 flex-col items-center text-center text-[12px] lgtext-[14px]">
                <img src={icon2} className="size-20 sm:size-16" />
                <div className="font-semibold">Espresso</div>
                <div className="mt-2 font-light">
                  Born in Italy's bustling cafes, espresso's bold essence fuels
                  coffee culture worldwide.
                </div>
              </div>
            </div>

            <div className="brew3 flex md:hidden flex-col sm:flex-row xl:flex w-[3 00px] sm:w-[400px] items-center bg-[#1A1A1A]">
              <img src={brew3} className="sm:w-[40%] h-[250px] w-full" />
              <div className="sm:w-[60%] px-6 py-2 flex gap-4 flex-col items-center text-center text-[12px] lgtext-[14px]">
                <img src={icon3} className="size-20 sm:size-16" />
                <div className="font-semibold">V60</div>
                <div className="mt-2 font-light">
                  Crafted in Japan, the V60 brews a delicate dance of precision
                  and flavor.
                </div>
              </div>
            </div>
          </div>

          <div className="sm:hidden w-[90%] mt-12 mx-auto">
            <Slider {...settings} className="sm:hidden">
              <div className="px-4">
                <div className="flex flex-col sm:flex-row w-[3 00px] sm:w-[400px] h-[520px] sm:h-auto items-center bg-[#1A1A1A]">
                  <img
                    src={brew1}
                    className="sm:w-[40%] h-[250px] w-full  object-cover"
                  />
                  <div className="sm:w-[55%] px-6 py-8 flex gap-4 flex-col items-center text-center text-[12px] lgtext-[14px]">
                    <img src={icon1} className="size-20 sm:size-16" />
                    <div className="font-semibold">Origin of coffee</div>
                    <div className="mt-2 font-light ">
                      From Ethiopian legend to global phenomenon, coffee's
                      origins trace a flavorful journey.
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-4">
                <div className="flex flex-col sm:flex-row w-[3 00px] sm:w-[400px] h-[520px] sm:h-auto items-center bg-[#1A1A1A]">
                  <img
                    src={brew2}
                    className="sm:w-[40%] h-[250px] w-full  object-cover"
                  />
                  <div className="sm:w-[55%] px-6 py-8 flex gap-4 flex-col items-center text-center text-[12px] lgtext-[14px]">
                    <img src={icon2} className="size-20 sm:size-16" />
                    <div className="font-semibold">Espresso</div>
                    <div className="mt-2 font-light">
                      Born in Italy's bustling cafes, espresso's bold essence
                      fuels coffee culture worldwide.
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-4">
                <div className="flex md:hidden flex-col sm:flex-row xl:flex w-[3 00px] sm:w-[400px] h-[520px] sm:h-auto items-center bg-[#1A1A1A]">
                  <img
                    src={brew3}
                    className="sm:w-[40%] h-[250px] w-full  object-cover"
                  />
                  <div className="sm:w-[60%] px-6 py-8 flex gap-4 flex-col items-center text-center text-[12px] lgtext-[14px]">
                    <img src={icon3} className="size-20 sm:size-16" />
                    <div className="font-semibold">V60</div>
                    <div className="mt-2 font-light">
                      Crafted in Japan, the V60 brews a delicate dance of
                      precision and flavor.
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          <button onClick={() => navigate("/learn")} class="brewButton mt-12 group relative m-1 cursor-pointer overflow-hidden  border-2 border-white px-8 py-[6px]">
            <span class="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-white transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"></span>
            <span class="ease relative text-white transition duration-300 group-hover:text-[#05060A] font-semibold">
              View All
            </span>
          </button>
        </div>

        <div
          className="flex flex-col items-center text-center py-28 mt -16 bg-center bg-cover"
          style={{ backgroundImage: `url(${communityBg})` }}
        >
          <div className="communityHeading font-anton text-[49.44px] sm:text-[74.16px] leading-none tracking-wide w-[90%] sm:w-[40%]">
            COFFEE CULTURE COLLECTIVE
          </div>
          <div className="communityText text-[15.28px]  sm:text-[17.5px] leading-loose w-[90%] sm:w-[50%] mt-16">
            At Coffee Therapy, we're passionate about all things coffee. Our
            brewing sessions are where the magic happens – a space where coffee
            enthusiasts come together to explore the art and science of brewing
            the perfect cup.
          </div>
          <div className="px-2 flex justify-end mt-12">
            <button  onClick={() => navigate("/community")} class="contact3 group relative m-1 cursor-pointer overflow-hidden  border-2 border-white px-8 py-[6px]">
              <span class="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-white transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"></span>
              <span class="ease relative text-white transition duration-300 group-hover:text-[#05060A] font-semibold">
                Join The Community
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-[90%] md:w-[85%] mx-auto pt-16 md:py-12 md:pb-36">
          <div className="testHeading font-anton text-[49.44px] sm:text-[74.16px] text-center leading-none tracking-wide sm:w-[40%]">
            OUR GUESTBOOK
          </div>
          <div className="hidden md:flex justify-center items-end mt-12 text-[15px]">
            <div className="test1 relative flex flex-col items-center bg-[#191919] text-[#938E8E] h-[260px] w-[32%]">
              <img src={quote} className="test11 size-12 mt-8" />
              <div className="test11 mt-6 px-4 text-center">
              "Best Place to get your flavorful cup of coffee and I mean Black Coffee 🙌"
              </div>
              <div className="flex flex-col items-center absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[65%]">
                <div className="test11 size-24 overflow-hidden rounded-full">
                  <img src={rev1} className=" w-full object-fill" />
                </div>
                <div className="test11 mt-2">Neeraj Pathak</div>
                <div className="test11">Zura Co Founder & Sailor</div>
              </div>
            </div>
            <div className="test2 relative flex flex-col items-center bg-[#1A2C1E] drop-shadow-2xl h-[300px] w-[36%]">
              <img src={quote} className="test22 size-12 mt-8" />
              <div className="test22 mt-6 px-4 text-center text-[17.5px] ">
                "Coffee Therapy’s Iced Latte and Hot Chocolate are the best in town! Each sip is a perfect blend of comfort and delight, making every visit a a real therapy. ♥"
              </div>
              <div className="flex flex-col items-center absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[65%]">
                <div className="test22 size-24 overflow-hidden rounded-full">
                  <img src={rev2} className=" w-full object-fill" />
                </div>
                <div className="test22 mt-2">Mudra ( The Super Chatori)</div>
                <div className="test22 ">Food Blogger</div>
              </div>
            </div>
            <div className="test3 relative flex flex-col items-center bg-[#191919] text-[#938E8E] h-[260px] w-[32%]">
              <img src={quote} className="test33 size-12 mt-8" />
              <div className="test33 mt-6 px-4 text-center">
              "Coffee therapy - means a comfort,happy  and warm space.i spent time there reading ,having best coffee and yes lots of outing with friends. Place is 5✨✨✨"
              </div>
              <div className="flex flex-col items-center absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[65%]">
                <div className="test33 size-24 overflow-hidden rounded-full">
                  <img src={rev3} className=" w-full object-fill" />
                </div>
                <div className="test33 mt-2">Monica Dubey</div>
                {/* <div className="test33">Student </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden w-[90%] mt-12 mx-auto">
          <Slider {...settings}>
            <div className="relative mb-28 bg-[#1A2C1E] h-[200px] mx-auto">
              <img src={quote} className="size-7 mx-auto mt-6" />
              <div className="mt-4 px-6 text-center text-sm">
                "Coffee Therapy’s Iced Latte and Hot Chocolate are the best in town! Each sip is a perfect blend of comfort and delight, making every visit a a real therapy. ♥"
              </div>
              <div className="flex flex-col items-center text-sm absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[65%]">
                <div className="size-20 overflow-hidden rounded-full">
                  <img src={rev2} className=" w-full object-fill" />
                </div>
                <div className="mt-2">Mudra</div>
                <div>Food Blogger</div>
              </div>
            </div>
            <div className="relative mb-28 bg-[#191919] h-[200px] ">
              <img src={quote} className="size-7 mx-auto mt-6" />
              <div className="mt-4 px-6 text-center text-sm">
              Best Place to get your flavorful cup of coffee and I mean Black Coffee 🙌
              </div>
              <div className="flex flex-col items-center text-sm absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[65%]">
                <div className="size-20 overflow-hidden rounded-full">
                  <img src={rev1} className=" w-full object-fill" />
                </div>
                <div className="mt-2">Neeraj Pathak</div>
                <div>Zura Co Founder & Sailor</div>
              </div>
            </div>
            <div className="relative mb-28 bg-[#191919] h-[200px] ">
              <img src={quote} className="size-7 mx-auto mt-6" />
              <div className="mt-4 px-6 text-center text-sm">
              Coffee therapy - means a comfort,happy  and warm space.i spent time there reading ,having best coffee and yes lots of outing with friends. Place is 5✨✨✨
              </div>
              <div className="flex flex-col items-center text-sm absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[65%]">
                <div className="size-20 overflow-hidden rounded-full">
                  <img src={rev3} className=" w-full object-fill" />
                </div>
                <div className="mt-2">Monica Dubey</div>
                {/* <div>Student </div> */}
              </div>
            </div>
          </Slider>
        </div>

        <div className="flex flex-col justify-center items-center w-[85%] mx-auto py-16 pb-20 text-white">
          <div className="text-center">
            <div className="igText1 text-3xl font-light">
              #<span className="text-[#568759]">coffee</span>therapyartisan
            </div>
            <div className="igText2 text-5xl font-anton mt-3">
              CONNECT ON INSTAGRAM
            </div>
            <a
              href="https://www.instagram.com/coffeetherapyinc?igsh=NWhkdmpsa244c2l1"
              className="igText3 group flex w-fit mx-auto justify-center items-center gap-1 text-xl mt-3"
            >
              <img src={instagram} className="mt-1" />
              <div className="text-xl group-hover:underline underline-offset-4">
                @coffeetherapyartisan
              </div>
            </a>
          </div>
          <div className="mt-12 flex w-full md:gap-8 justify-center">
            <a 
              href="https://www.instagram.com/p/CrC5oD-Jy0f/?igsh=c2ZkZzExMG5hbmw0&img_index=1" 
              className="ig1 border size-[150px] min-[390px]:size-[180px] sm:size-[250px] hover:drop-shadow-xl transition-all overflow-hidden flex items-center justify-center"
            >
              <img
                src={dummy1}
                className="object-fill"
              />
            </a>
            <a 
              href="https://www.instagram.com/p/C4gA6CGvoIj/?igsh=andnY3IwdGI0cDBt" 
              className="ig2 border size-[150px] min-[390px]:size-[180px] sm:size-[250px] hover:drop-shadow-xl transition-all overflow-hidden flex items-center justify-center"
            >
              <img
                src={dummy2}
                className="object-fill"
              />
            </a>
            <a 
              href="https://www.instagram.com/p/C7desYoP9yO/?igsh=c2x1cm5pYmsyNHIz" 
              className="ig3 border hidden min-[900px]:flex size-[250px] hover:drop-shadow-xl transition-all overflow-hidden  items-center justify-center"
            >
              <img
                src={dummy3}
                className="object-fill"
              />
            </a>
            <a 
              href="https://www.instagram.com/p/C7YbuB3Pp0D/?igsh=aW5ucHgwZWNhbm5q" 
              className="ig4 border hidden xl:flex size-[250px] hover:drop-shadow-xl transition-all overflow-hidden  items-center justify-center"
            >
              <img
                src={dummy4}
                className="object-fill"
              />
            </a>
          </div>
        </div>

        <div
          className="flex flex-col gap-4 items-center py-16 bg-center bg-cover"
          style={{ backgroundImage: `url(${contactBg})` }}
        >
          <div className="contact1 font-anton text-5xl text-center">
            REACH OUT, LET'S CONNECT
          </div>
          {/* <div className="contact2 flex gap-4 items-center bg-white py-[6px] px-2 mt-4 w-[80%] sm:w-[30%]">
            <img src={alert} className="size-3" />
            <input
              className="w-full bg-transparent outline-none placeholder:text-[#9D8781] text-[#9D8781]"
              placeholder="Your Email Address"
            />
          </div> */}

          <button
            onClick={() => navigate("/contact")}
            class="contact3 group relative m-1 cursor-pointer overflow-hidden  border-2 border-white px-8 py-[6px]"
          >
            <span class="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-white transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"></span>
            <span class="ease relative text-white transition duration-300 group-hover:text-[#05060A] font-semibold">
              Contact
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
