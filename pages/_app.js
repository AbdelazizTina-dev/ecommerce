import Cart from "../components/Cart";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="relative">
      <Navbar />
      <Cart/>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
