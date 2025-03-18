"use client";
import { useState, useEffect } from "react";
import { getData } from "@/firebase/firestoreService";
import NavbarServices from "@/components/NavbarServices";

const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(" ") + " ...";
    }
    return text;
};

function AllService() {
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
        <div className="grid grid-flow-row md:grid-cols-3 md:justify-evenly gap-[25px] md:gap-0 py-[50px] items-center justify-center mt-[80px]">
            {data && data.slice(0, 3).map((datum) => (
                <div key={datum.id} className="grid grid-flow-row font-inter h-[430px] w-[300px] md:h-[520px] md:w-[390px] bg-[#EEEEEE] gap-[15px] p-[25px] rounded-[10px] md:ml-[50px]">
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
                                <a href="/construction#contact">
                                    <button onClick={() => scrollToSection("contact")} className="justify-end bg-[#0D5CF1] font-semibold text-white w-[200px] h-[40px] rounded-[10px] cursor-pointer mt-[20px]">Get Construct</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}


export default function ServicePage() {
    return (
        <>
            <NavbarServices bg="black" />
            <AllService />
        </>
    );
};