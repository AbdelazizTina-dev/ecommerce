import Product from "./Product";


const Products = () => {
  return (
    <div className="mt-12 p-8 mb-16">
        <p className="text-5xl text-text-blue text-center font-bold pb-2">Best Seller Products</p>
        <p className="text-lg text-black text-center font-thin pb-8">Choose what suits you best!</p>
        <div className="grid grid-cols-5 gap-4">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    </div>

  );
};

export default Products;
