import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { BsFillBagCheckFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { runConfetti } from "../lib/confetti";
const SuccessPage = () => {
  const router = useRouter();

  useEffect(() => {
    runConfetti();
  }, []);

  return (
    <div className="flex flex-col w-1/2 m-auto bg-banner-gray p-16 gap-4 rounded-xl">
      <BsFillBagCheckFill
        className="mx-auto"
        size={50}
        style={{ color: "green" }}
      />
      <p className="text-center text-4xl font-extrabold text-text-blue">
        Thank You For Your Order!
      </p>
      <p className="text-center text-lg font-medium">
        Please, check your e-mail inbox for the receipt.
      </p>
      <p className="text-center text-md font-medium pb-12">
        If you have any question, don't hesitate to contact our customer service
        at{" "}
        <a
          onClick={(e) => {
            window.location.href = "mailto:c_service@gomu.com";
            e.preventDefault();
          }}
          className="text-banner-red cursor-pointer"
        >
          c_service@gomu.com
        </a>
        .
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
        className="mx-auto rounded-xl bg-banner-red px-24 py-2 text-white text-xl font-normal uppercase"
      >
        Continue Shopping
      </motion.button>
    </div>
  );
};

export default SuccessPage;
