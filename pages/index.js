import MainBanner from "../components/MainBanner";
import Products from "../components/Products";
import SaleBanner from "../components/SaleBanner";
import sanityClient from "../lib/client";
export default function Home({ products }) {
  return (
    <div className="mx-auto w-4/6">
      <MainBanner />
      <Products products={products} />
      <SaleBanner />
    </div>
  );
}

export async function getServerSideProps() {
  const products = await sanityClient.fetch(`*[_type == "product"]`);

  return {
    props: {
      products,
    },
  };
}
