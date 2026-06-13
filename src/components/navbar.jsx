import React from "react";

export default function Navbar(){
  return <>
  <div className="backdrop-blur sticky flex justify-between py-8 top-0 w-full px-32 items-center">
    <h1 className="text-4xl font-semibold">Aloe.</h1>
    <ul className="flex justify-between space-x-5">
        <li className="text-1xl">CLASSES</li>
        <li className="text-1xl">INSTRUCTIONS</li>
        <li className="text-1xl">ABOUT</li>
        <li className="text-1xl">CONTACT</li>
    </ul>
    <ul className="flex justify-between gap-1 ">
        <li><button className="text-1xl h-10 px-4 hover:text-orange-200">LOGIN</button></li>
        <li><button className="bg-black text-white hover:bg-orange-200 text-1xl h-10 px-4 border-0 rounded-full ">MEMBERSHIP</button></li>
    </ul>
  </div>
  </>
}