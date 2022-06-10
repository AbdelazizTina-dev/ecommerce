import Product from "./Product";

const Products = ({ products }) => {
  return (
    <div className="mt-12 w-full p-8 mb-16">
      <p className="text-2xl sm:text-4xl md:text-5xl text-text-blue text-center font-bold pb-2">
        Best Seller Products
      </p>
      <p className="text-lg text-black text-center font-thin pb-8">
        Choose what suits you best!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products.map((product) => (
          <Product
            key={product._id}
            slug={product.slug.current}
            name={product.name}
            price={product.price}
            picture={product.pictures[0]}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
