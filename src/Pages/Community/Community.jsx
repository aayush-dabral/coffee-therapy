import heroBg from "../../assets/images/community/heroBg.png";
import logo from "../../assets/images/community/logo.png";
import dummy1 from "../../assets/images/home/dummy1.png";
import dummy2 from "../../assets/images/home/dummy2.png";
import dummy3 from "../../assets/images/home/dummy3.png";
import dummy4 from "../../assets/images/home/dummy4.png";
import brew1 from "../../assets/images/community/brew1.png";
import brew2 from "../../assets/images/community/brew2.png";
import brew3 from "../../assets/images/community/brew3.png";
import brew4 from "../../assets/images/community/brew4.png";

import icon1 from "../../assets/images/community/icon1.png";
import icon2 from "../../assets/images/community/icon2.png";
import icon3 from "../../assets/images/community/icon3.png";
import icon4 from "../../assets/images/community/icon4.png";
import brewBg from "../../assets/images/community/brewBg.png";
import contactBg from "../../assets/images/home/contactBg.png";

import instagram from "../../assets/images/icons/instagram.png";
import alert from "../../assets/images/icons/alert.png";

const Community = () => {
  return (
    <div className="font-poppins">
      <div
        className="flex flex-col items-center pt-8 sm:pt-0 justify-center h-[550px] sm:h-[500px] w-full bg-cover bg-center text-white text-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="text-[49.44px] sm:text-[74.16px] font-anton">
          COFFEE CULTURE COLLECTIVE
        </div>
        <div className="text-[18.88px] sm:text-[23.6px] w-[90%] md:w-[70%] mt-4 font-base">
          Unlock the essence of coffee: Explore its origins, master espresso,
          pour perfection with V60 and Aeropress, chill with cold brew, and
          savor the simplicity of French press.
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center sm:w-[80%] mx-auto mt-12">
        <div className="w-[90%] sm:w-[58%] text-white">
          <div className="sm:w-[58%] font-anton leading-tight text-[45.83px] ">
            WE'RE MORE THAN JUST A PLACE TO GRAB A CUP OF COFFEE
          </div>
          <div className="w-[42%] sm:w-[32%] h-[2px] bg-white mt-4" />
          <div className="text-[17.5px] text-justify font-light sm:leading-loose mt-8 ">
            We're a community of coffee enthusiasts, neighbors, and friends who
            gather to connect, share experiences, and celebrate our love for all
            things coffee. Whether you're a seasoned coffee aficionado or just
            starting your coffee journey, we welcome you to join our vibrant
            community.
          </div>
        </div>
        <div className="sm:w-[38%]">
          <img src={logo} className="h-[300px] sm:h-[400px]" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-[90%] sm:w-[85%] mx-auto py-24 pb-20 text-white">
        <div className="text-center w-[90% sm:w-[70%]">
          <div className="font-anton leading-tight text-[30.55px sm: text-[45.83px]">
            FOLLOW US ON SOCIAL MEDIA
          </div>
          <div className="sm:hidden mx-auto w-[90%] h-[2px] bg-white mt-4" />
          <div className="text-[16.5px] text-center font-light leading-loose mt-4">
            Join the conversation and get a glimpse into our daily life! Share
            your photos using our hashtag #coffeetherapyinc Community and see
            yourself featured on our page.
          </div>
          <div className="flex justify-center items-center gap-1 text-xl mt-4">
            <img src={instagram} className="mt-1" />
            <div className="text-xl">@coffeetherapyinc</div>
          </div>
        </div>
        <div className="mt-12 flex w-full md:gap-8 justify-center">
          <img
            src={dummy1}
            className="size-[150px] min-[390px]:size-[180px] sm:size-[250px] hover:drop-shadow-xl transition-all"
          />
          <img
            src={dummy2}
            className="size-[150px] min-[390px]:size-[180px] sm:size-[250px] hover:drop-shadow-xl transition-all"
          />
          <img
            src={dummy3}
            className="hidden min-[900px]:block size-[250px] hover:drop-shadow-xl transition-all"
          />
          <img
            src={dummy4}
            className="hidden xl:block size-[250px] hover:drop-shadow-xl transition-all"
          />
        </div>
      </div>

      <div
        className="flex flex-col justify-center items-center mx-auto sm:py-24 pb-20 text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${brewBg})` }}
      >
        <div className="w-[80%] flex flex-col items-center sm:items-end">
          <div className="w-[58%] font-anton text-center sm:text-right leading-tight text-[45.83px] ">
            BREWING BONANZA
          </div>
          <div className="w-[170px] h-[2px] bg-white mt-4" />
        </div>
        <div className="w-[80%] sm:w-[80%] flex flex-col sm:flex-row justify-center gap-8 mt-12">
          <div className="flex flex-col sm:flex-row sm:w-1/2 items-center bg-[#1A1A1A]">
            <img src={brew1} className="sm:w-[40%] h-[280px] w-full" />
            <div className="sm:w-[60%] px-6 py-4 flex gap-4 flex-col items-center text-center text-[14px]">
              <img src={icon1} className="size-20 sm:size-16" />
              <div className="font-semibold">Brewing Basics Bonanza</div>
              <div className="mt-2 font-light ">
                Master the fundamentals of coffee brewing with this introductory
                session. Explore different brewing methods like pour-over,
                French press, and AeroPress, and learn how to optimize them for
                perfect extraction.
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:w-1/2 items-center bg-[#1A1A1A]">
            <img src={brew2} className="sm:w-[40%] h-[280px] w-full" />
            <div className="sm:w-[60%] px-6 py-4 flex gap-4 flex-col items-center text-center text-[14px]">
              <img src={icon2} className="size-20 sm:size-16" />
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
          <div className="flex flex-col sm:flex-row sm:w-1/2 items-center bg-[#1A1A1A]">
            <img src={brew3} className="sm:w-[40%] h-[280px] w-full" />
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

          <div className="flex flex-col sm:flex-row sm:w-1/2 items-center bg-[#1A1A1A]">
            <img src={brew4} className="sm:w-[40%] h-[280px] w-full" />
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
        <div className="w-[90%] sm:w-[80%] mx-auto flex flex-col sm:flex-row justify-between gap-4 items-center ">
          <div className="w-[90%] sm:w-[60%] text-center sm:text-left">
            <div className="font-anton text-[40.83px]">
              We'd love to hear from you!
            </div>
            <div className="w-[90%] sm:w-[70%] mx-auto sm:mx-0">
              Share your coffee stories, suggestions, or questions with us.
              We're always happy to connect with our community.
            </div>
            <div className="w-[90%] sm:w-[70%] mt-4 mx-auto sm:mx-0">
              #coffeetherapyinc
            </div>
          </div>
          <div className="flex flex-col items-center w-[90%] sm:w-[35%] max-w-[550px]">
            <div className="flex gap-4 items-center bg-white py-[6px] px-2 mt-4 w-[30% w-full">
              <img src={alert} className="size-3" />
              <input
                className="w-full bg-transparent outline-none placeholder:text-[#9D8781] text-[#9D8781]"
                placeholder="Your Email Address"
              />
            </div>
            <button className="px-8 py-[6px] bg-transparent border-2 mt-4">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
