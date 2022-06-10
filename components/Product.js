import Image from "next/image";
import { motion } from "framer-motion";
import { useNextSanityImage } from "next-sanity-image";
import sanityClient from "../lib/client";
import { useRouter } from "next/router";
const Product = ({ name, price, picture, slug }) => {
  const imageProps = useNextSanityImage(sanityClient, picture);
  const router = useRouter()
  return (
    <motion.div
      className="hover:cursor-pointer w-7/8"
      onClick={() => router.push(`/product/${slug}`)}
      whileHover={{
        scale: 1.12,
        transition: { duration: 0.5, ease: "easeOut" },
      }}
    >
      <div className="bg-banner-gray rounded-xl">
        <Image {...imageProps} alt="product" />
      </div>
      <p className="text-lg pt-2 text-text-blue font-semibold">{name}</p>
      <p className="text-lg font-bold">${price}</p>
    </motion.div>
  );
};

export default Product;
