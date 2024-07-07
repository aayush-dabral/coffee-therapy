import React, { useState } from 'react'
import logo from "../../assets/images/ctLogo.png";
import { navBarMenuItems } from '../../utils/routes';

import menuOpen from "../../assets/images/icons/openMenu.png"
import cross from "../../assets/images/icons/cross.png"

const Header = () => {
    // const pathname = usePathname();
    const [sideOpen, setSideOpen] = useState(false);
  
    const items = navBarMenuItems.map((item) => (
      <a
        className={`text-white leading-4 text-[1rem]] transition-all cursor-pointer group duration-300`}
        key={item.link}
        href={item.link}
      >
        {item?.title}
        <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
      </a>
    ));
  
    return ( 
      <div className="fixed bg-black bg-opacity-50 top-0 left-0 w-screen w-ful z-[999] flex justify-between items-center font-poppins text-white">
        
  
        {!sideOpen && (
          <a href='/' className="flex gap-2 md:w-1/ 3 items-center md:absolut md:top-0 md:left-[47.5% relative md:py-2  py-4 md:px-16 px-8">
            <img className="md:w-12 w-12" alt="logo" src={logo} />
            <div className='font-semibold'>COFFEE THERAPY ARTISAN</div>
          </a>
        )}

        <div className="md:flex hidden text-[15px] md:w-1/ 3 gap-x-12 md:py-2 py-4 md:px-8 px-8 mr-12">
          {items}
        </div>
  
        {!sideOpen && (
          <div
            className="md:hidden md:py-2 py-4 md:px-16 px-8 flex"
            onClick={() => setSideOpen(!sideOpen)}
          >
            <img src={menuOpen} className="text-white text-2xl" />
          </div>
        )}        
          <>
            <div className={`w-3/4 h-screen ${sideOpen ? 'max-w-[350px]' : 'max-w-0'} overflow-hidden bg-black absolute right-0 top-0 rounded-l-xl flex items-center flex-col ease-in-out duration-500 z-[999]`}>
              <div className="flex flex-row -reverse w-full justify-between items-center py-4 px-8">
                <div className="flex justify-center gap-y-6 flex-row-reverse items-center text-white font-bold text-md">
                  <img className="md:w-16 w-12" alt="logo" src={logo} />
                </div>
                <div onClick={() => setSideOpen(!sideOpen)}>
                  {/* <FaX className="text-white text-md" /> */}
                  <img src={cross} className='size-[18px]'/>
                </div>
              </div>
              <div className="flex flex-col gap-y-8 px-6 py-8 w-full items-start">
                {navBarMenuItems.map((item) => (
                  <a
                    className={`text-white flex justify-start gap-x-8 text-[1.2rem] items-center w-full px-4 py-2 leading-4 text-end bor der-b-2 bord er-white/50`}
                    key={item.link}
                    href={item.link}
                  >
                    <span>{item?.title}</span>
                  </a>
                ))}
              </div>
            </div>
            {sideOpen && (
            <div className=" w-screen h-screen bg-black/40 absolute top-0 left-0 pointer-events-none" />
            )}
          </>
        {/* )} */}
      </div>
    );
}

export default Header
