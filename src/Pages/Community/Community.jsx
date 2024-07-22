import { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import scrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(scrollTrigger);

import heroBg from "../../assets/images/community/heroBg.png";
import logo from "../../assets/images/ctLogo2.png";
import dummy1 from "../../assets/images/home/dummy1.jpeg";
import dummy2 from "../../assets/images/home/dummy2.jpeg";
import dummy3 from "../../assets/images/home/dummy3.jpeg";
import dummy4 from "../../assets/images/home/dummy4.jpeg";
import brew1 from "../../assets/images/community/brew1.jpg";
import brew2 from "../../assets/images/community/brew2.webp";
import brew3 from "../../assets/images/community/brew3.webp";
import brew4 from "../../assets/images/community/brew4.webp";

import icon1 from "../../assets/images/community/icon1.png";
import icon2 from "../../assets/images/community/icon2.png";
import icon3 from "../../assets/images/community/icon3.png";
import icon4 from "../../assets/images/community/icon4.png";
import brewBg from "../../assets/images/home/brewBg.png";
import contactBg from "../../assets/images/home/contactBg.png";

import instagram from "../../assets/images/icons/instagram.png";
import { useNavigate } from "react-router-dom";

const Community = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  useGSAP(() => {
    gsap.from(".main-screen", {
      scrollTrigger: ".main-screen",
      ease: true,
      opacity: 0,
      delay: 0,
      duration: 1,
    });
    gsap.from(".homeText1", {
      scrollTrigger: ".homeText1",
      y: 50,
      ease: "circ",
      opacity: 0,
      delay: 0.4,
    });
    gsap.from(".homeText2", {
      scrollTrigger: ".homeText1",
      y: 50,
      ease: "circ",
      opacity: 0,
      delay: 0.6,
    });
    // gsap.from(".homeText3", {
    //   scrollTrigger: ".homeText1",
    //   y: 50,
    //   ease: "circ",
    //   opacity: 0,
    //   delay: 0.8
    // })
    // gsap.from(".orderButton", {
    //   y: 30,
    //   autoAlpha: 0,
    //   delay: 1,
    //   duration: 0.5
    // })

    gsap.from(".summaryheading", {
      scrollTrigger: ".summaryheading",
      y: 50,
      ease: "circ",
      opacity: 0,
      delay: 0.8,
    });
    gsap.from(".summaryLine", {
      scrollTrigger: {
        trigger: ".summaryheading",
        start: "top 75%",
      },
      ease: true,
      width: 0,
      opacity: 0,
      delay: 0.8,
      duration: 0.6,
    });
    gsap.from(".summaryText", {
      scrollTrigger: {
        trigger: ".summaryheading",
        start: "top 75%",
      },
      y: 50,
      ease: "circ",
      opacity: 0,
      delay: 1,
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
    gsap.from(".igLine", {
      scrollTrigger: {
        trigger: ".summaryheading",
        start: "top 75%",
      },
      ease: true,
      width: 0,
      opacity: 0,
      delay: 0.8,
      duration: 0.6,
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

    gsap.from(".brewingText1", {
      scrollTrigger: ".brewingText1",
      y: 50,
      ease: "circ",
      opacity: 0,
      delay: 0.4,
    });
    gsap.from(".brewingLine", {
      scrollTrigger: {
        trigger: ".brewingLine",
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
      x: -50,
      opacity: 0,
      ease: "circ",
      delay: 0.2,
      duration: 0.3,
    });
    gsap.from(".brew2", {
      scrollTrigger: {
        trigger: ".brew1",
        start: "top 75%",
      },
      x: 50,
      opacity: 0,
      ease: "circ",
      delay: 0.2,
      duration: 0.3,
    });
    gsap.from(".brew3", {
      scrollTrigger: {
        trigger: ".brew1",
        start: "top 75%",
      },
      x: -50,
      opacity: 0,
      ease: "circ",
      delay: 0.4,
      duration: 0.3,
    });
    gsap.from(".brew4", {
      scrollTrigger: {
        trigger: ".brew1",
        start: "top 75%",
      },
      x: 50,
      opacity: 0,
      ease: "circ",
      delay: 0.4,
      duration: 0.3,
    });
  });

  return (
    <div className="main-screen font-poppins">
      <div
        className="bg-community_bg_small sm:bg-community_bg_large flex flex-col items-center pt-8 sm:pt-0 justify-center h-[550px] sm:h-[500px] w-full bg-cover bg-bottom text-white text-center"
        // style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="homeText1 text-[49.44px] sm:text-[74.16px] font-anton">
          COFFEE CULTURE COLLECTIVE
        </div>
        <div className="homeText2 text-[18.88px] sm:text-[23.6px] w-[90%] md:w-[70%] mt-4 font-base">
          Unlock the essence of coffee: Explore its origins, master espresso,
          pour perfection with V60 and Aeropress, chill with cold brew, and
          savor the simplicity of French press.
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center sm:w-[80%] mx-auto mt-12">
        <div className="w-[90%] sm:w-[58%] text-white">
          <div className="summaryheading sm:w-[58%] font-anton leading-tight text-[45.83px] ">
            WE'RE MORE THAN JUST A PLACE TO GRAB A CUP OF COFFEE
          </div>
          <div className="summaryLine w-[42%] sm:w-[32%] h-[2px] bg-white mt-4" />
          <div className="summaryText text-[17.5px] text-justify font-light sm:leading-loose mt-8 ">
            We're a community of coffee enthusiasts, neighbors, and friends who
            gather to connect, share experiences, and celebrate our love for all
            things coffee. Whether you're a seasoned coffee aficionado or just
            starting your coffee journey, we welcome you to join our vibrant
            community.
          </div>
        </div>
        <div className="sm:w-[38%] mt-4 sm:mt-0">
          <img src={logo} className="h-[250px] sm:h-[400px]" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-[90%] sm:w-[85%] mx-auto py-24 pb-20 text-white">
        <div className="text-center w-[90% sm:w-[70%]">
          <div className="igText1 font-anton leading-tight text-[30.55px sm: text-[45.83px]">
            FOLLOW US ON SOCIAL MEDIA
          </div>
          <div className="igLine sm:hidden mx-auto w-[90%] h-[2px] bg-white mt-4" />
          <div className="igText2 text-[16.5px] text-center font-light leading-loose mt-4">
            Join the conversation and get a glimpse into our daily life! Share
            your photos using our hashtag #coffeetherapyartisan Community and see
            yourself featured on our page.
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
        className="flex flex-col overflow-hidden justify-center items-center mx-auto sm:py-24 pb-20 text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${brewBg})` }}
      >
        <div className="w-[80%] flex flex-col items-center sm:items-end">
          <div className="brewingText1 w-[58%] font-anton text-center sm:text-right leading-tight text-[45.83px] ">
            BREWING BONANZA
          </div>
          <div className="brewingLine w-[170px] h-[2px] bg-white mt-4" />
        </div>
        <div className="w-[80%] sm:w-[80%] flex flex-col sm:flex-row justify-center gap-8 mt-12">
          <div className="brew1 flex flex-col sm:flex-row sm:w-1/2 items-center bg-[#1A1A1A]">
            <div className="sm:w-[40%] h-[280px] w-full overflow-hidden">
              <img src={brew1} className=" object-fill" />
            </div>
            <div className="sm:w-[60%] px-6 py-4 flex gap-4 flex-col items-center text-center text-[14px]">
              <img src={icon1} className="" />
              <div className="font-semibold">Brewing Basics Bonanza</div>
              <div className="mt-2 font-light ">
                Master the fundamentals of coffee brewing with this introductory
                session. Explore different brewing methods like pour-over,
                French press, and AeroPress, and learn how to optimize them for
                perfect extraction.
              </div>
            </div>
          </div>

          <div className="brew2 flex flex-col sm:flex-row sm:w-1/2 items-center bg-[#1A1A1A]">
            <div className="sm:w-[40%] h-[280px] w-full overflow-hidden">
              <img src={brew2} className="object-fill" />
            </div>
            <div className="sm:w-[60%] px-6 py-4 flex gap-4 flex-col items-center text-center text-[14px]">
              <img src={icon2} className="" />
              <div className="font-semibold">Single-Origin Spotlight</div>
              <div className="mt-2 font-light">
                Embark on a coffee journey to the Coffee Origin! Learn about the
                unique characteristics of this bean, its cultivation process,
                and its flavor profile.
              </div>
            </div>
          </div>
        </div>

        <div className="w-[80%] sm:w-[80%] flex flex-col sm:flex-row justify-center gap-8 mt-8">
          <div className="brew3 flex flex-col sm:flex-row sm:w-1/2 items-center bg-[#1A1A1A]">
            <div className="sm:w-[40%] h-[280px] w-full overflow-hidden">
              <img src={brew3} className="object-fill" />
            </div>
            <div className="sm:w-[60%] px-6 py-4 flex gap-4 flex-col items-center text-center text-[14px]">
              <img src={icon3} className="size-20 sm:size-16" />
              <div className="font-semibold">Coffee Cupping Experience</div>
              <div className="mt-2 font-light">
                Become a coffee connoisseur with a cupping session! Learn the
                professional technique of cupping to evaluate coffee aromas,
                taste profiles, and overall quality.
              </div>
            </div>
          </div>

          <div className="brew4 flex flex-col sm:flex-row sm:w-1/2 items-center bg-[#1A1A1A]">
            <div className="sm:w-[40%] h-[280px] w-full overflow-hidden">
              <img src={brew4} className="object-fill" />
            </div>
            <div className="sm:w-[60%] px-6 py-4 flex gap-4 flex-col items-center text-center text-[14px]">
              <img src={icon4} className="size-20 sm:size-16" />
              <div className="font-semibold">Latte Art Lab</div>
              <div className="mt-2 font-light">
                Unleash your inner barista and learn the art of creating latte
                art! This hands-on session will guide you through milk texturing
                techniques and basic latte art designs like hearts and rosettes.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="py-16 bg-center bg-cover text-white"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        <div className="w-[90%] sm:w-[80%] mx-auto flex flex-col sm:flex-row justify-center gap-4 items-center ">
          <div className="w-[90%] sm:w-[60%] text-center sm:text- left">
            <div className="font-anton text-[40.83px]">
              We'd love to hear from you!
            </div>
            <div className="w-[90%] sm:w-[70%] mx-auto sm:mx- 0">
              Share your coffee stories, suggestions, or questions with us.
              We're always happy to connect with our community.
            </div>
            <div className="w-[90%] sm:w-full [70%] mt-4 mx-auto sm:mx-0">
              #coffeetherapyartisan
            </div>
            <button
              onClick={() => navigate("/contact")}
              class="contact3 group relative m-1 mt-4 cursor-pointer overflow-hidden  border-2 border-white px-8 py-[6px]"
            >
              <span class="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-white transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"></span>
              <span class="ease relative text-white transition duration-300 group-hover:text-[#05060A] font-semibold">
                Contact
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
