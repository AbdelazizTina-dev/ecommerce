import Image from "next/image";
import Speakers from "../assets/speaker1.webp";
import { motion } from "framer-motion";
import { useNextSanityImage } from "next-sanity-image";
import sanityClient from "../lib/client";
const Product = ({ name, price, picture }) => {
  const imageProps = useNextSanityImage(sanityClient, picture);

  return (
    <motion.div
      whileHover={{
        scale: 1.12,
        transition: { duration: 0.5, ease: "easeOut" },
      }}
    >
      <div className="bg-banner-gray rounded-xl">
        <Image {...imageProps} alt="product" />
      </div>
      <p className="text-xl pt-2 text-text-blue font-semibold">{name}</p>
      <p className="text-lg font-bold">${price}</p>
    </motion.div>
  );
};

export default Product;
