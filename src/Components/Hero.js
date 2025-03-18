"use client";
import Image from "next/image";
import React from "react";

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

function Hero() {
  return (
    <div className="relative text-white md:mt-[80px] mt-[100px]">
      <div className="text-black md:absolute md:text-white md:top-40 md:left-20 md:w-[500px] z-10 mx-4 md:mx-0">
        <h1 className="text-2xl font-bold md:text-4xl mb-4 mr-20 mt-4 md:mt-0 md:mr-0">
          Say Goodbye to Leaks with Hassle-free{" "}
          <span className="text-[#FA9818]">waterproofing</span>{" "}
        </h1>
        <p className="hidden md:inline-block">
          Waterproofing made easy! No more dealing with leaks, cracks, or musty
          walls. Our trusted solutions protect your home from water damage,
          keeping it safe, strong, and stress-free for years to come.
        </p>
        <button className="bg-[#5033E2] text-white px-6 py-2 mt-4 rounded-md hidden md:inline-block text-lg">
          <a href="#contact">Get waterproofed</a>
        </button>
        <button className="bg-[#F1AC51] px-6 py-2 text-[16px] font-medium rounded-md md:hidden" onClick={() => scrollToSection("contact")}>
        Free consultation
        </button>
      </div>
      <Image
        src={"/hero.jpg"}
        height={400}
        width={400}
        quality={100}
        alt="hero image"
        className="h-60 w-90 relative md:block rounded-lg ml-4 mt-6 md:mt-0 md:ml-0 md:rounded-none md:mx-0 md:w-full md:h-auto z-0"
      />

      <div className="bg-[#2F2F2F99] bg-opacity-60 w-fit h-fit absolute md:bottom-16 md:right-24 md:flex items-center justify-evenly md:gap-x-10 md:px-4 md:py-6 p-2 left-4 bottom-0.5 rounded-lg md:left-auto">
        <div className="md:border-r-2 md:pr-8">
          <h1 className="text-4xl md:text-4xl font-medium">50+</h1>
          <p className="text-sm md:text-base">Satisfied clients</p>
        </div>
        <div className="hidden md:inline-block">
          <h1 className="text-4xl font-medium">1000+</h1>
          <p>Sq. Meters covered</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
