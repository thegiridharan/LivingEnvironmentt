"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/Components/ui/dialog";

export interface DataType {
  icon: string;
  heading: string;
  description: string;
  paragraph: string;
  bestfor: string;
}
function TypesOfWaterproofingBox({
  icon,
  heading,
  description,
  paragraph,
  bestfor,
}: {
  icon: string;
  heading: string;
  description: string;
  paragraph: string;
  bestfor: string;
}) {
  return (
    <>
      <div className="bg-[#EEEEEE] h-[350px] w-80 md:h-[450px] md:w-[390px] rounded-lg mb-10 md:mb-0 mx-auto p-[10px]">
        <Image
          src={icon}
          width={250}
          height={250}
          alt="TypesOfWaterproofing"
          className="h-[60%] mb-4 w-full mt-2"
        />
        <div className="px-4 pb-4 h-1/3 grid grid-flow-row sm:flex-col items-center">
          <h1>{heading}</h1>
          <p>{description}</p>
          <Dialog>
            <DialogTrigger asChild>
              <button className="cursor-pointer text-[#FC9713] mt-4 text-start">
                View Details &gt;
              </button>
            </DialogTrigger>
            <DialogContent style={{maxHeight:"80vh", overflow:"auto"}} title="hello" className="sm:max-w-[750px] bg-white text-black w-max rounded-lg sm:h-[500px] p-0 m-0 overflow-y-auto">
              <div className="h-full w-full grid grid-flow-row md:flex  gap-x-6 p-[10px]">
                <Image
                  src={icon}
                  width={100}
                  height={100}
                  quality={100}
                  alt="image"
                  className="sm:h-full sm:w-[40%] w-[300px] h-[250px]"
                />
                <div className="pt-4 font-medium pr-4">
                  <h1 className="text-lg">{heading}</h1>
                  <h2 className="text-[#737373] text-base mt-1">
                    ₹ 270 Per Sq. Metre
                  </h2>
                  <p className="text-base my-4 text-[#6F6F6F]">{paragraph}</p>
                  <p className="text-base text-[#6F6F6F]">{bestfor}</p>
                  <button className="bg-[#0D5CF1] text-white px-4 py-1 rounded-md mt-2 flex justify-center">
                    Get waterproofed
                  </button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
}

export default TypesOfWaterproofingBox;
