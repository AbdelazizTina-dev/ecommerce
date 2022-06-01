import MainBanner from "../components/MainBanner";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import SaleBanner from "../components/SaleBanner";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="mx-auto w-4/6">
        <MainBanner />
        <Products />
        <SaleBanner/>
      </div>
    </div>
  );
}
