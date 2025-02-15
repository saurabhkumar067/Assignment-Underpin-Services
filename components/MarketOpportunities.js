import Image from 'next/image'
import React from 'react'

function MarketOpportunities() {
  return (
    <div className="bg-[#141B22] h-[85vh] w-full relative min-[320px]:h-full">
      <Image src="/gradient-bg.svg" alt="picture" width={100} height={100} className=" w-3/4 blur-lg left-10 rounded-full absolute z-30" />
      <div className="bg-[url('/Vector.svg')] bg-no-repeat bg-top  py-10 bg-cover h-full w-full ">
          <div className="bg-[#2C3737] h-3/5 w-full absolute bottom-10 min-[320px]:hidden md:block"></div>
          <div className="flex justify-center items-end gap-28 min-[320px]:block md:flex md:gap-0 lg:gap-20">
            <Image src="/vector-user.svg" alt="picture" width={100} height={100} className="z-40 w-1/4 min-[320px]:w-1/2 min-[320px]:mx-auto md:w-1/3 lg:w-1/4 lg:mx-0 xl:w-1/4" />
              <div className="text-white z-10 w-1/3 min-[320px]:w-full min-[320px]:px-5 md:w-1/2 xl:w-1/3">
                <h5 className="font-caudex text-3xl min-[320px]:text-2xl lg:text-3xl">Market Opportunities</h5>
                <p className="font-poppins font-semibold mt-9 mb-7 min-[320px]:mt-5 min-[320px]:text-xs md:mt-3 md:mb-5 lg:text-sm xl:mb-7 xl:mt-9">Blackrose Club targets the most active and technology savvy target group in the DACH region and will later expand to serve the global market.</p>
                <ul className="list-disc font-normal font-poppins text-xs mb-12 md:mb-0  ">
                <li className="my-3">Market – Around 66 million e-commerce customers in the DACH region spent over 100billion Euros on online purchases in 2021. Most popular orders were clothes, shoes, food and beauty products.</li>
                <li className="my-3">Target Group – The percentage of internet users in the EU who order products online aresteadily increasing over the years, with the biggest development occurring in the age group of 16-24 years.</li>
                <li className="my-3">Behavior – The reasons why consumers prefer online over physical orders are convenience, variety, competitive prices and 24/7 access</li>
              </ul>
              </div>
          </div>
      </div>
      </div>
  )
}

export default MarketOpportunities