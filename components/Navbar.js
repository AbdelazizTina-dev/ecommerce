import { RiShoppingCartLine } from "react-icons/ri";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <nav className="flex flex-row items-center py-4 px-8">
      <p className="mr-auto text-xl">Gomu Shop</p>
      <motion.button className="relative"
        whileHover={{
          scale: 1.1,
          transition: { duration: 1 },
        }}
      >
        <RiShoppingCartLine size={28}/>
        <span className="absolute bottom-3 w-6 h-6 border-2 border-red-600 bg-red-600 text-white text-sm rounded-full">
          6
        </span>
      </motion.button>
    </nav>
  );
};

export default Navbar;
