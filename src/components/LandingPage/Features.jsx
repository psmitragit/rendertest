import React from 'react'
// import {asset} from 'vite-plugin-asset'
import logo1 from "../../assets/Homelogo/football.svg"
import logo2 from "../../assets/Homelogo/cup.svg"
import logo3 from "../../assets/Homelogo/users.svg"
import logo4 from "../../assets/Homelogo/easy.svg"
import logo5 from "../../assets/Homelogo/payment.svg"
import logo6 from "../../assets/Homelogo/security.svg"
import "../../styles/features.css"
const Features = () => {

  const features = [
    {
      id: 1,
      logo: logo1,
      title: "EveryThing Sports",
      text: "Your ultimate destination for sports. From live sports and breaking news to in-depth analysis, blogs & articles and merchandise, TWELVTH has it all."
    },
    {
      id: 2,
      logo: logo2,
      title: "Leagues & Games",
      text: "Experience the excitement of various leagues and sports under one roof. Follow your favourite teams and players across multiple competitions."
    },
    {
      id: 3,
      logo: logo3,
      title: "Community Hub",
      text: "Join a community of sports enthusiasts. Share your thoughts, engage in discussions, and connect with fellow fans through posts, blogs, and interactive features."
    },
    {
      id: 4,
      logo: logo4,
      title: "Easy to use",
      text: "Navigate our user-friendly platform with ease. Whether you're investing in player virtual stocks or managing your fantasy team, TWELVTH makes it simple."
    },
    {
      id: 5,
      logo: logo5,
      title: "Flexible & Fast payouts",
      text: "Enjoy the flexibility of no long-term commitments. Easily withdraw your earnings whenever you want, ensuring a hassle-free experience."
    },
    {
      id: 6,
      logo: logo6,
      title: "Fully Secured",
      text: "Our platform employs advanced encryption technologies and robust security protocols to ensure that all your personal and financial information is protected."
    }
  ]

  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mt-8 gap-10'>
        {features.map((feature) => (
          <div key={feature.id}
            className='bg-[#272727] w-full h-[280px] p-6 xl:p-10 flex flex-col transition-all duration-200 hover:scale-95 rounded-xl'
          >
            <div className={`card mx-auto flex flex-col gap-4 items-center`}>
              <div className='border-2 w-20 h-20 rounded-full p-3 bg-[#f1f2f4]'>
                <img src={feature.logo} />
              </div>
              <p className='text-[#f1f2f4] font-semibold text-xl -mt-2'>{feature.title}</p>
              <p className='text-sm text-[#f1f2f4]'>{feature.text}</p>
            </div>
          </div>      
        ))}
      </div>
    </div>
  )
}

export default Features