import heroBg from "../../assets/images/products/heroBg.png";
import downloadBg from "../../assets/images/products/downloadBg.png";
import qr from "../../assets/images/products/qr.png";

import zomato from "../../assets/images/icons/zomato.png";
import { useState } from "react";

const Products = () => {
  const [menuState, setMenuState] = useState("hot-coffee");
  return (
    <div className="font-poppins text-white">
      <div
        className="relative h-screen w-full bg-cover bg-center text-white font-poppins"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute left-[8%] sm:left-[10%] top-[35%] sm:top-[48%] transform -translate-y-1/2">
          <div className="text-[49.44px] sm:text-[74.16px] leading-none font-anton">
            IT’S NOT JUST
            <br />
            COFFEE. IT’S AN
            <br />
            <span className="flex items-center gap-6">EXPERIENCE.</span>
          </div>
          <button className="mt-8 px-6 py-1 flex items-center gap-2 text-[18px border-2 border-white">
            Order from
            <img src={zomato} className="w-16 mb-[2px]" />
          </button>
        </div>
      </div>

      <div className="bg-cover bg-center border mx-4 sm:m-8">
        <div className="flex justify-between items-start w-[90%] sm:w-[70%] px-2 sm:px-4 h-[700px mx-auto py-12 ">
          <div className="flex flex-col items-center text-center w-full  text-white py-8">
            <div className="w-[48% font-anton text-[38.83px] sm:text-[45.83px] ">
              CHERISH SOME OF OUR MOST POPULAR ITEMS
            </div>
            <div className="flex flex-co justify-center sm:flex-row gap-2 sm:gap-4 mt-4 flex-wrap">
              <button
                onClick={() => setMenuState("hot-coffee")}
                className={`w-[105px] sm:w-32 text-sm ${
                  menuState === "hot-coffee"
                    ? "bg-white text-black font-semibold"
                    : "bg-transparent text-white border-2 border-white"
                }`}
              >
                Hot Coffee
              </button>
              <button
                onClick={() => setMenuState("iced-coffee")}
                className={`w-[105px] sm:w-32 text-sm ${
                  menuState === "iced-coffee"
                    ? "bg-white text-black font-semibold"
                    : "bg-transparent text-white border-2 border-white"
                }`}
              >
                Iced Coffee
              </button>
              <button
                onClick={() => setMenuState("manual-brew")}
                className={`w-[105px] sm:w-32 text-sm ${
                  menuState === "manual-brew"
                    ? "bg-white text-black font-semibold"
                    : "bg-transparent text-white border-2 border-white"
                }`}
              >
                Manual Brew
              </button>
            </div>
            <div className="w-full sm:w-[78%]  text-[16.5px] text-justify flex flex-col sm:flex-row justify-center gap-8 sm:gap-24 font-poppins font-light my-16 ">
              {menuState === "hot-coffee" ? (
                <>
                  <ul className="sm:w-[36%] px-4 sm:pl-6">
                    <li className="list-item mt-4">
                      <div className="flex justify-between">
                        <div>DOPPIO</div>
                        <div>159</div>
                      </div>
                    </li>
                    <li className="list-item mt-4">
                      <div className="flex justify-between">
                        <div>AMERICANO</div>
                        <div>159</div>
                      </div>
                    </li>
                    <li className="list-item mt-4">
                      <div className="flex justify-between">
                        <div>CAPPUCCINO</div>
                        <div>159</div>
                      </div>
                    </li>
                    <li className="list-item mt-4">
                      <div className="flex justify-between">
                        <div>CAFE LATTE</div>
                        <div>159</div>
                      </div>
                    </li>
                    <li className="list-item mt-4">
                      <div className="flex justify-between">
                        <div>FLAT WHITE</div>
                        <div>159</div>
                      </div>
                    </li>
                    <li className="list-item mt-4">
                      <div className="flex justify-between">
                        <div>MACCHIATO</div>
                        <div>159</div>
                      </div>
                    </li>
                  </ul>
                  <ul className="sm:w-[36%] px-4 sm:pl-6">
                    <li className="list-item mt-4">
                      <div className="flex justify-between">
                        <div>PICOLLO LATTE</div>
                        <div>159</div>
                      </div>
                    </li>
                    <li className="list-item mt-4">
                      <div className="flex justify-between">
                        <div>LUNGO</div>
                        <div>159</div>
                      </div>
                    </li>
                    <li className="list-item mt-4">
                      <div className="flex justify-between">
                        <div>MOCHA DARK</div>
                        <div>159</div>
                      </div>
                    </li>
                    <li className="list-item mt-4">
                      <div className="flex justify-between">
                        <div>WHITE MOCHA</div>
                        <div>159</div>
                      </div>
                    </li>
                    <li className="list-item mt-4">
                      <div className="flex justify-between">
                        <div>HOT SPANISH LATTE</div>
                        <div>159</div>
                      </div>
                    </li>
                    <li className="list-item mt-4">
                      <div className="flex justify-between">
                        <div>NUTELLA MOCHA</div>
                        <div>159</div>
                      </div>
                    </li>
                  </ul>
                </>
              ) : menuState === "iced-coffee" ? (
                <>
                  <ul className="sm:w-[36%] px-4 sm:pl-6">
                    <li className="list-item mt-4">
                      <div className="flex justify-between">
                        <div>DOPPIO</div>
                        <div>159</div>
                      </div>
                    </li>
                    <li className="list-item mt-4">
                      <div className="flex justify-between">
                        <div>AMERICANO</div>
                        <div>159</div>
                      </div>
                    </li>
                    <li className="list-item mt-4">
                      <div className="flex justify-between">
                        <div>CAPPUCCINO</div>
                        <div>159</div>
                      </div>
                    </li>
                    <li className="list-item mt-4">
                      <div className="flex justify-between">
                        <div>CAFE LATTE</div>
                        <div>159</div>
                      </div>
                    </li>
                    <li className="list-item mt-4">
                      <div className="flex justify-between">
                        <div>FLAT WHITE</div>
                        <div>159</div>
                      </div>
                    </li>
                    <li className="list-item mt-4">
                      <div className="flex justify-between">
                        <div>MACCHIATO</div>
                        <div>159</div>
                      </div>
                    </li>
                  </ul>
                  <ul className="sm:w-[36%] px-4 sm:pl-6">
                    <li className="list-item mt-4">
                      <div className="flex justify-between">
                        <div>PICOLLO LATTE</div>
                        <div>159</div>
                      </div>
                    </li>
                    <li className="list-item mt-4">
                      <div className="flex justify-between">
                        <div>LUNGO</div>
                        <div>159</div>
                      </div>
                    </li>
                    <li className="list-item mt-4">
                      <div className="flex justify-between">
                        <div>MOCHA DARK</div>
                        <div>159</div>
                      </div>
                    </li>
                    <li className="list-item mt-4">
                      <div className="flex justify-between">
                        <div>WHITE MOCHA</div>
                        <div>159</div>
                      </div>
                    </li>
                    <li className="list-item mt-4">
                      <div className="flex justify-between">
                        <div>HOT SPANISH LATTE</div>
                        <div>159</div>
                      </div>
                    </li>
                    <li className="list-item mt-4">
                      <div className="flex justify-between">
                        <div>NUTELLA MOCHA</div>
                        <div>159</div>
                      </div>
                    </li>
                  </ul>
                </>
              ) : (
                <>
                  <ul className="sm:w-[36%] px-4 sm:pl-6">
                    <li className="list-item mt-4">
                      <div className="flex justify-between">
                        <div>DOPPIO</div>
                        <div>159</div>
                      </div>
                    </li>
                    <li className="list-item mt-4">
                      <div className="flex justify-between">
                        <div>AMERICANO</div>
                        <div>159</div>
                      </div>
                    </li>
                    <li className="list-item mt-4">
                      <div className="flex justify-between">
                        <div>CAPPUCCINO</div>
                        <div>159</div>
                      </div>
                    </li>
                    <li className="list-item mt-4">
                      <div className="flex justify-between">
                        <div>CAFE LATTE</div>
                        <div>159</div>
                      </div>
                    </li>
                    <li className="list-item mt-4">
                      <div className="flex justify-between">
                        <div>FLAT WHITE</div>
                        <div>159</div>
                      </div>
                    </li>
                    <li className="list-item mt-4">
                      <div className="flex justify-between">
                        <div>MACCHIATO</div>
                        <div>159</div>
                      </div>
                    </li>
                  </ul>
                  <ul className="sm:w-[36%] px-4 sm:pl-6">
                    <li className="list-item mt-4">
                      <div className="flex justify-between">
                        <div>PICOLLO LATTE</div>
                        <div>159</div>
                      </div>
                    </li>
                    <li className="list-item mt-4">
                      <div className="flex justify-between">
                        <div>LUNGO</div>
                        <div>159</div>
                      </div>
                    </li>
                    <li className="list-item mt-4">
                      <div className="flex justify-between">
                        <div>MOCHA DARK</div>
                        <div>159</div>
                      </div>
                    </li>
                    <li className="list-item mt-4">
                      <div className="flex justify-between">
                        <div>WHITE MOCHA</div>
                        <div>159</div>
                      </div>
                    </li>
                    <li className="list-item mt-4">
                      <div className="flex justify-between">
                        <div>HOT SPANISH LATTE</div>
                        <div>159</div>
                      </div>
                    </li>
                    <li className="list-item mt-4">
                      <div className="flex justify-between">
                        <div>NUTELLA MOCHA</div>
                        <div>159</div>
                      </div>
                    </li>
                  </ul>
                </>
              )}
            </div>
            <button className="  px-6 py-1 flex items-center gap-2 text-xs sm:text-base border-2 border-white">
              Order from
              <img src={zomato} className="w-16 mb-[2px]" />
            </button>
          </div>
        </div>
      </div>

      <div
        className="py-16 bg-center bg-cover text-white"
        style={{ backgroundImage: `url(${downloadBg})` }}
      >
        <div className="sm:w-[80%] mx-auto flex flex-col sm:flex-row text-center sm:text-left justify-between gap-4 items-center ">
          <div className="sm:w-[60%]">
            <div className="font-anton text-[40.83px]">
                DOWNLOAD OUR FULL MENU HERE
            </div>
            <div className="sm:w-[70%] mt-">
                OR SCAN THIS QR CODE!
            </div>
            <div className="sm:w-[70%] mt-6">
                #coffeetherapyinc
            </div>
          </div>
          <div className="flex flex-col items-center sm:w-[35%] max-w-[550px]">
            <img src={qr} className="size-28"/>
            <button className="px-8 py-[6px] bg-transparent border-2 mt-4">
              Download Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
