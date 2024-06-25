import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import scrollTrigger from "gsap/ScrollTrigger";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

gsap.registerPlugin(scrollTrigger);

import emailjs from "@emailjs/browser"

import heroBg from "../../assets/images/contact/heroBg.png";
import instagram from "../../assets/images/icons/instagram.png";

const Contact = () => {

  const form1 = useRef();
  const form2 = useRef();

  const isFormEmpty = (formCheck) => {
    const form = formCheck.current;
    const inputs = form.querySelectorAll('input');
    for (let input of inputs) {
      if (input.value.trim() === '') {
        return true; // Form is empty
      }
    }
    return false; // Form is not empty
  };

  const clearForm = (formCheck) => {
    const form = formCheck.current;
    const inputs = form.querySelectorAll('input');
    for (let input of inputs) {
      input.value = ''; // Clear the input value
    }
  };

  const sendEmail1 = (e) => {
    e.preventDefault();

    if(isFormEmpty(form1)){
      toast.error('Please enter all fields to proceed');
      return;
    }

    emailjs
      .sendForm('service_9kn7lba', 'template_u10ohs4', form1.current, {
        publicKey: '-KDVszjN4YcTjH4PI',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('Message sent succesfully!');
          clearForm(form1)
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Unable to send message, please try again later');
        },
      );
  };

  const sendEmail2 = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9kn7lba', 'template_jovjiva', form2.current, {
        publicKey: '-KDVszjN4YcTjH4PI',
      })
      .then(
        () => {
          // console.log('SUCCESS!');
          toast.success('Message sent succesfully!');
          clearForm(form2)
        },
        (error) => {
          toast.error('Unable to send message, please try again later');
        },
      );
  };

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
    gsap.from(".homeText3", {
      scrollTrigger: ".homeText1",
      y: 50,
      ease: "circ",
      opacity: 0,
      delay: 0.8,
    });

    gsap.from(".line1", {
      scrollTrigger: {
        trigger: ".line1",
        start: "top 75%",
      },
      ease: true,
      width: 0,
      opacity: 0,
      delay: 0,
      duration: 0.6,
    });
    gsap.from(".formHeading1", {
      scrollTrigger: ".formHeading1",
      y: 50,
      ease: "circ",
      opacity: 0,
      delay: 0.4,
    });
    gsap.from(".form1", {
      scrollTrigger: ".form1",
      y: 50,
      ease: "circ",
      opacity: 0,
      delay: 0.6,
    });
    gsap.from(".text1", {
      scrollTrigger: ".text1",
      y: 50,
      ease: "circ",
      opacity: 0,
      delay: 0.2,
    });

    gsap.from(".line2", {
      scrollTrigger: {
        trigger: ".line2",
        start: "top 75%",
      },
      ease: true,
      width: 0,
      opacity: 0,
      delay: 0,
      duration: 0.6,
    });
    gsap.from(".formHeading2", {
      scrollTrigger: ".formHeading2",
      y: 50,
      ease: "circ",
      opacity: 0,
      delay: 0.4,
    });
    gsap.from(".formText2", {
      scrollTrigger: ".formText2",
      y: 50,
      ease: "circ",
      opacity: 0,
      delay: 0.4,
    });
    gsap.from(".form2", {
      scrollTrigger: ".form2",
      y: 50,
      ease: "circ",
      opacity: 0,
      delay: 0.6,
    });

    gsap.from(".cat1", {
      scrollTrigger: {
        trigger: ".aero1",
        start: "top 75%",
      },
      y: 30,
      opacity: 0,
      stagger: 0.05,
      delay: 0.6,
      duration: 0.2,
    });
    gsap.from(".cat2", {
      scrollTrigger: {
        trigger: ".aero1",
        start: "top 75%",
      },
      y: 30,
      opacity: 0,
      stagger: 0.05,
      delay: 0.8,
      duration: 0.2,
    });
    gsap.from(".cat3", {
      scrollTrigger: {
        trigger: ".aero1",
        start: "top 75%",
      },
      y: 30,
      opacity: 0,
      stagger: 0.05,
      delay: 1,
      duration: 0.2,
    });

    gsap.from(".img1", {
      scrollTrigger: ".img1",
      x: -50,
      ease: "circ",
      opacity: 0,
      delay: 1,
    });
    gsap.from(".img2", {
      scrollTrigger: ".img2",
      x: 50,
      ease: "circ",
      opacity: 0,
      delay: 1,
    });

    gsap.from(".img3", {
      scrollTrigger: ".img3",
      x: -50,
      ease: "circ",
      opacity: 0,
      delay: 0.3,
    });
    gsap.from(".img4", {
      scrollTrigger: ".img4",
      x: 50,
      ease: "circ",
      opacity: 0,
      delay: 0.3,
    });

    gsap.from(".img5", {
      scrollTrigger: ".img5",
      x: -50,
      ease: "circ",
      opacity: 0,
      delay: 0.2,
    });
    gsap.from(".img6", {
      scrollTrigger: ".img6",
      x: 50,
      ease: "circ",
      opacity: 0,
      delay: 0.2,
    });

    gsap.from(".img7", {
      scrollTrigger: ".img7",
      x: -50,
      ease: "circ",
      opacity: 0,
      delay: 0.2,
    });
    gsap.from(".img8", {
      scrollTrigger: ".img8",
      x: 50,
      ease: "circ",
      opacity: 0,
      delay: 0.2,
    });
  });
  return (
    <div className="main-screen font-poppins text-white">
      <ToastContainer />
      <div
        className="flex flex-col items-center justify-center h-[500px] sm:h-[500px] w-full bg-cover bg-center text-white text-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="homeText1 text-[74.16px] font-anton">CONTACT US</div>
        <div className="homeText2 text-[20.6px] md:w-[60%] mt-4 font-base">
          For any questions or feedback related to our cafes, our coffee, or our
          website, please feel free to fill out the contact form below. We aim
          to respond to all inquiries within 24 business hours.
        </div>
        <a href="https://www.instagram.com/coffeetherapyinc?igsh=NWhkdmpsa244c2l1" target="blank" className="homeText3 flex justify-center items-center gap-1 text-xl mt-4">
          <img src={instagram} className="mt-1 size-5" />
          <div className="text-[18.6px] font-base">@coffeetherapyinc</div>
        </a>
      </div>

      <div className="mt-12">
        <div className="w-[90%] sm:w-[60%] mx-auto flex flex-col sm:flex-row justify-between gap-4">
          <div className="sm:w-[55%]">
            <div className="line1 w-full h-[1.5px] bg-white mt-" />
            <div className="formHeading1 text-[24.83px] mt-2">
              PERSONAL DETAILS
            </div>
          </div>
          <form ref={form1} className="form1 sm:w-[45%] px-8 py-8 border">
            <div className="mt-">
              <div  className="text-[14px]">Name</div>
              <input
                name="from_name"
                className="bg-transparent w-full mt-2 border border-[#676767] placeholder:text-[#676767] px-2 py-2 rounded-[4px] text-white"
                placeholder="Enter your name"
              />
            </div>
            <div className="mt-4">
              <div className="text-[14px]">Email</div>
              <input
                name="user_email"
                className="bg-transparent w-full mt-2 border border-[#676767] placeholder:text-[#676767] px-2 py-2 rounded-[4px] text-white"
                placeholder="Enter your email"
              />
            </div>
            <div className="mt-4">
              <div className="text-[14px]">Phone Number</div>
              <input
                name="phone" 
                className="bg-transparent w-full mt-2 border border-[#676767] placeholder:text-[#676767] px-2 py-2 rounded-[4px] text-white"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="mt-4">
              <div className="text-[14px]">Message</div>
              <input
                name="message" 
                className="bg-transparent w-full mt-2 border border-[#676767] placeholder:text-[#676767] px-2 py-2 rounded-[4px] text-white"
                placeholder="Your Message"
              />
            </div>

            <div className="flex justify-center mt-8">
              <button onClick={sendEmail1} class="contact3 group relative m-1 cursor-pointer overflow-hidden  border  border-white px-8 py-[6px]">
                <span class="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-white transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"></span>
                <span class="ease relative text-white transition duration-300 group-hover:text-[#05060A] font-semibold">Submit</span>
              </button>
            </div>
          </form>
        </div>
        <div className="text1 w-[90%] sm:w-[60%] mx-auto mt-12 text-[20.32px] font-light">
          Are you interested in joining our growing community and becoming a
          Coffee Therapy Inc. franchise owner? We're passionate about sharing
          our love of coffee and creating vibrant community spaces.
        </div>
        <div className="w-[90%] sm:w-[60%] mt-12 mx-auto flex flex-col sm:flex-row justify-between gap-4">
          <div className="sm:w-[55%]">
            <div className="line2 w-full h-[1.5px] bg-white mt-" />
            <div className="formHeading2 text-[24.83px] mt-2">
              SCHEDULE A DISCOVERY CALL
            </div>
            <div className="formText2 text-[15.28px]  sm:text-[16.5px] mt-2">
              Speak directly with a member of our franchise development team to
              discuss your entrepreneurial goals
            </div>
          </div>
          <form ref={form2} className="form2 sm:w-[45%] px-8 py-8 border">
            <div className="mt-">
              <div className="text-[14px]">Name</div>
              <input
                className="bg-transparent w-full mt-2 border border-[#676767] placeholder:text-[#676767] px-2 py-2 rounded-[4px] text-white"
                placeholder="Enter your name"
              />
            </div>
            <div className="mt-4">
              <div className="text-[14px]">Email</div>
              <input
                className="bg-transparent w-full mt-2 border border-[#676767] placeholder:text-[#676767] px-2 py-2 rounded-[4px] text-white"
                placeholder="Enter your email"
              />
            </div>
            <div className="mt-4">
              <div className="text-[14px]">Phone Number</div>
              <input
                name="phone"
                className="bg-transparent w-full mt-2 border border-[#676767] placeholder:text-[#676767] px-2 py-2 rounded-[4px] text-white"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="mt-4">
              <div className="text-[14px]">Occupation</div>
              <input
                name="occupation"
                className="bg-transparent w-full mt-2 border border-[#676767] placeholder:text-[#676767] px-2 py-2 rounded-[4px] text-white"
                placeholder="Occupation"
              />
            </div>
            <div className="flex gap-2 mt-6 mb-2 items-center">
              <div className="text-[14px] mr-4">Type of Franchise</div>
              {
                // First radio
              }
              <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                <input
                  className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-white dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                  type="radio"
                  name="franchise_type"
                  id="inlineRadio1"
                  value="QSR"
                />
                <label
                  className="text-[14px] mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                  htmlFor="inlineRadio1"
                >
                  QSR
                </label>
              </div>
              {
                // Second radio
              }
              <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                <input
                  className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-white dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                  type="radio"
                  name="franchise_type"
                  id="inlineRadio2"
                  value="CAFE"
                />
                <label
                  className="text-[14px] mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                  htmlFor="inlineRadio2"
                >
                  CAFE
                </label>
              </div>
            </div>
            <div className="mt-4">
              <div className="text-[14px]">Location/City</div>
              <input
                name="location"
                className="bg-transparent w-full mt-2 border border-[#676767] placeholder:text-[#676767] px-2 py-2 rounded-[4px] text-white"
                placeholder="Enter your Location/City"
              />
            </div>
            <div className="mt-4">
              <div className="text-[14px]">
                Area Available (In square feet.)
              </div>
              <input
                name="area_available"
                className="bg-transparent w-full mt-2 border border-[#676767] placeholder:text-[#676767] px-2 py-2 rounded-[4px] text-white"
                placeholder="Enter area available"
              />
            </div>
            <div className="flex gap-2 mt-6 items-center">
              <div className="text-[14px] mr-4">Area Space</div>
              {
                // First radio
              }
              <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                <input
                  className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-white dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                  type="radio"
                  name="area_space"
                  id="inlineRadio3"
                  value="Personal"
                />
                <label
                  className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                  htmlFor="inlineRadio3"
                >
                  Personal
                </label>
              </div>
              {
                // Second radio
              }
              <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                <input
                  className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-white dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                  type="radio"
                  name="area_space"
                  id="inlineRadio4"
                  value="Rented"
                />
                <label
                  className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                  htmlFor="inlineRadio4"
                >
                  Rented
                </label>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <button onClick={sendEmail2} class="contact3 group relative m-1 cursor-pointer overflow-hidden  border  border-white px-8 py-[6px]">
                <span class="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-white transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"></span>
                <span class="ease relative text-white transition duration-300 group-hover:text-[#05060A] font-semibold">Submit</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
