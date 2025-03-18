"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getData } from "@/firebase/firestoreService";

const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + " ...";
  }
  return text;
};


const Services = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openBox, setOpenBox] = useState(false);
  const [openBoxData, setOpenBoxData] = useState(null);

  const scrollToSection = (id) => {
    setOpenBox(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };


  useEffect(() => {
    const fetchData = async () => {
      const response = await getData("ServiceConstruction");

      setData(response);
      setLoading(false);
    };

    fetchData(); // Initial fetch
  }, []);

  const checkBox = (datum) => {
    setOpenBox(true);
    setOpenBoxData(datum);
  }

  return (
    <div id="services">
      <div className="font-inter grid grid-flow-row text-center mx-[20px] md:mx-0">
        <p className="text-[28px] md:text-[40px] font-bold pb-[10px]">
          Most Our <span className="bg-gradient-to-r from-[#EFAF5C] to-[#FC9713] bg-clip-text text-transparent">
            Popular Service
          </span>
        </p>
        <p className="text-[#000000B3] text-[20px] sm:block hidden">
          Our recent projects reflect our dedication to building with precision and excellence, ensuring that <br />
          every structure is durable, functional, and crafted to the highest standards.
        </p>
        <p className="text-[#000000B3] text-[18px] sm:hidden">
          Our recent projects reflect our dedication to building with precision and excellence.
        </p>
      </div>

      <div className="md:flex md:justify-evenly grid grid-flow-row gap-[25px] md:gap-0 py-[50px] items-center justify-center">
        {data && data.slice(0, 3).map((datum) => (
          <div key={datum.id} className="grid grid-flow-row font-inter h-[430px] w-[300px] md:h-[520px] md:w-[390px] bg-[#EEEEEE] gap-[15px] p-[25px] rounded-[10px]">
            <img
              src={`${datum.img}`}
              alt="Building Renovation"
              className="h-[200px] w-[350px] md:h-[280px] md:w-[340px] rounded-[10px]"
            />
            <p className="font-semibold text-[18px] md:text-[22px] h-[40px]">{datum.title}</p>
            <p className="text-[#000000B3] text-[15px] h-[80px] md:text-[17px] w-[250px] md:w-[350px]">{truncateText(datum.content, 10)}</p>
            <button onClick={() => checkBox(datum)} className="text-[#FC9713] text-start text-[18px] md:text-xl cursor-pointer font-semibold">View Details &gt;</button>
          </div>
        ))}
        {openBox && <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md md:mt-[80px]" onClick={() => setOpenBox(false)}>
          <div className="bg-gray-200 p-[20px] rounded-[10px] h-[500px] md:h-[580px] shadow-2xl w-[300px] md:w-[1000px] grid grid-flow-row gap-[10px] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="grid grid-flow-row">
              <div className="text-red-800 text-end mb-[10px] cursor-pointer" onClick={() => setOpenBox(false)}>Close</div>
              <div className="grid md:grid-flow-col grid-flow-row">
                <img src={`${openBoxData.img}`} alt="Building Renovation" className="md:h-[500px] md:w-[500px] h-[250px] w-[400px] mb-[10px] md:mb-0" />
                <div className="ml-[20px] grid grid-flow-row">
                  <p className="font-bold text-[24px]">{openBoxData.title}</p>
                  <p className="mt-[15px]">{openBoxData.content}</p>
                  <button onClick={() => scrollToSection("contact")} className="justify-end bg-[#0D5CF1] font-semibold text-white w-[200px] h-[40px] rounded-[10px] cursor-pointer mt-[20px]">Get Construct</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        }
      </div>

      <div className="pb-[40px] md:py-[15px] flex items-center justify-center">
        <a href="/construction/services">
          <button className="bg-[#FC9713] font-bold h-[50px] w-[220px] font-inter rounded-[5px] cursor-pointer text-[22px]">
            Read More
          </button>
        </a>
      </div>

      <div className="border-[0.5px] border-[#D9D9D9] md:mx-[80px] md:mt-[50px] mx-[30px] mb-[50px]" />
    </div>
  );
};

export default Services;
