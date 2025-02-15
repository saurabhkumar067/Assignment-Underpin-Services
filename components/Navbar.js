"use client"
import React from 'react'

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-[#141B22]">
    <div className="bg-[#5bff6d] py-5 text-end pl-32 w-1/4 rounded-br-full">
      <img src="/logo.svg" alt="Logo" width={140} height={100} />
    </div>
    <ul className="uppercase flex justify-between text-white gap-9 text-sm font-semibold">
      <li>Home</li>
      <li>About</li>
      <li>Roadmap</li>
      <li>Services</li>
      <li>Team</li>
    </ul>
    <button className="uppercase bg-[#5bff6d] rounded-full py-2 px-6 font-semibold text-sm mr-10">Become a shop owner</button>
  </nav>
  )
}

export default Navbar