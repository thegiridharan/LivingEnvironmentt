import Image from "next/image";

export default function CompanyProfile() {
    return (
        <>
            <div className="mx-[40px] md:mx-[70px] my-[40px] grid text-center">
                <p className="font-inter font-bold text-[24px] md:text-[40px] pb-4">About <span className="bg-gradient-to-r from-[#EFAF5C] to-[#FC9713] bg-clip-text text-transparent">our Company</span></p>
                <p className="md:block hidden font-inter font-medium text-[18px] md:text-[20px] text-[#000000B3]">Our industry specializes in constructing high-quality, durable, and innovative structures that<br /> stand the test of time. We focus on precision, safety, and excellence to bring architectural<br /> visions to life.</p>
                <p className="md:hidden font-inter font-medium text-[18px] text-[#000000B3]">Our industry specializes in constructing high-quality, durable, and innovative structure</p>
            </div>
            <div className="grid grid-flow-row md:grid-cols-5 items-center justify-center mx-[30px] md:mx-[80px] my-[10px] md:my-[20px]">
                <div className="col-span-3 flex items-center justify-center">
                    <Image src="/c-cp-1.png" alt="image" height={800} width={400} quality={100} className="md:h-[850px] md:w-[700px]" />
                </div>
                <div className="grid grid-flow-row col-span-2 items-end pt-[30px] md:pt-0">
                    <div className="font-inter">
                        <p className="font-bold text-[22px] md:text-[37px] pb-3">Transform your dream home<br /> into reality</p>
                        <p className="font-inter opacity-70 text-[20px]">From foundation to finishing, we bring your vision to life with expert craftsmanship, durable materials, and a commitment to excellence. Whether it's a new home, renovation, or structural work, we ensure a hassle-free construction experience.</p>
                    </div>
                    <div className="grid grid-flow-row gap-[30px] md:gap-[50px] pt-[50px]">
                    <div className="grid grid-flow-col gap-4 ">
                            <div className="flex items-center md:grid ">
                                <Image src="/c-cp-3.png" alt="image" height={80} width={80} quality={100} className="h-[50px] w-[50px] md:h-[80px] md:w-[80px]" />
                            </div>
                            <div className="font-inter md:grid md:items-center md:ml-[28px]">
                                <p className="font-bold text-[18px] md:text-[29px] text-start ml-[-35px] md:ml-0">Excellence in Every detail</p>
                                <p className="font-inter opacity-70 text-[17px] md:block hidden">From foundation to finishing, we bring your vision to life with expert craftsmanship, durable materials, and a commitment to excellence.</p>
                            </div>
                        </div>
                        <div className="grid grid-flow-col gap-4 ">
                            <div className="flex items-center">
                                <Image src="/c-cp-2.png" alt="image" height={80} width={80} quality={100} className="h-[50px] w-[50px] md:h-[80px] md:w-[80px]" />
                            </div>
                            <div className="font-inter md:grid md:items-center md:ml-[32px] ">
                                <p className="font-bold text-[18px] md:text-[28px] text-start">Your Vision, Our Commitment</p>
                                <p className="font-inter opacity-70 text-[17px] md:block hidden">From foundation to finishing, we bring your vision to life with expert craftsmanship, durable materials, and a commitment to excellence.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-[0.5px] border-[#D9D9D9] md:mx-[80px] md:mt-[100px] mx-[30px] my-[50px]" />
        </>
    )
}