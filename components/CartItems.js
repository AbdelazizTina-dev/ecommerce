import React from "react";
import CartItem from "./CartItem";
import { motion } from "framer-motion";
const CartItems = () => {
  return (
    <div className="mt-4 flex flex-col w-full h-full">
      <div className="flex flex-col h-3/4 overflow-scroll">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>

      <div className="flex flex-row mx-16 mt-4 mb-8">
        <p className="mr-auto text-2xl font-bold text-black">Subtotal:</p>
        <p className="text-2xl font-bold text-black">$294</p>
      </div>

      <motion.button
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
        className="mx-auto mb-4 rounded-xl bg-banner-red px-24 py-2 text-white text-xl font-normal uppercase"
      >
        Pay with stripe
      </motion.button>
    </div>
  );
};

export default CartItems;
