import React, { useEffect, useState } from "react";
import Image from "next/image";
import ReviewStars from "./UI/ReviewStars";
import { motion } from "framer-motion";
import Counter from "./UI/Counter";
import { urlFor } from "../lib/imageBuilder";


const ProductDetails = ({ product: { pictures, name, desc_02, price } }) => {
  const [mainPicture, setMainPicture] = useState(pictures[0]);

  useEffect(() => {
    setMainPicture(pictures[0])
  },[pictures])

  return (
    <div className="flex flex-row">
      <div className="w-1/3">
        <Image
          src={urlFor(mainPicture).url()}
          width={500}
          height={500}
          className="transition-colors ease-in-out duration-300 bg-product-gray hover:bg-banner-red rounded-xl"
          alt="product"
        />

        <div className="grid grid-cols-4 gap-2 w-5/6 mt-4">
          {pictures.map((picture) => (
            <Image
              className={`rounded-xl ${
                picture === mainPicture ? "bg-banner-red" : "bg-banner-gray"
              }`}
              src={urlFor(picture).url()}
              height={100}
              width={100}
              alt="product_preview"
              key={picture._key}
              onMouseEnter={() => setMainPicture(picture)}
            />
          ))}
        </div>
      </div>

      <div className="ml-8 mt-2 flex flex-col">
        <p className="text-4xl text-text-blue font-bold">{name}</p>
        <ReviewStars />
        <p className="text-lg text-text-blue font-bold pt-4">Details:</p>
        <p className="text-md text-text-blue font-normal">{desc_02}</p>
        <p className="text-3xl text-banner-red font-bold py-6">${price}</p>
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
