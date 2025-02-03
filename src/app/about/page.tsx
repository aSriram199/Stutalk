"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";

function About() {
  return (
    <div className="w-full h-screen relative overflow-hidden flex justify-center items-center">
      <WavyBackground>
        <div className="text-7xl text-center font-medium">
          <h1>This is an About Section</h1>
        </div>
      </WavyBackground>
    </div>  
  )
}

export default About
