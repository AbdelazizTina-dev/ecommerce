import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { useCart } from "../context/cart-context";
import CartItems from "./CartItems";
import EmptyCart from "./EmptyCart";
const Cart = () => {
  const { toggleCart, cartItems } = useCart();
  return (
    <div className="w-screen fixed top-0 right-0 z-50 backdrop-brightness-50">
      <div className="w-full xl:w-1/3 h-screen overflow-scroll bg-white float-right">
        <div
          role="button"
          onClick={toggleCart}
          className="flex flex-row items-center pt-12 pl-8 hover:cursor-pointer"
        >
          <MdArrowBackIos size={16} />
          <p className="text-lg text-black font-semibold pl-2 pr-2">
            Your Cart
          </p>
          <p className="text-lg text-banner-red font-semibold">
            {`(${cartItems.reduce(
              (sum, item) => sum + item.quantity,
              0
            )} items)`}
          </p>
        </div>
        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <CartItems cart={cartItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;
