import Image from "next/image";
import Headphones from "../assets/headphones_c_1.webp";

const SaleBanner = () => {
  return (
    <div className="relative flex flex-row justify-between bg-banner-red mb-24 rounded-xl">
      <div className="pt-20 pl-12 pb-24">
        <p className="text-white text-lg font-medium">20% OFF</p>
        <p className="text-7xl font-sans font-extrabold pl-2 text-white">FINE</p>
        <p className="text-7xl font-sans font-extrabold pl-2 pb-4 text-white">SMILE</p>
        <p className="text-white text-lg font-medium">15 Nov to 15 Dec</p>
      </div>
      <div className="absolute -bottom-14 right-1/3 z-0">
        <Image src={Headphones} width={550} height={550} alt="a picture of headphones" />
      </div>
      <div className="pt-20 pr-12 pb-24">
        <p className="text-xl text-white font-medium pb-4">Beats Solo Air</p>
        <p className="text-6xl text-white font-bold pb-2">Summer Sale</p>
        <p className="text-md font-thin text-white pb-12">
          Best headphones on the market right now!
        </p>
        <button className="relative z-2 w-28 text-red-600 bg-white rounded-lg text-lg font-bold py-2">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default SaleBanner;
