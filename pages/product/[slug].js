import ProductDetails from "../../components/ProductDetails";
import Product from "../../components/Product";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import sanityClient from "../../lib/client";

export async function getStaticPaths() {
  const slugs = await sanityClient.fetch(`*[_type=="product"]{slug}`);
  const paths = slugs.map((element) => ({
    params: {
      slug: element.slug.current,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const product = await sanityClient.fetch(
    `*[_type == "product" && slug.current == "${slug}"][0]`
  );
  const products = await sanityClient.fetch(`*[_type == "product"]`);

  return {
    props: {
      product,
      products,
    },
  };
}

const ProductPage = ({ products, product }) => {
  const router = useRouter();

  const { slug } = router.query;

  const animationControls = useAnimation();

  const animationVariant = useMemo(
    () => ({
      animate: {
        x: [500, -800],
        transition: { repeat: Infinity, duration: 12 },
      },
    }),
    []
  );

  useEffect(() => {
    animationControls.start(animationVariant.animate);
  }, [animationControls, animationVariant]);

  return (
    <div className="mx-auto w-11/12 sm:w-4/6 p-4 mt-8">
      <ProductDetails product={product} />
      <p className="text-3xl font-bold pt-24 pb-12 text-text-blue text-center">
        You may also like
      </p>
      <div className="overflow-hidden">
        <motion.div
          animate={animationControls}
          /* TODO: after hover ends, the animation must start again from where it was paused */
          onHoverStart={() => animationControls.stop()}
          onHoverEnd={() => animationControls.start(animationVariant.animate)}
          className={`grid grid-cols-5 w-full gap-4 py-4 mb-24`}
        >
          {products
            ?.filter((product) => product.slug.current !== slug)
            .map((product) => (
              <Product
                key={product._id}
                slug={product.slug.current}
                name={product.name}
                price={product.price}
                picture={product.pictures[0]}
              />
            ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProductPage;
