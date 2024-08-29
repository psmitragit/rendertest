import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { IoMdSend } from "react-icons/io";

const Footer = () => {
  const handleContactUsSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());
  };

  const icons = [
    {
      icon: FaXTwitter,
      link: "https://x.com/twelvth12_x",
    },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/twelvth_ig?igsh=NTYzeGdrNWkyOHIx",
    },
    {
      icon: FaTiktok,
      link: "https://www.tiktok.com/@twelvth_tiktok",
    },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/company/twelvth/",  
    },
    {
      icon: FaFacebook,
      link: "https://www.facebook.com/profile.php?id=61560671766888",
    },
  ];

  const { isAuthenticated } = useAuth();

  return (
    <div className={`bg-gradient-to-tr from-black to-[#151515] border-b-[1px] border-[#f1f2f4]/20 ${isAuthenticated ? "mb-[71px] xl:mb-0" : ""} w-full pt-16`}>
      <div className='w-10/12 mx-auto border-[1px] border-[#f1f2f4] rounded-xl px-6 sm:px-16 lg:px-24 py-6 sm:py-10 mb-16'>
        <div className='flex flex-col lg:flex-row justify-between border-[#f1f2f4]/20 border-y-[1px]'>
          <div className='flex flex-col gap-3 justify-between'>
            <div className='lg:w-[45%] my-3 sm:my-6 lg:my-8 flex flex-col gap-3'>
              <h1 className='text-3xl font-bold'>Contact Us</h1>
              <p>Any question? We would be happy to help you!</p>
            </div>
            
            <div className='hidden xl:flex xl:flex-col gap-2 sm:gap-4 mt-6 justify-center mb-10'>
              <p className='w-[70%]'>Address Portland House Belmont Business Park Durham DH1 1TW</p>
              <div className='flex gap-2'>
                {icons.map((icon, index) => (
                  <div key={index} className='w-8 h-8 sm:w-[40px] sm:h-[40px] border-2 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-200'>
                    <NavLink to={icon.link} target='_blank'>
                      {<icon.icon />}
                    </NavLink>
                  </div>
                ))}
              </div>    
            </div>
          </div>

          <div className='lg:border-l-[1px] lg:w-[45%] lg:border-[#f1f2f4]/10 lg:pl-12 mb-10 xl:mb-0'>
            <form className='flex flex-col gap-5 my-0 lg:my-8' onSubmit={handleContactUsSubmit}>
              <label className="flex flex-col gap-2">
                <p className="">Name:</p>
                <input
                    type='text'
                    name='Name'
                    id='Name'
                    placeholder='Enter Name'
                    className="p-2 px-4 rounded-md text-[#151515] bg-[#f1f2f4]"
                    required
                />
              </label>
              <label className="flex flex-col gap-2">
                <p className="lable-style">Email:</p>
                <input
                    type='email'
                    name='Email'
                    id='Email'
                    placeholder='Enter Email'
                    className="p-2 px-4 rounded-md text-[#151515] bg-[#f1f2f4]"
                    required
                />
              </label>
              <label className="flex flex-col gap-2">
                <p className="lable-style">Phone Number <span className='text-sm text-gray-500'>(Optional)</span>:</p>
                <input
                    type='text'
                    name='PhoneNumber'
                    id='PhoneNumber'
                    placeholder='+44 1234567890'
                    className="p-2 px-4 rounded-md text-[#151515] bg-[#f1f2f4] text-sm"
                />
              </label>
              <label className="flex flex-col gap-2">
                <p className="lable-style">Message:</p>
                <textarea
                    name='Message'
                    id='Message'
                    placeholder='Enter Your message here...'
                    className="p-2 px-4 rounded-md text-[#151515] min-h-[100px] max-h-[300px] bg-[#f1f2f4]"
                    required
                />
              </label>
              <button 
                  type='submit'
                  className="w-full flex justify-center mt-6 rounded-xl bg-[#f1f2f4] p-2 font-bold text-[#151515] drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none"
              >
                <div className="flex flex-row items-center gap-2 py-[5px]">
                  <p>Send Message</p>
                  <IoMdSend />
                </div>  
              </button>
            </form>
          </div>
        </div>
        <div className='flex flex-col gap-2 sm:gap-4 mt-6 xl:hidden justify-center mb-10'>
          <p className='w-[70%]'>Address Portland House Belmont Business Park Durham DH1 1TW</p>
          <div className='flex gap-2'>
            {icons.map((icon, index) => (
              <div key={index} className='w-8 h-8 sm:w-[40px] sm:h-[40px] border-2 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-200'>
                <NavLink to={icon.link}>
                  {<icon.icon />}
                </NavLink>
              </div>
            ))}
          </div>    
        </div>
      </div>
      <div className='flex justify-center items-center h-[40px] border-t-[1px] border-[#f1f2f4]/20'>
        <p className='text-sm'> &copy; 2024 TWELVTH • All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
