"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

function Contact() {
  return (
    <div className="w-full h-screen overflow-hidden flex justify-center items-center">
      <div>
        <h1 className="text-5xl font-medium z-10">This is a Contact Us Section</h1>
        <input
          type="text"
          placeholder="Enter Your Name"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 px-4 py-2"
        />
        <input type="email" placeholder="Email Address" className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 px-4 py-2" />
        <input type="submit" value={"SUBMIT"} className="text-center text-black rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-white placeholder:text-neutral-700 px-4 py-2 cursor-pointer" />
      </div>
      <BackgroundBeams/>
    </div>
  )
}

export default Contact
