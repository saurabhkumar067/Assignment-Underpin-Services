import React, { useState } from 'react'

function ServicesSection() {
    const [services, setServices] = useState([
        {
          img: "/user.svg",
          title: "Individualisation",
          content:
            "Unlock limitless possibilities in the Metaverse - a realm merging business and leisure. Be among the pioneers.",
        },
        {
          img: "/created.svg",
          title: "User Created Content",
          content:
            "Unlock limitless possibilities in the Metaverse - a realm merging business and leisure. Be among the pioneers.",
        },
        {
          img: "/income.svg",
          title: "Income Opportunities",
          content:
            "Unlock limitless possibilities in the Metaverse - a realm merging business and leisure. Be among the pioneers.",
        },
        {
          img: "/social.svg",
          title: "Social Media",
          content:
            "Unlock limitless possibilities in the Metaverse - a realm merging business and leisure. Be among the pioneers.",
        },
      ]);
  return (
    <div className="bg-[#141B22] h-screen w-full relative border-t border-[#4b4848] min-[320px]:h-full">
    <div className="bg-[url('/tech-bg-1.svg')] bg-no-repeat bg-top  py-10 bg-cover h-full w-full lg:px-20 xl:px-40">
      <div className="flex justify-center gap-28  min-[320px]:block min-[320px]:px-5 md:flex lg:px-0 lg:gap-10 lg:justify-center">
        <div className="text-white  w-1/3 min-[320px]:w-full md:w-2/3">

        {/*  */}
          <h3 className="text-4xl font-caudex font-semibold min-[320px]:text-3xl lg:text-4xl">
            Our Key Services
          </h3>
          <p className="font-poppins my-6 text-sm min-[320px]:text-xs lg:text-sm">
            We provides a secure and efficient key management solution,
            ensuring convenient access and peace of mind for individuals and
            businesses. Simplify your key handling with our reliable key
            duplication, storage, and tracking services.
          </p>
          <button className=" text-black bg-[#5bff6d] py-2 px-6 rounded-full text-sm font-bold tracking-wide min-[320px]:text-xs min-[320px]:px-5 xl:py-2 xl:px-6 xl:text-sm">
            Explore Services
          </button>
          <img src="/path.svg" alt="" className="absolute left-0 w-2/5 min-[320px]:hidden md:block" />
          <img src="/gradient-bg.svg" alt="" className="w-2/3 left-0 top-28 rounded-full blur-lg absolute min-[320px]:top-0 min-[320px]:w-full min-[320px]:-left-20" />
        </div>
        <div className="w-2/5 text-white min-[320px]:w-full min-[320px]:mt-5 md:mt-0 lg:w-2/3 ">
          <ul>
            {services.map((service, index) => {
              return (
              <li key={index} className="flex justify-between mb-7 items-start gap-3 bg-[#D9D9D905] rounded-lg px-4 py-6 min-[320px]:py-4">
                <img src={service.img} alt={service.title} className="w-[12%]" />
                <div>
                  <h5 className="font-caudex text-xl min-[320px]:text-lg">{service.title}</h5>
                  <p className="font-poppins mt-1 text-sm min-[320px]:text-xs">
                    {service.content}
                  </p>
                </div>
              </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ServicesSection