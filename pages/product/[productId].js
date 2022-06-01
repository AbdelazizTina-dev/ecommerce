import React from "react";
import Image from "next/image";
import Headphones from "../../assets/headphones_c_1.webp";
import ReviewStars from "../../components/UI/ReviewStars";
const ProductDetails = () => {
  return (
    <div className="mx-auto w-4/6 p-4 mt-8">
      <div className="flex flex-row">
        <Image
          src={Headphones}
          width={400}
          height={400}
          className="transition-colors ease-in-out duration-300 bg-product-gray hover:bg-banner-red  rounded-xl"
          alt="product"
        />
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
            <div className="grid grid-cols-3 w-32 h-12 divide-x-2 divide-gray-400 border-2 border-gray-400">
              <p className="text-banner-red text-center text-3xl font-semibold">
                -
              </p>
              <p className="text-text-blue text-center text-3xl font-normal">
                1
              </p>
              <p className="text-green-600 text-center text-3xl font-semibold">
                +
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <button className="mr-12 border-2 border-banner-red px-16 py-2 text-banner-red text-lg font-semibold">Add to Cart</button>
            <button className="bg-banner-red px-16 py-2 text-white text-lg font-semibold">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
