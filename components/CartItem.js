import React from "react";
import Image from "next/image";
import Headphones from "../assets/headphones_c_1.webp";
import Counter from "./UI/Counter";
import { GiCancel } from "react-icons/gi";
const CartItem = () => {
  return (
    <div className="flex flex-row h-full w-full pl-10 pr-4 py-6">
      <Image
        className="bg-banner-gray rounded-xl"
        width={180}
        height={180}
        src={Headphones}
        alt=""
      />

      <div className="flex flex-col w-full pb-2 px-4">
        <div className="flex flex-row mb-auto">
          <p className="mr-auto text-text-blue text-2xl font-bold">
            Headphones
          </p>
          <p className="text-text-blue text-2xl font-bold">$99</p>
        </div>
        <div className="flex flex-row items-center">
          <Counter className="mr-auto" />
          <GiCancel size={20} style={{ color: "#f46267" }} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
