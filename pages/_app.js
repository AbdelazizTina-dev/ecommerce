import Head from "next/head";
import Cart from "../components/Cart";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="relative">
      <Head>
        <title>Gomu Shop</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
        {/* <Cart/> */}
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
