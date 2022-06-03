import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { motion } from "framer-motion";
const EmptyCart = () => {
  return (
    <div className="pt-12 flex flex-col">
      <BiShoppingBag size={150} className="mx-auto" />
      <p className="text-center text-xl font-semibold pt-4 mb-8">
        No items added to the cart yet!
      </p>
      <motion.button
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
        className="mx-auto rounded-xl bg-banner-red px-24 py-2 text-white text-xl font-normal uppercase"
      >
        Continue Shopping
      </motion.button>
    </div>
  );
};

export default EmptyCart;