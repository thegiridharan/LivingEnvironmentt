"use client";

import react, { useEffect } from "react";
import React, { useState } from "react";
import { getData } from "@/firebase/firestoreService";
import EmailInterests from "@/Components/Dashboard/EmailInterests";
import Blog from "@/Components/Dashboard/Blog";
import Services from "@/Components/Dashboard/Services";
import { Dialog } from "@radix-ui/react-dialog";
import { Box } from "@mui/material";

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState("Services");

    return (
        <>
            <div className="flex">
                <Sidebar setActiveTab={setActiveTab} />
                <div className="flex-1">
                    {activeTab === "Services" && <Services />}
                    {activeTab === "Blog" && <Blog />}
                    {activeTab === "EmailInterests" && <EmailInterests />}
                </div>
            </div>
        </>
    )
}


const Sidebar = ({ setActiveTab }) => {
    return (
        <div className="grid grid-flow-col">
            <div className="w-64 h-full bg-gray-900 text-white p-5 mb-[500px]">
                <h2 className="text-lg font-bold mb-5">Dashboard</h2>
                <button onClick={() => setActiveTab("Services")} className="block w-full py-2 px-4 text-left hover:bg-gray-700 rounded-[10px]">Services</button>
                <button onClick={() => setActiveTab("Blog")} className="block w-full py-2 px-4 text-left hover:bg-gray-700 rounded-[10px]">Blogs</button>
                <button onClick={() => setActiveTab("EmailInterests")} className="block w-full py-2 px-4 text-left hover:bg-gray-700 rounded-[10px]">Email Responses</button>
            </div>
        </div>
    )
}

function NewLoginPanelBoard() {
    const [open, setOpen] = useState(true);
    const [Id, setId] = useState("");
    const [Password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [wrong, setWrong] = useState(false);

    const id = "living";
    const password = "living";

    const verifyUser = async () => {
        setLoading(true);

        if (Id === id && Password === password) {
            setOpen(false);
        } else {
            setWrong(true);
        }
        setLoading(false);
    }

    return (
        <>{open &&
            <div className="fixed inset-0 h-screen w-screen bg-white flex items-center justify-center">
                <div className="h-[400px] w-[400px] bg-gray-200 p-[20px] shadow-2xl rounded-[10px]">
                    <div className="grid grid-flow-row">
                        <p className="font-semibold mb-[15px]">Authentication</p>
                        <p className="mb-[5px]">Unique ID</p>
                        <input type="text" placeholder="ID" className="bg-gray-100 p-[5px] mb-[20px] rounded-[5px]" onChange={(e) => setId(e.target.value)}></input>
                        <p className="mb-[5px]">Unique Password</p>
                        <input type="password" placeholder="Password" className="bg-gray-100 p-[5px] mb-[20px] rounded-[5px]" onChange={(e) => setPassword(e.target.value)}></input>
                        <button className="h-[45px] bg-black text-white font-semibold rounded-[10px] mt-[15px] cursor-pointer" onClick={verifyUser}>{loading ? "Verifying..." : "Verify"}</button>
                        <p className="mt-[20px] opacity-50">*Wrong attempts will be recorded.</p>
                        {wrong && <p className="text-red-700 mt-[10px]">*Wrong ID / Password</p>}
                    </div>
                </div>
            </div>}
        </>
    )
}


export default function DashboardApp() {
    return (
        <div>
            <NewLoginPanelBoard />
            <Dashboard />
        </div>
    )
}