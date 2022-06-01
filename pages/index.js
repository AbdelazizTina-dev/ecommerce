import MainBanner from "../components/MainBanner";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="mx-auto w-4/6">
        <MainBanner />
        <Products />
      </div>
    </div>
  );
}
