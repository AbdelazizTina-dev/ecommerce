import MainBanner from "../components/MainBanner";
import Products from "../components/Products";
import SaleBanner from "../components/SaleBanner";

import sanityClient from "../lib/client";
export default function Home({ products, banner }) {
  return (
    <div className="mx-auto w-4/6">
      <MainBanner banner={banner} />
      <Products products={products} />
      <SaleBanner banner={banner} />
    </div>
  );
}

export async function getServerSideProps() {
  const products = await sanityClient.fetch(`*[_type == "product"]`);
  const banner = await sanityClient.fetch(`*[_type == "banner"][0]{
    ...,
    product->
  }`);
  return {
    props: {
      products,
      banner,
    },
  };
}
