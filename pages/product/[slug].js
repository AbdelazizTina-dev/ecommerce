import ProductDetails from "../../components/ProductDetails";
import Product from "../../components/Product";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import sanityClient from "../../lib/client";
import { useMediaQuery } from "@material-ui/core";
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

  const isDesktopView = useMediaQuery("(min-width:1536px)");

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
      {isDesktopView ? (
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
      ) : (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-5/6 mx-auto sm:w-full gap-4 py-4 mb-24"
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
        </div>
      )}
    </div>
  );
};

export default ProductPage;
