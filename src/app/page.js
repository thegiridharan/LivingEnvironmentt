import NavbarMain from "@/Components/NavbarMain";
import Image from "next/image";


export default function Home() {
  return (
    <div className="overflow-clip">
      <NavbarMain />
      <div>
        <div className="relative h-screen w-screen">
          <img src="/bg-main.png" className="object-cover h-screen w-screen hidden md:block" />
          <img src="/bg-main-mob.jpg" className="h-screen w-screen" />
        </div>
        <div className="absolute inset-0 grid grid-rows-2 md:grid-cols-2 mt-[100px] md:mt-[150px] pl-[40px] md:px-[100px]">
          <div className="my-0 py-0">
            <h1 className="text-[24px] font-bold md:text-4xl mb-4 mr-20 mt-4 md:mt-0 md:mr-0 text-white">
              <span className="text-[#FA9818]">Construction</span>{" "}
              Services That Turn Your Dream into a Reality!{" "}
            </h1>
            <a href="/construction">
              <button className="bg-[#5033E2] text-white px-6 py-2 text-[16px] font-semibold mt-[20px] md:mt-[50px] rounded-md cursor-pointer">More About Construction</button>
            </a>
          </div>
          <div className="md:pl-[100px] mt-0">
            <h1 className="text-[24px] font-bold md:text-4xl mb-4 md:mr-0 text-white">
              Say Goodbye to Leaks with <br /> Hassle-free{" "}
              <span className="text-[#FA9818]">waterproofing</span>{" "}
            </h1>
            <a href="/waterproof">
              <button className="bg-[#5033E2] text-white px-6 py-2 text-[16px] font-semibold mt-[20px] md:mt-[50px] rounded-md cursor-pointer">More About Waterproofing</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
