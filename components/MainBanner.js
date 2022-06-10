import React from "react";
import Image from "next/image";
import { urlFor } from "../lib/imageBuilder";
import { useRouter } from "next/router";
const MainBanner = ({ banner: { product } }) => {
  const router = useRouter();

  return (
    <div className="relative inline-block lg:grid w-full xl:pt-24 pb-8 pl-8 pr-8 xl:pr-24 bg-banner-gray rounded-xl">
      <div className="lg:mx-auto xl:absolute xl:top-0 xl:right-0 z-0">
        <Image
          src={urlFor(product.pictures[0]).url()}
          width={500}
          height={500}
          alt="a picture"
        />
      </div>
      <p className="text-xl">{product.name}</p>
      <p className="text-4xl sm:text-5xl md:text-6xl font-bold">Summer Sale</p>
      <p className="md:-ml-4 text-7xl sm:text-8xl md:text-9xl font-bold text-white mb-8">
        {product.keyword_02}
      </p>
      <button
        onClick={() => router.push(`/product/${product.slug.current}`)}
        className="relative z-2 mb-4 sm:mb-24 w-28 bg-red-600 text-white rounded-lg text-lg font-bold py-2"
      >
        Shop Now
      </button>
      <p className="text-md font-bold pb-2 sm:text-right">{product.desc_01}</p>
      <p className="text-md font-thin sm:text-right">{product.desc_02}</p>
    </div>
  );
};

export default MainBanner;
