import React, { useState } from "react";
import { IoVolumeMuteOutline } from "react-icons/io5";
import { VscUnmute } from "react-icons/vsc";
import IntroVideo from "../assets/Videos/landingVideo.mp4";
import Features from "../components/LandingPage/Features";
import Modes from "../components/LandingPage/Modes";
import Footer from "../components/Footer";
import Mobile from "../components/LandingPage/Mobile";
import { NavLink } from 'react-router-dom';
import { PiX } from "react-icons/pi";
import { showToastMsg } from "../helpers";

const LandingPage = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [email, setEmail] = useState('');

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleJoinUsClick = async () => {
    if (email) {
      try {
        const response = await fetch('http://localhost:3000/api/emails/add-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
  
        if (response.ok) {
          showToastMsg("You have successfully joined team Twelvth","success");  
        } else {
          showToastMsg("Some Erorr occoured, please try again","error");
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      showToastMsg("Please enter an email address","error");
    }
  };  

  return (
    <div className="text-[#f1f2f4] bg-[#f1f2f4]">
      {/* Section-1 */}
      <section className="stadium-bg-image">
        <div className="lg:flex lg:flex-col font-900 bg-gradient-to-b from-[#151515] to-white/0  lg:bg-gradient-to-r lg:from-[#151515] lg:to-white/0 mt-16">
          <div className="lg:flex w-10/12 mx-auto pt-16">
            <div className="flex flex-col gap-3 md:gap-8 xl:w-7/120 lg:mt-10 mt:pb-0  pb-[50px]">
              <div className="text-3xl sm:text-[3rem] sm:leading-[50px] md:leading-[50px] lg:leading-[60px] font-bold lg:w-[70%]">
              MANAGE YOUR FANTASY TEAM AND INVEST IN PLAYER STOCKS
              </div>
              <p className="text-xl">
                First Ever Platform to Offer the Thrill of Investing and
                Excitement of Managing.
              </p>
              <input
                    type='Email'
                    name='Email'
                    id='Email'
                    placeholder='Enter Email'
                    className="p-2 px-4 rounded-md text-[#151515] bg-[#f1f2f4]"
                    style={{ width: '300px' }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
              <button
                onClick={handleJoinUsClick}
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden font-medium rounded-lg group bg-gradient-to-br from-[#96191D] to-[#96191D] focus:ring-1 focus:outline-none focus:ring-white w-fit hover:from-[#b82428] hover:to-[#b82428] hover:shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out"
              >
                <span className="relative px-6 py-1.5 transition-all ease-in duration-75 dark:bg-[#151515] rounded-md group-hover:bg-opacity-0">
                  Join Us
                </span>
              </button>
            </div>
            <div className="pb-[50px] lg:mt-0 flex justify-center">
              <Mobile />
            </div>
          </div>
          <div
            className="flexfont-bold text-center text-[1.4rem] xl:text-[4.5rem] bg-[#f1f2f4] text-[#960206] w-10/12 mx-auto rounded-[3rem] translate-y-[50%] sm:font-black font-bold">
            Where Passion Meets Profit!
          </div>
        </div>
      </section>

      {/* Section-2 */}
      <section className='lg:py-16 pb-16 lg:pb-28'>
        <div className='relative w-8/12 h-fit mx-auto mt-10 lg:mt-16 shadow-black shadow-[10px_-5px_50px_-5px] rounded-xl'>
          <video
            className="shadow-[15px_15px_15px_rgba(0,0,0)] cursor-pointer rounded-xl"
            loop
            autoPlay
            muted={isMuted}
            onClick={toggleMute}
          >
            <source src={IntroVideo} type="video/mp4" />
          </video>
          <button
            onClick={toggleMute}
            className="absolute bottom-4 right-4 bg-black px-4 py-2"
          >
            {isMuted ? (
              <IoVolumeMuteOutline size={24} />
            ) : (
              <VscUnmute size={24} />
            )}
          </button>
        </div>
      </section>

      {/* Section-3 */}
      <section className="bg-white text-[#151515] pb-20 rounded-b-[60px] sm:rounded-b-[90px] xl:rounded-b-[110px]">
        <div className="w-10/12 mx-auto py-10 flex flex-col">
          <div className="flex flex-col gap-y-[10px] py-3">
            <h1 className="lg:text-4xl text-3xl text-center text-[#960206] font-bold">
              FEATURES
            </h1>
            <div className="h-[1px] bg-[#151515] mx-auto w-full"></div>
            <div className="text-center text-xl font-bold">
              Discover TWELVTH
            </div>
          </div>
          <Features />
        </div>
      </section>

      {/* Section-4 */}
      <section className="w-10/12 mx-auto my-20">
        <div className="flex flex-col gap-y-[10px]">
          <h1 className="lg:text-4xl text-3xl text-[#960206] text-center font-bold">
            MODES
          </h1>
          <div className="h-[1px] bg-[#151515] w-full mx-auto"></div>
          <div className="text-center text-xl font-bold text-[#151515]">
            Ready to Try TWELVTH?
          </div>
        </div>
        <Modes />
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
