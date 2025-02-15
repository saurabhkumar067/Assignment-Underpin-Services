"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";

function Navbar() {
  const [humburgur, setHumburgur] = useState(false)
  return (
    <nav className="flex justify-between items-center bg-[#141B22] relative z-10 min-[320px]:py-3 md:py-0">
      <span className='text-white z-50 min-[320px]:ml-3 md:hidden' onClick={()=> setHumburgur((prev)=> !prev)}>{humburgur?<RxCross1 className='text-xl' />:<HiOutlineBars3CenterLeft className='text-xl' />}</span>
    <div className="bg-[#5bff6d] py-5 text-end pl-32 w-1/4 rounded-br-full min-[320px]:hidden md:block md:w-1/4 md:pl-10 md:py-4 xl:pl-24">
      <Image src="/logo.svg" alt="Logo" width={140} height={100} className='min-[320px]:hidden md:block md:w-[80%] xl:w-[70%]'/>
    </div>
    <ul className={`uppercase flex justify-between text-white gap-9 text-sm font-semibold ${humburgur?"flex flex-col absolute top-0 min-[320px]:justify-center backdrop-blur-sm bg-[#3f3939a8] w-full h-screen items-center":"hidden"} md:flex md:text-xs xl:text-sm`}>
      <li>Home</li>
      <li>About</li>
      <li>Roadmap</li>
      <li>Services</li>
      <li>Team</li>
    </ul>
    <button className="uppercase bg-[#5bff6d] rounded-full py-2 px-6 font-semibold text-sm mr-10 min-[320px]:py-1 min-[320px]:px-4 min-[320px]:text-[10px] min-[320px]:mr-0 lg:text-sm lg:px-6 lg:py-2 xl:mr-5 2xl:mr-10">Become a shop owner</button>
  </nav>
  )
}

export default Navbar