import Image from "next/image";
import Speakers from "../assets/speaker1.webp";
import { motion } from "framer-motion";
const Product = () => {
  return (
    <motion.div
      whileHover={{
        scale: 1.12,
        transition: { duration: 0.5 , ease: "easeOut" },
      }}
    >
      <div className="bg-banner-gray rounded-xl">
        <Image src={Speakers} alt="product" />
      </div>
      <p className="text-xl pt-2 text-text-blue font-semibold">Speaker</p>
      <p className="text-lg font-bold">$99</p>
    </motion.div>
  );
};

export default Product;
