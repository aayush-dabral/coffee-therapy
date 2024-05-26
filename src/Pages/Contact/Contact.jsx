import heroBg from "../../assets/images/contact/heroBg.png";
import instagram from "../../assets/images/icons/instagram.png";

const Contact = () => {
  return (
    <div className="font-poppins text-white">
      <div
        className="flex flex-col items-center justify-center h-[500px] sm:h-[500px] w-full bg-cover bg-center text-white text-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="text-[74.16px] font-anton">CONTACT US</div>
        <div className="text-[20.6px] md:w-[60%] mt-4 font-base">
          For any questions or feedback related to our cafes, our coffee, or our
          website, please feel free to fill out the contact form below. We aim
          to respond to all inquiries within 24 business hours.
        </div>
        <div className="flex justify-center items-center gap-1 text-xl mt-4">
          <img src={instagram} className="mt-1 size-5" />
          <div className="text-[18.6px] font-base">@coffeetherapyinc</div>
        </div>
      </div>

      <div className="mt-12">
        <div className="w-[90%] sm:w-[60%] mx-auto flex flex-col sm:flex-row justify-between gap-4">
          <div className="sm:w-[55%]">
            <div className="w-full h-[1.5px] bg-white mt-" />
            <div className="text-[24.83px] mt-2">PERSONAL DETAILS</div>
          </div>
          <div className="sm:w-[45%] px-8 py-8 border">
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
                className="bg-transparent w-full mt-2 border border-[#676767] placeholder:text-[#676767] px-2 py-2 rounded-[4px] text-white"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="mt-4">
              <div className="text-[14px]">Message</div>
              <input
                className="bg-transparent w-full mt-2 border border-[#676767] placeholder:text-[#676767] px-2 py-2 rounded-[4px] text-white"
                placeholder="Your Message"
              />
            </div>

            <div className="flex justify-center">
              <button className="px-8 py-[6px] bg-transparent border mt-8">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="w-[90%] sm:w-[60%] mx-auto mt-12 text-[20.32px] font-light">
          Are you interested in joining our growing community and becoming a
          Coffee Therapy Inc. franchise owner? We're passionate about sharing
          our love of coffee and creating vibrant community spaces.
        </div>
      </div>
    </div>
  );
};

export default Contact;
