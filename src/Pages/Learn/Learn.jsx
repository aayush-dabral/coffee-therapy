import { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import scrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(scrollTrigger);

import heroBg from "../../assets/images/learn/heroBg.png";
import espressoBg from "../../assets/images/learn/espressoBg.png";
import v60 from "../../assets/images/learn/v60.webp";
import french from "../../assets/images/learn/french.webp";
import coldBrew from "../../assets/images/learn/coldBrew.webp";
import aeropressBg from "../../assets/images/learn/aeropressBg.png";

const Learn = () => {
  const [v60State, setv60State] = useState("hot");
  const [coldState, setColdState] = useState("hot-inverted");

  const [farmView, setFarmView] = useState(false);
  const [espressoView, setEspressoView] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

    gsap.from(".summaryheading", {
      scrollTrigger: ".summaryheading",
      y: 50,
      ease: "circ",
      opacity: 0,
      delay: 0.2,
    });
    gsap.from(".summaryLine", {
      scrollTrigger: {
        trigger: ".summaryheading",
        start: "top 75%",
      },
      ease: true,
      width: 0,
      opacity: 0,
      delay: 0.2,
      duration: 0.3,
    });
    gsap.from(".summaryText", {
      scrollTrigger: {
        trigger: ".summaryheading",
        start: "top 75%",
      },
      y: 50,
      ease: "circ",
      opacity: 0,
      delay: 0.4,
    });

    gsap.from(".espHeading", {
      scrollTrigger: ".espHeading",
      y: 50,
      ease: "circ",
      opacity: 0,
      delay: 0.2,
    });
    gsap.from(".espLine", {
      scrollTrigger: {
        trigger: ".espLine",
        start: "top 75%",
      },
      ease: true,
      width: 0,
      opacity: 0,
      delay: 0.4,
      duration: 0.3,
    });
    gsap.from(".espText", {
      scrollTrigger: {
        trigger: ".espText",
        start: "top 75%",
      },
      y: 50,
      ease: "circ",
      opacity: 0,
      delay: 0.6,
    });

    gsap.from(".v60Heading", {
      scrollTrigger: ".v60Heading",
      y: 50,
      ease: "circ",
      opacity: 0,
      delay: 0.2,
    });
    gsap.from(".v60Line", {
      scrollTrigger: {
        trigger: ".v60Line",
        start: "top 75%",
      },
      ease: true,
      width: 0,
      opacity: 0,
      delay: 0.4,
      duration: 0.3,
    });
    gsap.from(".v60Buttons", {
      scrollTrigger: ".v60Buttons",
      y: 50,
      ease: "circ",
      opacity: 0,
      delay: 0.5,
    });
    gsap.from(".v60Text", {
      scrollTrigger: {
        trigger: ".espText",
        start: "top 75%",
      },
      y: 50,
      ease: "circ",
      opacity: 0,
      delay: 0.6,
    });

    gsap.from(".frenchHeading", {
      scrollTrigger: ".frenchHeading",
      y: 50,
      ease: "circ",
      opacity: 0,
      delay: 0.2,
    });
    gsap.from(".frenchLine", {
      scrollTrigger: {
        trigger: ".frenchLine",
        start: "top 75%",
      },
      ease: true,
      width: 0,
      opacity: 0,
      delay: 0.4,
      duration: 0.3,
    });
    gsap.from(".frenchText", {
      scrollTrigger: {
        trigger: ".frenchText",
        start: "top 75%",
      },
      y: 50,
      ease: "circ",
      opacity: 0,
      delay: 0.6,
    });

    gsap.from(".coldHeading", {
      scrollTrigger: ".coldHeading",
      y: 50,
      ease: "circ",
      opacity: 0,
      delay: 0.2,
    });
    gsap.from(".coldLine", {
      scrollTrigger: {
        trigger: ".coldLine",
        start: "top 75%",
      },
      ease: true,
      width: 0,
      opacity: 0,
      delay: 0.4,
      duration: 0.3,
    });
    gsap.from(".coldText", {
      scrollTrigger: {
        trigger: ".coldText",
        start: "top 75%",
      },
      y: 50,
      ease: "circ",
      opacity: 0,
      delay: 0.6,
    });

    gsap.from(".aeroHeading", {
      scrollTrigger: ".aeroHeading",
      y: 50,
      ease: "circ",
      opacity: 0,
      delay: 0.2,
    });
    gsap.from(".aeroLine", {
      scrollTrigger: {
        trigger: ".coldLine",
        start: "top 75%",
      },
      ease: true,
      width: 0,
      opacity: 0,
      delay: 0.4,
      duration: 0.3,
    });

    gsap.from(".aero1", {
      scrollTrigger: {
        trigger: ".aero1",
        start: "top 75%",
      },
      y: 30,
      opacity: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 0.2,
    });
    gsap.from(".aero2", {
      scrollTrigger: {
        trigger: ".aero1",
        start: "top 75%",
      },
      y: 30,
      opacity: 0,
      stagger: 0.05,
      delay: 0.3,
      duration: 0.2,
    });
    gsap.from(".aero3", {
      scrollTrigger: {
        trigger: ".aero1",
        start: "top 75%",
      },
      y: 30,
      opacity: 0,
      stagger: 0.05,
      delay: 0.4,
      duration: 0.2,
    });
    gsap.from(".aeroText", {
      scrollTrigger: {
        trigger: ".aeroText",
        start: "top 75%",
      },
      y: 30,
      opacity: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 0.2,
    });
  });

  return (
    <div className="main-screen font-poppins text-white">
      <div
        className="bg-learn_bg_small sm:bg-learn_bg_large flex flex-col items-center justify-center h-[550px] sm:h-[500px] w-full bg-cover bg-center text-white text-center"
        // style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="homeText1 text-[49.44px] sm:text-[74.16px] font-anton">
          BREWING BASICS
        </div>
        <div className="homeText2 text-[18.88px] sm:text-[23.6px] w-[90%] md:w-[70%] mt-4 font-medium">
          Unlock the essence of coffee: Explore its origins, master espresso,
          pour perfection with V60 and Aeropress, chill with cold brew, and
          savor the simplicity of French press.
        </div>
      </div>

      <div className="mt-12 bg-cover bg-center py-20">
        <div className="flex justify-between items-center w-[90%] sm:w-[80%] mx-auto">
          <div className="text-white">
            <div className="summaryheading font-anton text-[45.83px]">
              FARM TO CUP
            </div>
            <div className="summaryLine w-[30%] sm:w-[9%] h-[2px] text- bg-white -mt-1" />
            <div className="summaryText w-full mt-8 text-justify text-[16.5px] leading-[2.3] my-8">
              Bringing a beautiful cup of coffee to your table needs lot of work
              and attention to detail. Coffee cherries need certain region,
              temperatures and elevations to grow as desired. The steps that go
              into it are:
            </div>

            <div className="summaryText hidden lg:flex justify-between w-full mt-4 text-pretty text-[16.5px] leading-[1.8]">
              <div className="w-1/3 border-r pr-16 pl-4">
                <ul className="list-disc">
                  <li className="mt-8"> Farmers plant coffee plants in a suitable region. </li>
                  <li> Coffee cherries are plucked by hands and sorted. </li>
                  <li>
                    {" "}
                    Particular grade is assigned to the harvest according to
                    standards.{" "}
                  </li>
                </ul>
              </div>
              <div className="w-1/3 border-r px-16">
                <ul className="list-disc">
                  <li className="mt-8">
                    {" "}
                    Cherries are selected for different process so that best
                    flavors can be extracted. Some of these processes are
                    natural, washed & honey. These processes decide what sort of
                    flavor profile the coffee will have.{" "}
                  </li>
                  <li>
                    {" "}
                    Processed green beans are frozen and sent to the rosters.{" "}
                  </li>
                </ul>
              </div>
              <div className="w-1/3 pl-16 pr-4">
                <ul className="list-disc">
                  
                <li className="mt-8">
                    {" "}
                    These green beans are then roasted to different profiles
                    like light, medium & dark to get desired flavor profile.{" "}
                  </li>
                <li>
                    {" "}
                    These roasted beans are then allowed to degas for few days.{" "}
                  </li>
                  <li>
                    {" "}
                    Now the beans are ready to be used in different equipment.{" "}
                  </li>
                </ul>
              </div>
            </div>

            <div className="summaryText sm:hidden w-full pl-4  text-justify text-[16.5px] leading-[2.3]">
              <ul className="list-disc list-inside">
                <li> Coffee cherries are plucked by hands and sorted. </li>
                <li className="mt-4">
                  {" "}
                  Particular grade is assigned to the harvest according to
                  standards.{" "}
                </li>
                <li className="mt-4">
                  {" "}
                  Cherries are selected for different process so that best
                  flavors can be extracted. Some of these processes are natural,
                  washed & honey. These processes decide what sort of flavor
                  profile the coffee will have.{" "}
                </li>
              </ul>
              <div
                className={`transition-all ease-in-out duration-300 overflow-hidden mt-4 ${
                  farmView ? "max-h-[400px]" : "max-h-0"
                } `}
              >
                <ul className="list-disc pl-4">
                  <li>
                    {" "}
                    Processed green beans are frozen and sent to the rosters.{" "}
                  </li>
                  <li className="mt-4">
                    {" "}
                    These green beans are then roasted to different profiles
                    like light, medium & dark to get desired flavor profile.{" "}
                  </li>
                  <li className="mt-4">
                    {" "}
                    These roasted beans are then allowed to degas for few days.{" "}
                  </li>
                  <li className="mt-4">
                    {" "}
                    Processed green beans are frozen and sent to the rosters.{" "}
                  </li>
                </ul>
              </div>
            </div>

            <div className="summaryText sm:hidden mt-8 text-center text-[20.5px] leading-[2.3]">
              {!farmView ? (
                <div className="flex justify-center gap-2 w-full ">
                  <div
                    onClick={() => setFarmView(true)}
                    className=" underline underline-offset-4 "
                  >
                    Read More...
                  </div>
                </div>
              ) : (
                <div className="flex justify-center gap-2 w-full ">
                  <div
                    onClick={() => setFarmView(false)}
                    className=" underline underline-offset-4 "
                  >
                    Read Less...
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className="mt-12 bg-cover bg-top py-20"
        style={{ backgroundImage: `url(${espressoBg})` }}
      >
        <div className="flex justify-between items-center w-[90%] sm:w-[80%] mx-auto">
          <div className="text-white">
            <div className="espHeading font-anton text-[45.83px]">ESPRESSO</div>
            <div className="espLine w-[30%] sm:w-[9%] h-[2px] text- bg-white -mt-1" />
            <div className="espText w-full mt-8 text- justify text-[16.5px] leading-[2.3]">
              Espresso, the quintessential embodiment of coffee culture, is a
              concentrated shot of caffeinated bliss. Crafted with meticulous
              precision and finesse, it boasts a robust and intense flavor
              profile that tantalizes the senses. Originating from Italy,
              espresso is a testament to the artistry of coffee making, where
              finely ground beans are subjected to high pressure and hot water,
              resulting in a velvety liquid gold adorned with a rich crema. Its
              allure lies in its ability to deliver a potent kick of caffeine,
              awakening the senses and invigorating the soul with each decadent
              sip.
            </div>
            <div
              className={`espText transition-all ease-in-out duration-300 overflow-hidden mt-4 leading-[2.3] ${
                espressoView ? "blo ck max-h- [600px]" : "hidd en max-h -0"
              } `}
            >
              Key things to keep in mind while pulling an espresso shot is:
              <ul className="list-disc pl-4 mt-2">
                <li>Pressure should be close to 9 bars. </li>
                <li className="mt-4">
                  Beans to shot ratio is kept close to 1:2 for it to be called
                  espresso.{" "}
                </li>
                <li className="mt-4">
                  1:1 shot is called Ristretto and 1:3 shot is called Lungo.{" "}
                </li>
                <li className="mt-4">
                  Fine grind size, which should be calibrated regularly.{" "}
                </li>
                <li>
                  Puck preparation i.e. for a great extraction, even
                  distribution and level tampering should be done.{" "}
                </li>
                <li className="mt-4">
                  Note the time of the beginning of drip and end of extraction.
                  It may vary depending on beans and your preference but keep a
                  track helps in making consistent espresso shot.{" "}
                </li>
                <li className="mt-4">
                  Always pre heat group head and porter filter.{" "}
                </li>
                <li className="mt-4">
                  Measure weight of your shot while extracting.{" "}
                </li>
                <li className="mt-4">
                  You can also look into “preinfusion” to avoid channeling of
                  shot.{" "}
                </li>
              </ul>
              <br />
              Keep in mind these parameters to find a best recipe that works for
              you and then keep consistently making same beautiful and rich
              espresso every time.
              <br />
              These espresso shots are used to make most of our day-to-day
              coffees like cappuccino, latte, americano, flat white and a whole
              lot more.
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start w-[90%] sm:w-[70%] sm:h-[600px] mx-auto mt-12 pb-12 sm:pb-0">
        <div className="sm:w-[58%] text-white">
          <div className="v60Heading font-anton text-[45.83px] text-center sm:text-left">
            V60 POUR OVER
          </div>
          <div className="v60Line w-[19%] h-[2px] bg-white -mt-1 hidden sm:block" />
          <img
            src={v60}
            className="sm:hidden sm:h-[500px] ml-auto mt-4 sm:-mt-12"
          />
          <div className="v60Buttons flex justify-center sm:justify-start gap-4 mt-8">
            <button
              onClick={() => setv60State("hot")}
              className={`w-20 ${
                v60State === "hot"
                  ? "bg-white text-black font-semibold"
                  : "bg-transparent text-white border-2 border-white"
              }`}
            >
              Hot
            </button>
            <button
              onClick={() => setv60State("iced")}
              className={`w-20 ${
                v60State === "iced"
                  ? "bg-white text-black font-semibold"
                  : "bg-transparent text-white border-2 border-white"
              }`}
            >
              Iced
            </button>
          </div>
          <div className="v60Text text-[16.5px] text-justify font-poppins font-light mt-8 ">
            {v60State === "hot" ? (
              <ul className="list-disc pl-6">
                <li>
                  <span className="font-bold">Brew Temperature :</span> 85-95°C
                  (varies depending on roast profile)
                </li>
                <li className="mt-2">
                  <span className="font-bold">Brew Time :</span> 3 minutes
                </li>
                <li className="mt-2">
                  <span className="font-bold">Coffee :</span> 18 grams
                </li>
                <li className="mt-2">
                  <span className="font-bold">Grind Size:</span> medium ( like
                  sea salt )
                </li>
                <li className="mt-2">
                  Rinse your paper filter and discard the water
                </li>
                <li className="mt-2">
                  <span className="font-bold">Bloom :</span> 36 grams pour in
                  spiral motion
                </li>
                <li className="mt-2">
                  <span className="font-bold">2nd Pour :</span> at 45 seconds,
                  pour till 150 grams in spiral motion
                </li>
                <li className="mt-2">
                  <span className="font-bold">3rd Pour :</span> at 1:20 minutes,
                  pour till 270 grams
                </li>
                <li className="mt-2">Finish pour by 2 minutes</li>
                <li className="mt-2">
                  Pour should be finished by 3 minutes, if it takes longer make
                  the grind size coarser or if it takes
                </li>
                <li className="mt-2">
                  lesser time, make the grind size finer.
                </li>
                <li className="mt-2">Swirl the coffee and enjoy!</li>
              </ul>
            ) : (
              <ul className="list-disc pl-6">
                <li>
                  <span className="font-bold">Brew Temperature :</span> 85-95°C
                  (varies depending on roast profile)
                </li>
                <li className="mt-2">
                  <span className="font-bold">Brew Time :</span> 3 minutes
                </li>
                <li className="mt-2">
                  <span className="font-bold">Coffee :</span> 18 grams
                </li>
                <li className="mt-2">
                  <span className="font-bold">Grind Size:</span> medium ( like
                  sea salt )
                </li>
                <li className="mt-2">
                  Rinse your paper filter and discard the water
                </li>
                <li className="mt-2">
                  <span className="font-bold">Bloom :</span> 36 grams pour in
                  spiral motion
                </li>
                <li className="mt-2">
                  <span className="font-bold">2nd Pour :</span> at 45 seconds,
                  slow pour till 100 grams in spiral motion
                </li>
                <li className="mt-2">
                  <span className="font-bold">3rd Pour :</span> at 1:20 minutes,
                  slow pour till 150 grams
                </li>
                <li className="mt-2">Finish pour by 2 minutes</li>
                <li className="mt-2">
                  Add 120 grams of ice and swirl till it chills down.
                </li>
                <li className="mt-2">Serve on ice and enjoy!</li>
              </ul>
            )}
          </div>
        </div>
        <div className="hidden sm:flex sm:w-[38%] h-full items-center">
          <img src={v60} className="sm:h-[500px] ml-auto sm:-mt-12" />
        </div>
      </div>

      <div className="flex justify-between items-start w-[90%] sm:w-[70%] sm:h-[600px] mx-auto mt- 12 pb-12 sm:pb-0">
        <div className="sm:w-[38%] h-full hidden sm:flex items-center">
          <img src={french} className="h-[500px] mr-auto -mt-12" />
        </div>
        <div className="sm:w-[58%] text-white">
          <div className="frenchHeading font-anton text-[45.83px] text-center sm:text-left">
            FRENCH PRESS
          </div>
          <div className="sm:hidden sm:h-[500px] mr-auto mt-4 sm:-mt-12 overflow-hidden">
            <img src={french} className="object-fill" />
          </div>
          <div className="frenchLine hidden sm:block w-[19%] h-[2px] bg-white sm:-mt-1" />
          <div className="frenchText text-[16.5px] text-justify font-poppins font-light mt-8 ">
            <ul className="list-disc pl-6">
              <li>
                <span className="font-bold">Brew Temperature :</span> 80-99°C
                (varies depending on roast profile)
              </li>
              <li className="mt-2">
                <span className="font-bold">Brew Time :</span> 8-10 minutes
              </li>
              <li className="mt-2">
                <span className="font-bold">Coffee :</span> 22 grams
              </li>
              <li className="mt-2">
                <span className="font-bold">Grind Size:</span> coarse
              </li>
              <li className="mt-2">
                Preheat your French press with boiling water and discard the
                water.
              </li>
              <li className="mt-2">Add the coffee grounds to the chamber.</li>
              <li className="mt-2">
                Bloom with 50 grams of water and mix 3 times with a spoon.
              </li>
              <li className="mt-2">
                At 1 minute, add the remaining 280 grams of water and mix 3
                times.
              </li>
              <li className="mt-2">
                At 2:30 minutes, remove the crema and floating bits from top of
                it without disturbing the rest.
              </li>
              <li className="mt-2">
                Put on the plunger and wait for a total of 8 minutes.
              </li>
              <li className="mt-2">At 8 minutes, plunge down gently.</li>
              <li className="mt-2">Do not plunge till the bottom.</li>
              <li className="mt-2">
                Pour your coffee and leave around 15-20% in the french press as
                it contains bigger coffee particles.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center w-[90%] sm:w-[70%] sm:h-[600px] mx-auto mt- 12pb-12 sm:pb-0">
        <div className="sm:w-[58%] text-white">
          <div className="coldHeading font-anton text-[45.83px] text-center sm:text-left">
            COLD BREW
          </div>
          {/* <img
            src={coldBrew}
            className="sm:hidden sm:h-[500px] mx-auto mt-4 "
          /> */}
          <div className="sm:hidden sm:h-[500px] mx-auto mt-4  overflow-hidden">
            <img
              src={coldBrew}
              className="h- [550px] size-full object-fill mx-auto"
            />
          </div>
          <div className="coldLine w-[19%] h-[2px] bg-white -mt-1" />
          <div className="coldText text-[17.5px] text-justify font-poppins mt-8 ">
            <ul className="list-disc pl-6">
              <li>
                <span className="font-bold">Grind Size:</span> Coarse
              </li>
              <li className="mt-2">
                <span className="font-bold">Total Water:</span> 1 liter
              </li>
              <li className="mt-2">
                <span className="font-bold">Beans:</span> 100 grams
              </li>
              <li className="mt-2">
                <span className="font-bold">Time:</span> 16 hours
              </li>
              <li className="mt-2">
                Add water and ground beans in a glass container without leaving
                space for air.
              </li>
              <li className="mt-2">
                Close the air tight container and place it in the refrigerator.
              </li>
              <li className="mt-2">
                Strain this mixture using muslin cloth or filter paper after 16
                hours.
              </li>
              <li className="mt-2">Pour it on ice and enjoy!</li>
              <li className="mt-2">
                <span className="font-bold">Note:</span> You can store it for a
                week in the refrigerator. Just keep in mind to avoid exposing it
                to air and sunlight.
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden sm:flex w-[38%] overflow-hidden">
          <img
            src={coldBrew}
            className="h- [550px] size-full object-fill mx-auto"
          />
        </div>
      </div>

      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${aeropressBg})` }}
      >
        <div className="flex justify-between items-start w-[90%] sm:w-[70%] mx-auto mt-12 ">
          <div className="w-[48% w-full  text-white py-12">
            <div className="aeroHeading sm:w-[48%] font-anton text-[45.83px] ">
              AEROPRESS
            </div>
            <div className="aeroLine w-[9%] h-[2px] bg-white -mt-1" />
            <div className="sm:w-[48%] flex gap-4 mt-8">
              <button
                onClick={() => setColdState("hot-inverted")}
                className={`aero1 w-32 py-1 ${
                  coldState === "hot-inverted"
                    ? "bg-white text-black font-semibold"
                    : "bg-transparent text-white border-2 border-white"
                }`}
              >
                Hot Inverted
              </button>
              <button
                onClick={() => setColdState("hot-regular")}
                className={`aero2 w-32 py-1 ${
                  coldState === "hot-regular"
                    ? "bg-white text-black font-semibold"
                    : "bg-transparent text-white border-2 border-white"
                }`}
              >
                Hot Regular
              </button>
              <button
                onClick={() => setColdState("iced-regular")}
                className={`aero3 w-32 py-1 ${
                  coldState === "iced-regular"
                    ? "bg-white text-black font-semibold"
                    : "bg-transparent text-white border-2 border-white"
                }`}
              >
                Iced Regular
              </button>
            </div>
            <div className="aeroText w-[88%  text-[16.5px] text-justify flex flex-col sm:flex-row justify-between w-full  font-poppins font-light mt-8 ">
              {coldState === "hot-inverted" ? (
                <>
                  <ul className="list-disc sm:w-[48%] pl-6">
                    <li>
                      <span className="font-bold">Brew Temperature :</span>{" "}
                      85-90°C (varies depending on roast profile)
                    </li>
                    <li className="mt-2">
                      <span className="font-bold">Brew Time :</span> 2:30
                      minutes
                    </li>
                    <li className="mt-2">
                      <span className="font-bold">Coffee :</span> 18 grams
                    </li>
                    <li className="mt-2">
                      <span className="font-bold">Grind Size:</span> medium fine
                    </li>
                    <li className="mt-2">Rinse your paper filter</li>
                    <li className="mt-2">
                      Put your plunger into the chamber and invert it.
                    </li>
                    <li className="mt-2">
                      Preheat your chamber and discard the water.
                    </li>
                    <li className="mt-2">Add ground coffee to the chamber.</li>
                  </ul>
                  <ul className="list-disc sm:w-[48%] pl-6">
                    <li>
                      <span className="font-bold">Bloom :</span>Add 36 grams
                      water in 10 seconds and agitate 3 times till all coffee is
                      wet.
                    </li>
                    <li className="mt-2">
                      <span className="font-bold">2nd Pour :</span> at 45
                      seconds pour till 220 grams and agitate a few times.
                    </li>
                    <li className="mt-2">
                      At 1 minute, place a filter cap and remove excess air from
                      the chamber.
                    </li>
                    <li className="mt-2">
                      At 1:30 minutes, invert the aeropress on a cup.
                    </li>
                    <li className="mt-2">
                      At 1:45 minutes, start pressing gently till 2:15 minutes.
                    </li>
                    <li className="mt-2">Swirl the coffee and enjoy!</li>
                  </ul>
                </>
              ) : coldState === "hot-regular" ? (
                <>
                  <ul className="list-disc sm:w-[48%] pl-6">
                    <li>
                      <span className="font-bold">Brew Temperature :</span>{" "}
                      85-90°C (varies depending on roast profile)
                    </li>
                    <li className="mt-2">
                      <span className="font-bold">Brew Time :</span> 2:00
                      minutes
                    </li>
                    <li className="mt-2">
                      <span className="font-bold">Coffee :</span> 18 grams
                    </li>
                    <li className="mt-2">
                      <span className="font-bold">Grind Size:</span> medium fine
                    </li>
                    <li className="mt-2">Rinse your paper filter</li>
                    <li className="mt-2">
                      Preheat your chamber and discard the water.
                    </li>
                    <li className="mt-2">Fix your filter cap.</li>
                    <li className="mt-2">Add ground coffee to the chamber.</li>
                  </ul>
                  <ul className="list-disc sm:w-[48%] pl-6">
                    <li>
                      <span className="font-bold">Bloom :</span>Add 36 grams
                      water in 10 seconds and agitate 3 times till all coffee is
                      wet.
                    </li>
                    <li className="mt-2">
                      <span className="font-bold">2nd Pour :</span> at 45
                      seconds pour till 220 grams and agitate a few times.
                    </li>
                    <li className="mt-2">
                      Put on your plunger and pull back a little to create a
                      vacuum and stop dripping.
                    </li>
                    <li className="mt-2">
                      At 1:30 minutes, start pressing gently till 2:00 minutes.
                    </li>
                    <li className="mt-2">Swirl the coffee and enjoy!</li>
                  </ul>
                </>
              ) : (
                <>
                  <ul className="list-disc sm:w-[48%] pl-6">
                    <li>
                      <span className="font-bold">Brew Temperature :</span>{" "}
                      85-90°C (varies depending on roast profile)
                    </li>
                    <li className="mt-2">
                      <span className="font-bold">Brew Time :</span> 2:00
                      minutes
                    </li>
                    <li className="mt-2">
                      <span className="font-bold">Coffee :</span> 18 grams
                    </li>
                    <li className="mt-2">
                      <span className="font-bold">Grind Size:</span> medium fine
                    </li>
                    <li className="mt-2">Rinse your paper filter</li>
                    <li className="mt-2">
                      Preheat your chamber and discard the water.
                    </li>
                    <li className="mt-2">Fix your filter cap.</li>
                    <li className="mt-2">Add ground coffee to the chamber.</li>
                  </ul>
                  <ul className="list-disc sm:w-[48%] pl-6">
                    <li>
                      <span className="font-bold">Bloom :</span>Add 36 grams
                      water in 10 seconds and agitate 3 times till all coffee is
                      wet.
                    </li>
                    <li className="mt-2">
                      <span className="font-bold">2nd Pour :</span> at 45
                      seconds pour till 170 grams and agitate a few times.
                    </li>
                    <li className="mt-2">
                      Put on your plunger and pull back a little to create a
                      vacuum and stop dripping.
                    </li>
                    <li className="mt-2">
                      At 1:30 minutes, start pressing gently till 2:00 minutes.
                    </li>
                    <li className="mt-2">Pour this on 100 grams of ice.</li>
                    <li className="mt-2">Swirl the coffee and enjoy!</li>
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
