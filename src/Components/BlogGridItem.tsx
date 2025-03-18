import Image from "next/image";
import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/Components/ui/dialog";
import Link from "next/link";

function BlogGridItem({
  icon,
  heading,
  description,
}: {
  icon: string;
  heading: string;
  description: string;
}) {
  return (
    <>
      <div className="grid grid-flow-row font-inter h-[410px] w-[300px] md:h-[500px] md:w-[390px] gap-[15px] p-[25px] rounded-[10px]">
        <Image src={icon} alt="Building Renovation" height={100} width={100} quality={100} className="h-[200px] w-[350px] md:h-[280px] md:w-[340px] rounded-[10px]" />
        <p className="font-bold text-[17px] md:text-[21px] text-start">{heading}</p>
        <p className="text-[15px] md:text-[17px] text-start">{description}</p>
        <Link href="/blog" className="border-[1px] border-black bg-[#EEEEEE] text-[16px] md:text-xl cursor-pointer font-medium h-[35px] w-full rounded-[10px] flex items-center justify-center">View Article</Link>
      </div>
    </>
  );
}

export default BlogGridItem;
