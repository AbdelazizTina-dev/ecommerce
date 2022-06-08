import React from "react";
import CartItem from "./CartItem";
import { motion } from "framer-motion";
import { loadStripe } from "@stripe/stripe-js";
import toast from "react-hot-toast";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const CartItems = ({ cart }) => {
  const checkoutHandler = async () => {
    const response = await fetch("/api/checkout_session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.STRIPE_SECRET_KEY}`,
      },
      body: JSON.stringify(cart),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    toast.loading("Redirecting to checkout...");
    (await stripePromise).redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div className="mt-4 flex flex-col w-full h-full">
      <div className="flex flex-col items-center h-3/4 overflow-scroll">
        {cart.map((item) => (
          <CartItem
            key={item.slug}
            slug={item.slug}
            name={item.name}
            pic={item.pic}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </div>

      <div className="flex flex-row mx-16 mt-4 mb-8">
        <p className="mr-auto text-2xl font-bold text-black">Subtotal:</p>
        <p className="text-2xl font-bold text-black">
          ${cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}
        </p>
      </div>
      <motion.button
        onClick={checkoutHandler}
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
