import React from "react";
import Image from "next/image";
import { urlFor } from "../lib/imageBuilder";
import { useRouter } from "next/router";
const MainBanner = ({ banner: { product } }) => {
  const router = useRouter();

  return (
    <div className="relative w-full pt-24 pb-8 pl-8 pr-24 bg-banner-gray rounded-xl ">
      <div className="absolute top-0 right-32 z-0">
        <Image
          src={urlFor(product.pictures[0]).width(500).height(500).url()}
          width={500}
          height={500}
          alt="a picture"
        />
      </div>
      <p className="text-xl">{product.name}</p>
      <p className="text-6xl font-bold">Summer Sale</p>
      <p className="-ml-4 text-9xl font-bold text-white mb-8">
        {product.keyword_02}
      </p>
      <button
        onClick={() => router.push(`/product/${product.slug.current}`)}
        className="relative z-2 mb-24 w-28 bg-red-600 text-white rounded-lg text-lg font-bold py-2"
      >
        Shop Now
      </button>
      <p className="text-md font-bold pb-2 text-right">{product.desc_01}</p>
      <p className="text-md font-thin text-right">{product.desc_02}</p>
    </div>
  );
};

export default MainBanner;
