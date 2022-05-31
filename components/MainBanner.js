import React from "react";
import Image from "next/image";
import Headphones from "../assets/headphones_c_1.webp";
const MainBanner = () => {
  return (
    <div className="relative w-full pt-24 pb-8 pl-8 pr-24 bg-banner-gray rounded-xl ">
      <div className="absolute top-0 right-32 z-0">
        <Image src={Headphones} width={500} height={500} alt="a picture of headphones" />
      </div>
      <p className="text-xl">Beats Solo Air</p>
      <p className="text-6xl font-bold">Summer Sale</p>
      <p className="-ml-4 text-9xl font-bold text-white mb-8">FINE</p>
      <button className="relative z-2 mb-24 w-28 bg-red-600 text-white rounded-lg text-lg font-bold py-2">
        Shop Now
      </button>
      <p className="text-md font-bold pb-2 text-right">Description</p>
      <p className="text-md font-thin text-right">
        Best headphones on the market right now!
      </p>
    </div>
  );
};

export default MainBanner;
