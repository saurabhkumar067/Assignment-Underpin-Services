import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-[#000000] h-full w-full text-white ">
      <div className="flex justify-center gap-20 px-24 py-16 min-[320px]:px-5 min-[320px]:block min-[320px]:py-10 lg:flex lg:px-20 xl:px-24 xl:py-16">
        <div className=" w-1/2 min-[320px]:w-full">
          <Image src="/footer-logo.svg" alt="picture" width={100} height={100} className="min-[320px]:w-2/3" />
          <p className="font-poppins text-sm text-[#FFFFFF] my-8 min-[320px]:my-4 min-[320px]:text-xs xl:text-sm xl:my-8">
            Blackrose Club targets the most active and technology savvy target
            group in the DACH region and will later expand to serve the global
            market.Blackrose Club targets the most active and technology savvy
            target group in the DACH region and will later expand to serve the
            global market.
          </p>
          <div className="flex justify-start gap-8 items-center ">
            <Image src="/discord.svg" width={25} height={25} alt="Picture" className="" />
            <Image src="/twitter.svg" width={25} height={25} alt="Picture" />
            <Image src="/instagram.svg" width={25} height={25} alt="Picture" />
            <Image src="/youtube.svg" width={25} height={25} alt="Picture" />
          </div>
        </div>
        <div className=" w-1/4 min-[320px]:w-full xl:w-1/4">
          <div className="text-3xl font-light font-BakbakOne min-[320px]:mt-8 min-[320px]:text-2xl xl:text-3xl xl:mt-0">Marketplace</div>
          <ul className="mt-8 flex flex-col gap-[2px] text-[#FFFFFF] min-[320px]:mt-4 min-[320px]:text-xs min-[320px]:gap-1 xl:text-sm">
            <li>Imprint</li>
            <li>Contact</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Become a Club Member</li>
            <li>become a shop owner</li>
            <li>become a investor</li>
          </ul>
        </div>
        <div className=" w-2/5 flex justify-between  flex-col min-[320px]:w-full">
          <div>
            <div className="text-3xl font-extralight font-BakbakOne min-[320px]:text-2xl min-[320px]:mt-8 xl:mt-0 xl:text-3xl">
              Head quater
            </div>
            <p className="mt-5 min-[320px]:mt-2 min-[320px]:text-xs xl:mt-5 xl:text-sm">
              BLACKROSE CLUB LTD Victoria House, Suite 4138 Surrey Quays Road
              London SE16 7DX ,United Kingdom
            </p>
          </div>

          <p className="min-[320px]:text-xs min-[320px]:mt-4 xl:mt-0 xl:text-sm">
            Blackrose Club LtdPilotystr.3890402 NürnbergUser ID: DE 225883316
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center text-sm bg-[#2B3238] px-24 py-5 min-[320px]:py-3 min-[320px]:px-0 min-[320px]:justify-center lg:justify-between lg:px-24 xl:py-5">
        <div className="font-BakbakOne font-thin min-[320px]:text-center min-[320px]:text-xs lg:text-start xl:text-sm">Copyright © 2022 Blackrose Club</div>
        
            <ul className="flex justify-center items-center gap-10 uppercase font-BakbakOne font-thin min-[320px]:hidden lg:flex">
                {["Home", "about", "roadmap","services","team"].map((item, index)=>{
                    return(
                <li key={index}>{item}</li>
                    )
                })}
            </ul>
        
      </div>
    </footer>
  );
}

export default Footer;
