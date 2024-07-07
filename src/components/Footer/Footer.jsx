import React from 'react'
import footerBg from "../../assets/images/backgrounds/footerBg.png"
import logo from "../../assets/images/ctLogo.png";
import { navBarMenuItems } from '../../utils/routes';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate()

  const items = navBarMenuItems.map((item) => (
    // <a
    //   className={`text-white leading-4 text-[1rem]] transition-all cursor-pointer group duration-300`}
    //   key={item.link}
    //   href={item.link}
    // >
    //   {item?.title}
    //   <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
    // </a>
    <a 
      className='text-sm sm:text-base transition-all cursor-pointer group duration-300'
      key={item.link}
      href={item.link}  
    >
      {item?.title}
      <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
    </a>
  ));
  return (
    <div
        className='flex flex-col gap-8 items-center bg-center bg-cover pt-12 text-white font-poppins'
        style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div onClick={() => navigate("/")} className='flex justify-center items-center cursor-pointer gap-4 text-xl sm:text-3xl font-semibold'>
        <img src={logo} className='size-[60px] sm:size-[75px]'/>
        <div>COFFEE THERAPY ARTISAN</div>
      </div>
      <div className='flex flex-co sm:flex-row justify-center gap-4 sm:gap-12 flex-wrap px-4'>
        {items}
        {/* <div className='text-sm sm:text-base transition-all cursor-pointer group duration-300'>
            PRODUCTS
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
        </div>
        <div className='text-sm sm:text-base transition-all cursor-pointer group duration-300'>
            COMMUNITY
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
        </div>
        <div className='text-sm sm:text-base transition-all cursor-pointer group duration-300'>
            LEARN
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
        </div>
        <div className='text-sm sm:text-base transition-all cursor-pointer group duration-300'>
            GALLERY
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
        </div>
        <div className='text-sm sm:text-base transition-all cursor-pointer group duration-300'>
            CONTACT
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
        </div> */}
      </div>
      <div className='justify-center text-sm sm:text-base text-center pt-12 pb-4'>© 2024 Coffee Therapy Artisan All Rights Reserved.</div>
    </div>
  )
}

export default Footer