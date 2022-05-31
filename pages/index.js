import MainBanner from "../components/MainBanner";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="mx-auto w-4/6">
        <MainBanner />
      </div>
    </div>
  );
}
