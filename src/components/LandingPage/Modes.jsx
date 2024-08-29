import React from 'react'
import image1 from "../../assets/Images/Investor.png"
import image2 from "../../assets/Images/Manager.png"
const Modes = () => {

  const modes = [
    {
      id: 1,
      image: image1,
      title: "INVESTOR Mode",
      description: "Unleash Your Inner Investor! Trade virtual stocks of your favorite players. Buy or sell player virtual stocks to maximize your profits using your skills and knowledge about the game, based on player performance and market demand. On different game weeks, you can participate in portfolio competitions to showcase your knowledge and skills."
    },
    {
      id: 2,
      image: image2,
      title: "MANAGER Mode",
      description: "Be the Mastermind Behind the Winning Team! Create and manage your fantasy team. Compete in single-match competitions with other users using custom lineups and strategic substitutions to earn rewards. You can even create your own league to compete with friends and family, making every game more thrilling."
    }
  ]

  return (
    <div>
      <div className='grid grid-cols-1 xl:grid-cols-1 gap-x-5 xl:gap-x-20 gap-y-10 mt-8 '>
        {modes.map((mode) => (
          <div key={mode.id}
          className={`bg-white text-[#151515] rounded-xl py-8 px-8 sm:px-6 sm:flex justify-center items-between gap-10 ${mode.id==2 ? "flex-row-reverse" : ""}`}
          >
            <div className='sm:flex sm:flex-col-reverse gap-x-10 '>
              <img src={mode.image} className='sm:w-[200px] xl:w-[270px]'/>
              <p className='xl:hidden flex flex-col text-2xl xl:text-2xl font-bold text-[#960206] text-center lg:text-left mb-6'>{mode.title}</p>
            </div>
            <div className='sm:w-[60%] font-normal flex flex-col sm:justify-between'>
              <div>
              <p className='hidden xl:flex xl:flex-col text-2xl xl:text-2xl font-bold text-[#960206] text-center lg:text-left mb-6'>{mode.title}</p>
                <div className='xl:text-[1.10rem]'>
                  <span className='font-bold'>{mode.description.split('.')[0]}.</span>
                  {mode.description.split('.').slice(1).join('.')}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Modes