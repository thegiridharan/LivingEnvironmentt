"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen is mobile size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const testimonials = [
    {
      bgColor: "bg-[#DDF5EF]",
      text: '"Reliable and professional service! The APP membrane waterproofing has completely solved our leakage issues. Our terrace is now well-protected, even during heavy rains."',
    },
    {
      bgColor: "bg-[#F5F5DD]",
      text: '"Highly satisfied with the waterproofing service! The team was professional, and the quality of work is excellent. I\'d definitely recommend them for anyone facing water leakage problems."',
    },
    {
      bgColor: "bg-[#DFDDF5]",
      text: '"Brick Bat Coba waterproofing worked wonders for our old building\'s terrace. No more water logging or cracks, and it even helps in keeping the place cooler!"',
    },
    {
      bgColor: "bg-[#F5DDE3]",
      text: '"We had constant seepage in our basement, but after using HDPE membrane waterproofing, the problem is gone! The team was efficient, and the results have been fantastic."',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="px-4 mx-6 py-8 md:mx-20 md:py-20 text-center border-b">
      <h1 className="font-bold text-3xl md:text-[40px]">
        What Our <span className="text-[#FC9713]">Clients Say</span>
      </h1>
      <p className="mt-4 w-72 mx-auto text-lg md:text-[20px]">
        Hear from our happy customers about their experience
      </p>

      {/* Desktop View */}
      <div className="hidden md:flex gap-x-12 mt-8 items-start">
        <div className="bg-[#DDF5EF] px-8 pb-12 py-6 rounded-lg">
          <Image
            src={"/double-quotes.png"}
            width={40}
            height={40}
            alt="double quotes"
            className="mb-6"
          />
          <p className="leading-tight">
            "Reliable and professional service! The APP membrane waterproofing
            has completely solved our leakage issues. Our terrace is now
            well-protected, even during heavy rains."
          </p>
        </div>
        <div className="bg-[#F5F5DD] px-8 mt-20 py-6 pb-16 rounded-lg">
          <Image
            src={"/double-quotes.png"}
            width={40}
            height={40}
            alt="double quotes"
            className="mb-6"
          />
          <p className="leading-tight">
            "Highly satisfied with the waterproofing service! The team was
            professional, and the quality of work is excellent. I'd definitely
            recommend them for anyone facing water leakage problems."
          </p>
        </div>
        <div className="bg-[#DFDDF5] px-8 mt-20 py-6 pb-12 rounded-lg">
          <Image
            src={"/double-quotes.png"}
            width={40}
            height={40}
            alt="double quotes"
            className="mb-6"
          />
          <p className="leading-tight">
            "Brick Bat Coba waterproofing worked wonders for our old building's
            terrace. No more water logging or cracks, and it even helps in
            keeping the place cooler!"
          </p>
        </div>
        <div className="bg-[#F5DDE3] px-8 py-6 pb-12 rounded-lg">
          <Image
            src={"/double-quotes.png"}
            width={40}
            height={40}
            alt="double quotes"
            className="mb-6"
          />
          <p className="leading-tight">
            "We had constant seepage in our basement, but after using HDPE
            membrane waterproofing, the problem is gone! The team was efficient,
            and the results have been fantastic."
          </p>
        </div>
      </div>

      {/* Mobile View with Slider */}
      <div className="md:hidden mt-8 relative">
        <div
          className={`${testimonials[currentSlide].bgColor} px-8 py-6 pb-12 rounded-lg`}
        >
          <Image
            src={"/double-quotes.png"}
            width={40}
            height={40}
            alt="double quotes"
            className="mb-6"
          />
          <p className="leading-tight">{testimonials[currentSlide].text}</p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 px-2">
          <button
            onClick={prevSlide}
            className="bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center mt-4 gap-x-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentSlide ? "bg-[#FC9713]" : "bg-gray-300"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
