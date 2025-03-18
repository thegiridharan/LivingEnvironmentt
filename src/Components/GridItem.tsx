import Image from "next/image";
import React from "react";

function GridItem({
  icon,
  heading,
  paragraph,
}: {
  icon: string;
  heading: string;
  paragraph: string;
}) {
  return (
    <div className="border-black border-2 rounded-md p-6 text-left gap-y-1 flex flex-col hover:bg-[#FA9818]">
      <Image src={icon} width={40} height={40} alt="Icon" />
      <h1 className="font-medium text-lg">{heading}</h1>
      <p className="leading-5">{paragraph}</p>
    </div>
  );
}

export default GridItem;
