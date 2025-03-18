"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getData } from "@/firebase/firestoreService";
import TypesOfWaterproofingBox from "./TypesOfWaterproofingBox";

const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + " ...";
  }
  return text;
};

function TypesOfWaterproofing() {
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
      const response = await getData("ServiceWaterproof");

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
    <div className="py-8 md:py-20 border-b">
      <h1 className="font-bold text-2xl pb-6 text-center font-inter text-[35px]">
        Types of <span className="text-[#FC9713] font-inter text-[35px]">Waterproofing</span>
      </h1>
      <div>
        <div className="md:flex md:justify-evenly grid grid-flow-row gap-[25px] md:gap-0 py-[50px] items-center justify-center">
          {data && data.slice(0, 3).map((datum) => (
            <div key={datum.id} className="grid grid-flow-row font-inter h-[410px] w-[300px] md:h-[500px] md:w-[390px] bg-[#EEEEEE] gap-[15px] p-[25px] rounded-[10px]">
              <img
                src={`${datum.img}`}
                alt="Building Renovation"
                className="h-[200px] w-[350px] md:h-[280px] md:w-[340px] rounded-[10px]"
              />
              <p className="font-semibold text-[18px] md:text-[22px]">{datum.title}</p>
              <p className="text-[#000000B3] text-[15px] md:text-[17px]">{truncateText(datum.content, 10)}</p>
              <button onClick={() => checkBox(datum)} className="text-[#FC9713] text-start text-[18px] md:text-xl cursor-pointer font-semibold">View Details &gt;</button>
            </div>
          ))}
          {openBox && <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md mt-[80px]" onClick={() => setOpenBox(false)}>
            <div className="bg-gray-200 p-[20px] rounded-[10px] shadow-2xl md:w-[1000px] h-[500px] md:h-[580px] grid grid-flow-row gap-[10px] w-[300px] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="grid grid-flow-row">
                <div className="text-red-800 text-end mb-[10px] cursor-pointer" onClick={() => setOpenBox(false)}>Close</div>
                <div className="grid md:grid-flow-col grid-flow-row">
                  <img src={`${openBoxData.img}`} alt="Building Renovation" className="md:h-[500px] md:w-[500px] h-[250px] w-[400px] mb-[10px] md:mb-0" />
                  <div className="ml-[20px] grid grid-flow-row">
                    <p className="font-bold text-[24px]">{openBoxData.title}</p>
                    <p className="mt-[15px]">{openBoxData.content}</p>
                    <button onClick={() => scrollToSection("contact")} className="justify-end bg-[#0D5CF1] font-semibold text-white w-[200px] h-[40px] rounded-[10px] cursor-pointer">Get Construct</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          }
        </div>
      </div>
    </div>
  );
}

export default TypesOfWaterproofing;
