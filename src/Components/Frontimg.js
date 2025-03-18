"use client";
import Image from "next/image";
import React from "react";

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};


function Hero() {
  return (
    <div className="relative text-white mt-[100px]  md:mt-[80px]">
      <div className="text-black md:absolute md:text-white md:top-40 md:left-40 md:w-[600px] z-10 mx-4 md:mx-0">
        <h1 className="text-2xl font-bold md:text-4xl mb-4 mr-20 mt-4 md:mt-0 md:mr-0">
          <span className="text-[#FA9818]">Construction</span>{" "}
          Services That Turn Your Dream into a Reality!{" "}
        </h1>
        <p className="hidden md:inline-block font-inter md:text-[19px] md:py-4 text-[#C9C9C9]">
        From foundation to finishing, we bring your vision to life with expert craftsmanship, durable materials, and a commitment to excellence. Whether it's a new home, renovation, or structural work, we ensure a hassle-free construction experience.
        </p>
        <button className="bg-[#5033E2] text-white px-6 py-2 mt-4 rounded-md hidden md:inline-block text-lg">
          <a href="#contact">Construct your home</a>
        </button>
        <button className="bg-[#F1AC51] md:bg-[#5033E2] md:text-white px-6 py-2 text-[16px] font-medium rounded-md md:hidden" onClick={() => scrollToSection("contact")}>
          <a href="#contact">Free consultation</a>
        </button>
      </div>
      <Image
        src={"/main.jpg"}
        height={400}
        width={400}
        quality={100}
        alt="hero image"
        className="h-60 w-90 relative md:block rounded-lg ml-4 mt-6 md:mt-0 md:ml-0 md:rounded-none md:mx-0 md:w-full md:h-[600px] z-0"
      />

      <div className="bg-[#2F2F2F99] bg-opacity-60 w-fit h-fit absolute md:bottom-16 md:right-24 md:flex items-center justify-evenly md:gap-x-2 md:px-4 md:py-6 p-2 left-4 bottom-0.5 rounded-lg md:left-auto">
        <div className="hidden md:flex md:gap-2">
          <h1 className="text-7xl font-medium">₹</h1>
          <h1 className="text-7xl font-medium">1899</h1>
        </div>
        <div className="md:pr-2">
          <p className="md:hidden block text-[32px]">₹ 1899</p>
          <h1 className="text-[14px] md:text-xl font-medium">PER SQ.FT</h1>
          <h1 className="text-[14px] md:text-xl font-medium">ONWARDS</h1>
          <p className="text-[#A1A1A1] text-[12px] md:font-normal">Terms and Condition</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
