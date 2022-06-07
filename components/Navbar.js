import { RiShoppingCartLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { useCart } from "../context/cart-context";
import { useRouter } from "next/router";
const Navbar = () => {
  const { toggleCart, cartItems } = useCart();
  const router = useRouter();
  return (
    <nav className="flex flex-row items-center py-4 px-8">
      <p
        className="mr-auto text-xl font-medium text-gray-500 cursor-pointer"
        onClick={() => router.push("/")}
      >
        Gomu Shop
      </p>
      <motion.button
        className="relative"
        onClick={toggleCart}
        whileHover={{
          scale: 1.1,
          transition: { duration: 1 },
        }}
      >
        <RiShoppingCartLine size={28} />
        <span className="absolute bottom-3 w-6 h-6 border-2 border-red-600 bg-red-600 text-white text-sm rounded-full">
          {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        </span>
      </motion.button>
    </nav>
  );
};

export default Navbar;
