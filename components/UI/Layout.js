import React from "react";
import Head from "next/head";
import Navbar from "../Navbar";
import Cart from "../Cart";
import { useCart } from "../../context/cart-context";
import { Toaster } from "react-hot-toast";
import Footer from "../Footer";
const Layout = ({ children }) => {
  const ctx = useCart();
  return (
    <div className="flex flex-col justify-between h-screen relative">
      <Head>
        <title>Gomu Shop</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <header>
        <Navbar />
      </header>

      <main className="w-full inline-block">
        <Toaster position="top-center" reverseOrder={false} />
        {ctx.showCart && <Cart />}
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
