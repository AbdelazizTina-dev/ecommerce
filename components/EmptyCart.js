import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { motion } from "framer-motion";
import { useCart } from "../context/cart-context";
import { useRouter } from "next/router";
const EmptyCart = () => {
  const { toggleCart } = useCart();
  const router = useRouter();
  return (
    <div className="pt-12 flex flex-col">
      <BiShoppingBag size={150} className="mx-auto" />
      <p className="text-center text-xl font-semibold pt-4 mb-8">
        No items added to the cart yet!
      </p>
      <motion.button
        onClick={() => {
          toggleCart();
          router.push("/");
        }}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
        className="mx-auto mb-4 rounded-xl bg-banner-red px-12 sm:px-24 py-4 text-white text-lg sm:text-xl font-normal uppercase"
      >
        Continue Shopping
      </motion.button>
    </div>
  );
};

export default EmptyCart;
