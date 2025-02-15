
import React from 'react'
import { GoArrowRight } from "react-icons/go";

function HeroSection() {
  return (
    <div className="bg-[#12181E] h-full w-full bg-no-repeat bg-center relative ">
        <div className="flex justify-center flex-col items-center  h-[90vh] w-full  min-[320px]:h-[80vh] md:h-[90vh]">
      <img src="/gradient-bg.svg" alt="" className="w-2/3 left-[20%] rounded-[30%]  blur-lg absolute min-[320px]:top-0 min-[320px]:w-2/3 min-[320px]:left-16 md:left-[20%]" />
          <h1 className="text-6xl flex flex-col text-white items-center justify-center font-semibold font-caudex min-[320px]:text-3xl  min-[320px]:text-center md:text-4xl lg:text-5xl xl:text-6xl">
            <span>Seize Early</span>
            <span>
              Opportunities In The 
              <span className="text-[#6654f1]"> Metaverses</span> For
            </span>
            <span>Business & Leisure</span>
          </h1>
          <p className="w-1/2 text-xs text-center mt-5 text-white mb-8 font-caudex min-[320px]:w-[90%] md:w-2/3 xl:w-1/2 xl:text-xs">
            You Can Shop Your Favorite Products, Join And Organize Cultural And
            Sports Events, Sell Your Products In Your Own Metaverse, And Gain
            Yield In An Innvoative Growth Market.
          </p>
          <div className='min-[320px]:flex min-[320px]:justify-between min-[320px]:items-center'>
            <button className="mx-5 bg-[#5bff6d] py-2 px-6 rounded-full text-sm font-bold tracking-wide min-[320px]:text-xs min-[320px]:mx-2 min-[320px]:px-4 lg:text-sm lg:py-2 lg:px-6 lg:mx-5 ">
              Explore Services
            </button>
            <button className="mx-5 border border-white py-2 px-6 rounded-full text-sm font-semibold text-white tracking-wider min-[320px]:text-xs min-[320px]:mx-2 min-[320px]:px-4 lg:text-sm lg:py-2 lg:px-6 lg:mx-5">
              Contact Us
            </button>
          </div>
        </div>
        <div className="bg-[url('/bg-1.svg')] bg-no-repeat bg-center bg-contain w-full h-[80vh] min-[320px]:h-full ">
          <div className="flex  justify-around gap-7 w-full h-full px-40 min-[320px]:block min-[320px]:px-5 min-[320px]:pb-8 md:flex md:gap-4 xl:px-40">
            <div className="border border-[#ffffff66] text-white bg-[#00000014] shadow-[34.26px_4px_52.46px_0px_#00000014] backdrop-blur-sm p-8 rounded-2xl h-fit w-1/3 min-[320px]:w-full md:p-6">
              <h2 className="text-2xl font-orbitron font-semibold ">
                Become an investor
              </h2>
              <p className="font-poppins text-xs mt-3 mb-6">
                This feature is not available to everyone, but you can access it
                by requesting us.
              </p>
              <button className="flex justify-between items-center gap-2 font-semibold cursor-pointer">
                See Explained 
                <span>
                  <GoArrowRight />
                </span>
              </button>
            </div>
            <div className="border border-[#ffffff66] text-white bg-[#00000014] shadow-[34.26px_4px_52.46px_0px_#00000014] backdrop-blur-sm p-8 rounded-2xl h-fit w-1/3 self-center min-[320px]:w-full min-[320px]:mt-8 md:p-6">
              <h2 className="text-2xl font-orbitron font-semibold">
                Become a Club Member
              </h2>
              <p className="font-poppins text-xs mt-3 mb-6">
                Product Blackrose Club Shopowner costs 18.000€ net and includes
              </p>
              <ul className="list-disc font-poppins text-xs mb-6">
                <li>10 seminars on mindset, crypto, metaverse and NFT</li>
                <li>1 workshop on job opportunities in the Metaverse</li>
                <li>
                  Permission to enter the virtual Blackrose Club World to shop
                  products and visit events
                </li>
              </ul>
              <button className="flex justify-between items-center gap-2 font-semibold cursor-pointer">
                See Explained 
                <span>
                  <GoArrowRight />
                </span>
              </button>
            </div>
            <div className="border border-[#ffffff66] text-white bg-[#00000014] shadow-[34.26px_4px_52.46px_0px_#00000014] backdrop-blur-sm p-8 rounded-2xl h-fit w-1/3 mt-8 min-[320px]:w-full md:p-6 md:mt-0">
              <h2 className="text-2xl font-orbitron font-semibold">
                Become a Shop Owner
              </h2>
              <p className="font-poppins text-xs mt-3 mb-6">
                Product Blackrose Club Shopowner costs 18.000€ net and includes
              </p>
              <ul className="list-disc font-poppins text-xs mb-6">
                <li>All benefits of the Blackrose Club Member package</li>
                <li>Run your own virtual shop in the Blackrose Club World</li>
                <li>
                  Get 20% of the profits you generate in your virtual shop
                </li>
                <li>
                  Eligible for profit distribution from the advertising and
                  member pool
                </li>
              </ul>
              <button className="flex justify-between items-center gap-2 font-semibold cursor-pointer">
                See Explained 
                <span>
                  <GoArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default HeroSection