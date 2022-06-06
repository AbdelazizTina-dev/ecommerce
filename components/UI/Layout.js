import React from "react";
import Head from "next/head";
import Navbar from "../Navbar";
import Cart from "../Cart";
import { useCart } from "../../context/cart-context";
const Layout = ({ children }) => {
  const ctx = useCart();
  return (
    <div className="relative">
      <Head>
        <title>Gomu Shop</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
        {ctx.showCart && <Cart />}
        {children}
      </main>
    </div>
  );
};

export default Layout;
