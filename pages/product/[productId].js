import ProductDetails from "../../components/ProductDetails";
import Product from "../../components/Product";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
const ProductPage = () => {
  const animationControls = useAnimation();

  const animationVariant = useMemo(
    () => ({
      animate: {
        x: [500, -800],
        transition: { repeat: Infinity, duration: 11 },
      },
    }),
    []
  );

  useEffect(() => {
    animationControls.start(animationVariant.animate);
  }, [animationControls, animationVariant]);

  return (
    <div className="mx-auto w-4/6 p-4 mt-8">
      <ProductDetails />
      <p className="text-3xl font-bold pt-24 pb-12 text-text-blue text-center">
        You may also like
      </p>
      <div className="overflow-hidden">
        <motion.div
          animate={animationControls}
          /* TODO: after hover ends, the animation must start again from where it was paused */
          onHoverStart={() => animationControls.stop()}
          onHoverEnd={() => animationControls.start(animationVariant.animate)}
          className="grid grid-cols-5 gap-4 py-4 mb-24 track"
        >
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </motion.div>
      </div>
    </div>
  );
};

export default ProductPage;
