"use client";
import React, { useState } from "react";
import { addData } from "@/firebase/firestoreService";
import { serverTimestamp } from "firebase/firestore";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phno, setPhno] = useState("");
  const [service, setService] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendData = async () => {
    setLoading(true);
    await addData("Interests", { name, email, phno, service, createdAt: serverTimestamp() });
    setLoading(false);
    document.getElementById("name-id").value = "";
    document.getElementById("phno-id").value = "";
    document.getElementById("email-id").value = "";
    document.getElementById("service-id").value = "Choose any Service";
    setSuccess(true);
  }

  return (
    <div id="contact" className="py-8 mx-6 px-4 md:px-20 md:mx-20 md:py-20 md:flex items-center justify-between">
      <div className="flex flex-col h-full md:space-y-40 md:w-1/2 items-start justify-between">
        <h1 className="font-bold text-2xl md:text-3xl md:pr-40 pb-4">
          Have a <span className="text-[#FC9713]">free consultation</span> from
          experts
        </h1>
        <div className="md:hidden mb-4">
          <p className="text-[#667085]">You can reach us anytime via</p>
          <p>admin@livingenvironmentt.com</p>
        </div>
        <div className="font-medium md:flex flex-col items-start gap-y-2 hidden ">
          <p>Ph.no: +91 90355 06450</p>
          <p>Email: admin@livingenvironmentt.com</p>
          <p>Address: Elu's Road, Billishivale, Bangalore, KA 560077</p>
        </div>
      </div>

      <div className="md:bg-[#ECECEC] text-[#575757] md:flex flex-col md:gap-y-6 md:px-14 rounded-md py-8">
        <h1 className="font-bold text-2xl hidden md:inline-block">
          Contact Us
        </h1>
        <div className="md:flex md:items-center">
          <p className="md:hidden mb-2 mt-2">Name</p>
          <input
            type="text"
            required
            id="name-id"
            placeholder="Name"
            onChange={(event) => setName(event.target.value)}
            className="border border-[#D0D5DD] pl-4 md:pl-0 rounded-md md:border-0 md:rounded-none md:border-b mb-4 md:mb-0 md:mr-4 py-2"
          />
          <p className="md:hidden mb-2 mt-2">Phone number</p>
          <input
            type="number"
            required
            id="phno-id"
            placeholder="Phone No."
            onChange={(event) => setPhno(event.target.value)}
            className="border border-[#D0D5DD] pl-4 md:pl-0 rounded-md md:border-0 md:rounded-none md:border-b py-2"
          />
        </div>
        <p className="md:hidden mb-2 mt-4">Email</p>
        <input
          type="text"
          id="email-id"
          required
          placeholder="Email Address"
          onChange={(event) => setEmail(event.target.value)}
          className="border border-[#D0D5DD] pl-4 md:pl-0 rounded-md md:border-0 md:rounded-none md:border-b py-2"
        />
        <p className="md:hidden mb-2 mt-4">Service</p>
        <select id="service-id" onChange={(e) => setService(e.target.value)} className="h-[45px] w-[250px] rounded-[5px] cursor-pointer border-[1px] border-gray-200 p-[5px]">
          <option>Choose any Service</option>
          <option value="Construction">Construction</option>
          <option value="App Membrane">App Membrane</option>
          <option value="HDPE / SBS Membrane">HDPE / SBS Membrane</option>
          <option value="Brick Bat Coba">Brick Bat Coba</option>
        </select>
        <button className="bg-[#5033E2] hidden text-white py-2 px-4 mt-4 md:mt-0 rounded-md md:inline-block cursor-pointer" onClick={sendData}>
          {loading ? "Send..." : "Send"}
        </button>
        {success && <p className="text-green-500">*Message sent successfully!</p>}
        <button className="bg-gradient-to-b from-[#F1AC51] to-[#FC9713] text-white py-2 w-full rounded-md mt-4 md:hidden cursor-pointer" onClick={sendData}>
          {loading ? "Send..." : "Send"}
        </button>
      </div>
    </div>
  );
}

export default ContactForm;
