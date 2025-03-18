import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="bg-[#202020] text-white p-10">
      <div className="flex md:flex-row flex-col justify-between items-center border-b-2 border-b-[#4B4B4B] pb-10">
        <div>
          <Image src="/logo.png" width={150} height={150} alt="logo" />
          <div className="flex items-center gap-x-4 mt-4">
            <Image src="/facebook.png" width={30} height={30} alt="facebook" />
            <Image
              src="/instagram.png"
              width={30}
              height={30}
              alt="instagram"
            />
            <Image src="/whatsapp.png" width={30} height={30} alt="whatsapp" />
          </div>
        </div>
        <div className="flex text-center flex-col md:flex-row gap-y-4 mt-10 md:mt-0 md:gap-x-12 md:pr-20 ">
          <div>
            <h1>Phone no.</h1>
            <p className="text-sm font-light text-[#9D9D9D]">+91 90355 06450</p>
          </div>

          <div>
            <h1>Email Address</h1>
            <p className="text-sm font-light text-[#9D9D9D]">
              admin@livingenvironmentt.com
            </p>
          </div>

          <div>
            <h1>Location</h1>
            <p className="text-sm font-light text-[#9D9D9D]">
            Elu's Road, <br /> Billishivale, <br />
              Bangalore, KA 560077
            </p>
          </div>
        </div>
      </div>
      <p className="text-sm font-[#A2A2A2] text-center pt-4">
        all rights reserved @LivingEnvirnonment
      </p>
    </div>
  );
}

export default Footer;
