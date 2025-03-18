"use client";
import React, { useEffect, useState } from "react";
import { getData } from "@/firebase/firestoreService";
import NavbarBlog from "@/components/NavbarBlog";

const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + " ...";
  }
  return text;
};

function Blog() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openBox, setOpenBox] = useState(false);
  const [openBoxData, setOpenBoxData] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      const response = await getData("Blog");

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
    <div className="grid lg:grid-cols-3 grid-flow-row items-center justify-center gap-[25px] md:mt-[100px]">
      {
        data && data.map((datum) => (
          <div key={datum.id} className="grid grid-flow-row font-inter h-[550px] w-[300px] md:h-[600px] md:w-[390px] gap-[15px] p-[25px] rounded-[10px] md:ml-[50px] bg-gray-100 mt-[100px] md:mt-0">
            <img
              src={`${datum.img}`}
              alt="Building Renovation"
              className="h-[200px] w-[250px] md:h-[280px] md:w-[340px] rounded-[10px]"
            />
            <p className="font-semibold text-[18px] md:text-[22px] h-[50px] md:h-[80px] w-[250px] md:w-full text-start">{truncateText(datum.title, 5)}</p>
            <p className="text-[#000000B3] text-[15px] md:text-[17px] h-[110px] md:h-[100px] w-[250px] md:w-full text-start">{truncateText(datum.content, 15)}</p>
            <button onClick={() => checkBox(datum)} className="h-[40px] text-center border-[1px] border-gray-200 rounded-[5px] bg-gray-200 text-[18px] md:text-xl cursor-pointer font-semibold mb-[40px] md:mb-0">View Article</button>
          </div>
        ))
      }
      {openBox && <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md mt-[100px] md:mt-[80px]" onClick={() => setOpenBox(false)}>
        <div className="bg-gray-200 p-[20px] rounded-[10px] h-[500px] md:h-[580px] shadow-2xl w-[400px] md:w-[1000px] grid grid-flow-row gap-[10px] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
          <div className="grid grid-flow-row">
            <div className="text-red-800 text-end mb-[10px] cursor-pointer" onClick={() => setOpenBox(false)}>Close</div>
            <div className="grid md:grid-flow-col grid-flow-row">
              <img src={`${openBoxData.img}`} alt="Building Renovation" className="md:h-[500px] md:w-[500px] h-[250px] w-[350px] mb-[10px] md:mb-0" />
              <div className="ml-[20px] grid grid-flow-row">
                <p className="font-bold text-[24px]">{openBoxData.title}</p>
                <p className="mt-[15px]">{openBoxData.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      }
    </div>

  );
}

export default function App() {
  return (<>
    <NavbarBlog bg="black" />
    <Blog />
  </>);
}