import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-[#000000] h-full w-full text-white px-24 py-16">
      <div className="flex justify-center gap-20 ">
        <div className=" w-1/2">
          <img src="/footer-logo.svg" alt="" />
          <p className="font-poppins text-sm text-[#FFFFFF] my-8">
            Blackrose Club targets the most active and technology savvy target
            group in the DACH region and will later expand to serve the global
            market.Blackrose Club targets the most active and technology savvy
            target group in the DACH region and will later expand to serve the
            global market.
          </p>
          <div className="flex justify-start gap-8 items-center">
            <Image src="/discord.svg" width={25} height={25} alt="Picture" />
            <Image src="/twitter.svg" width={25} height={25} alt="Picture" />
            <Image src="/instagram.svg" width={25} height={25} alt="Picture" />
            <Image src="/youtube.svg" width={25} height={25} alt="Picture" />
          </div>
        </div>
        <div className=" w-1/4">
          <div className="text-3xl font-light font-BakbakOne">Marketplace</div>
          <ul className="mt-8 flex flex-col gap-[2px] text-[#FFFFFF]">
            <li>Imprint</li>
            <li>Contact</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Become a Club Member</li>
            <li>become a shop owner</li>
            <li>become a investor</li>
          </ul>
        </div>
        <div className=" w-1/2 flex justify-between  flex-col">
          <div>
            <div className="text-3xl font-extralight font-BakbakOne">
              Head quater
            </div>
            <p className="mt-5">
              BLACKROSE CLUB LTD Victoria House, Suite 4138 Surrey Quays Road
              London SE16 7DX ,United Kingdom
            </p>
          </div>

          <p>
            Blackrose Club LtdPilotystr.3890402 NürnbergUser ID: DE 225883316
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center  ">
        <div className="font-BakbakOne font-thin">Copyright © 2022 Blackrose Club</div>
        
            <ul className="flex justify-center items-center gap-6 uppercase font-BakbakOne font-thin">
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
