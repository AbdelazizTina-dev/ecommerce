import React from "react";
import Image from "next/image";
import Counter from "./UI/Counter";
import { GiCancel } from "react-icons/gi";
import { urlFor } from "../lib/imageBuilder";
import { useCart } from "../context/cart-context";
const CartItem = ({ slug, name, price, pic, quantity }) => {
  const { decreaseQuantity, increaseQuantity, removeItem } = useCart();

  return (
    <div className="flex flex-row w-full pl-10 pr-4 py-6">
      <Image
        className="bg-banner-gray rounded-xl"
        width={180}
        height={180}
        src={urlFor(pic).url()}
        alt=""
      />

      <div className="flex flex-col w-full pb-2 px-4">
        <div className="flex flex-row mb-auto">
          <p className="mr-auto text-text-blue text-2xl font-bold">{name}</p>
          <p className="text-text-blue text-2xl font-bold">${price}</p>
        </div>
        <div className="flex flex-row items-center">
          <Counter
            onDecrease={() => decreaseQuantity(slug)}
            onIncrease={() => increaseQuantity(slug)}
            value={quantity}
            className="mr-auto"
          />
          <GiCancel
            onClick={() => removeItem(slug)}
            size={20}
            className="cursor-pointer"
            style={{ color: "#f46267" }}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
