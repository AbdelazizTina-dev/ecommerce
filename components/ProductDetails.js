import React, { useState } from "react";
import Image from "next/image";
import Headphones from "../assets/headphones_c_1.webp";
import Headphones2 from "../assets/headphones_c_2.webp";
import Headphones3 from "../assets/headphones_c_3.webp";
import Headphones4 from "../assets/headphones_c_4.webp";
import ReviewStars from "./UI/ReviewStars";
import { motion } from "framer-motion";
import Counter from "./UI/Counter";
const DUMMY_PICTURES = [Headphones, Headphones2, Headphones3, Headphones4];

const ProductDetails = () => {
  const [mainPicture, setMainPicture] = useState(Headphones);

  return (
    <div className="flex flex-row">
      <div className="w-1/3">
        <Image
          src={mainPicture}
          width={500}
          height={500}
          className="transition-colors ease-in-out duration-300 bg-product-gray hover:bg-banner-red  rounded-xl"
          alt="product"
        />
        <div className="grid grid-cols-4 gap-2 w-5/6 mt-4">
          {DUMMY_PICTURES.map((picture) => (
            <Image
              className={`rounded-xl ${
                picture === mainPicture ? "bg-banner-red" : "bg-banner-gray"
              }`}
              src={picture}
              alt="product_preview"
              key={DUMMY_PICTURES.indexOf(picture)}
              onMouseEnter={() => setMainPicture(picture)}
            />
          ))}
        </div>
      </div>

      <div className="ml-8 mt-2 flex flex-col">
        <p className="text-4xl text-text-blue font-bold">Microphones</p>
        <ReviewStars />
        <p className="text-lg text-text-blue font-bold pt-4">Details:</p>
        <p className="text-md text-text-blue font-normal">
          Aesthetic and Powerful Headphones!!
        </p>
        <p className="text-3xl text-banner-red font-bold py-6">$99</p>
        <div className="flex flex-row items-center mb-12">
          <p className="text-xl text-text-blue font-bold pr-6">Quantity:</p>
          <Counter />
        </div>
        <div className="flex flex-row">
          <motion.button
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
            className="w-58 mr-12 border-2 border-banner-red px-16 py-2 text-banner-red text-lg font-semibold"
          >
            Add to Cart
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            className="w-58 bg-banner-red px-16 py-2 text-white text-lg font-semibold"
          >
            Buy Now
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
