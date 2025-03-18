import React from "react";
import GridItem from "@/Components/GridItem";

function Whytowaterproof() {
  return (
    <div className="px-10 md:px-40 py-20 text-center border-b bg-[#E3DEFE]">
      <h1 className="text-3xl font-bold">
        Why to <span className="text-[#FA9818]">waterproof</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 pt-8 md:mx-48">
        <GridItem
          icon="/grid-1.png"
          heading="1. Prevents Foundation Cracks"
          paragraph="Excess moisture can weaken the foundation of your home, leading to cracks and instability. Waterproofing ensures a strong and damage-free foundation."
        />
        <GridItem
          icon="/grid-2.png"
          heading="2. Enhances Roof & Terrace Life"
          paragraph="Constant exposure to rain and moisture can weaken your roof and terrace. Waterproofing adds an extra layer of protection, extending their lifespan.Avoids Electrical Hazards"
        />
        <GridItem
          icon="/grid-3.png"
          heading="3. Avoids Electrical Hazards"
          paragraph="Water leakage near electrical wiring can be extremely dangerous. Waterproofing helps prevent short circuits and reduces the risk of electrical accidents."
        />
        <GridItem
          icon="/grid-4.png"
          heading="4. Prevents Costly Repairs"
          paragraph="Ignoring leaks today can lead to expensive structural damage tomorrow. Waterproofing helps you avoid costly repairs caused by water seepage and mold buildup."
        />
      </div>
    </div>
  );
}

export default Whytowaterproof;
