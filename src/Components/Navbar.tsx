"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Drawer, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar({ bg }: { bg: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`${bg == "white" ? "bg-white text-black" : "bg-black text-white"
        } h-[80px] py-4 px-[10px] md:px-10 flex justify-between items-center fixed z-50 top-0 left-0 w-full shadow-2xl`}
    >
      <Image
        src="/logo.png"
        width={140}
        height={140}
        alt="logo"
        className="p"
      />
      <div className="gap-x-8 items-center hidden md:flex">
        <Link href="/">Home</Link>
        <Link href="/construction/services">Services</Link>
        <a href="/blog">Blogs</a>
        <Link href="/construction">Construction</Link>
        <a href="/waterproof"  className="underline underline-offset-4">WaterProof</a>
        <a href="#contact">
          <button className="bg-[#5033E2] text-white px-4 py-1 rounded-md cursor-pointer">
            Free Consultation
          </button>
        </a>
      </div>
      <div className="md:hidden">
        <div onClick={() => setIsOpen(true)} className="cursor-pointer">
          <MenuIcon fontSize="large" />
        </div>
        {isOpen &&
          <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
            <Box
              className="w-64 p-4"
              role="presentation"
              onClick={() => setIsOpen(false)}
            >
              <h2 className="text-lg font-semibold">Menu</h2>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="/" className="block text-gray-800 hover:text-blue-600">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/construction/services" className="block text-gray-800 hover:text-blue-600">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/blog" className="block text-gray-800 hover:text-blue-600">
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="/construction" className="block text-gray-800 hover:text-blue-600">
                    Construction
                  </a>
                </li>
                <li>
                  <a href="/waterproof" className="block text-gray-800 hover:text-blue-600">
                    WaterProof
                  </a>
                </li>
                <li>
                  <a href="/construction#contact" className="block text-gray-800 hover:text-blue-600">
                    Contact
                  </a>
                </li>
              </ul>
            </Box>
          </Drawer>
        }
      </div>
    </div>
  );
}

export default Navbar;
