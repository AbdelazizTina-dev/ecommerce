import React, { useEffect, useState } from "react";
import Image from "next/image";
import ReviewStars from "./UI/ReviewStars";
import { motion } from "framer-motion";
import Counter from "./UI/Counter";
import { urlFor } from "../lib/imageBuilder";
import { useCart } from "../context/cart-context";
import toast from "react-hot-toast";

const ProductDetails = ({
  product: { slug, pictures, name, desc_02, price },
}) => {
  const [mainPicture, setMainPicture] = useState(pictures[0]);

  const [counter, setCounter] = useState(1);

  const { addItems, toggleCart } = useCart();

  useEffect(() => {
    setMainPicture(pictures[0]);
    setCounter(1);
  }, [pictures]);

  return (
    <div className="flex flex-col xl:flex-row">
      <div className="w-full mb-4 xl:w-1/3 xl:mb-0">
        <Image
          src={urlFor(mainPicture).url()}
          width={500}
          height={500}
          className="transition-colors ease-in-out duration-300 bg-product-gray hover:bg-banner-red rounded-xl"
          alt="product"
        />
        <div
          className={`grid grid-cols-${pictures.length} gap-2 w-7/12 xl:w-5/6 mt-4`}
        >
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

      <div className="xl:ml-8 mt-2 flex flex-col">
        <p className="text-2xl sm:text-3xl md:text-4xl text-text-blue font-bold">
          {name}
        </p>
        <ReviewStars />
        <p className="text-lg text-text-blue font-bold pt-4">Details:</p>
        <p className="text-md text-text-blue font-normal">{desc_02}</p>
        <p className="text-3xl text-banner-red font-bold py-6">${price}</p>
        <div className="flex flex-row items-center mb-12">
          <p className="text-xl text-text-blue font-bold pr-6">Quantity:</p>
          <Counter
            onDecrease={() =>
              setCounter((prevCounter) =>
                prevCounter === 1 ? prevCounter : prevCounter - 1
              )
            }
            value={counter}
            onIncrease={() => setCounter((prevCounter) => prevCounter + 1)}
          />
        </div>
        <div className="flex flex-col xl:flex-row gap-y-4">
          <motion.button
            onClick={() => {
              addItems(
                { slug: slug.current, name, price, pic: pictures[0] },
                counter
              );
              toast.success(`${counter} ${name} added to the cart.`);
            }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
            className="mx-auto xl:mx-0 w-2/3 xl:w-96 xl:mr-12 border-2 border-banner-red px-8 xl:px-16 py-2 text-banner-red text-md sm:text-lg font-semibold"
          >
            Add to Cart
          </motion.button>
          <motion.button
            onClick={() => {
              addItems(
                { slug: slug.current, name, price, pic: pictures[0] },
                counter
              );
              toast.success(`${counter} ${name} added to the cart.`);
              toggleCart();
            }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            className="mx-auto w-2/3 xl:w-58 bg-banner-red px-8 xl:px-16 py-2 text-white text-lg font-semibold"
          >
            Buy Now
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
