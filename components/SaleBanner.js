import Image from "next/image";
import { format } from "date-fns";
import { urlFor } from "../lib/imageBuilder";
import { useRouter } from "next/router";
const SaleBanner = ({ banner: { product, sale_percentage, start, end } }) => {
  const router = useRouter();

  return (
    <div className="relative flex w-full flex-col lg:flex-row justify-between bg-banner-red mb-12 rounded-xl">
      <div className="pt-20 pl-12 lg:pb-24">
        <p className="text-white text-lg font-medium">{sale_percentage}% OFF</p>
        <p className="text-5xl sm:text-7xl font-sans font-extrabold sm:pl-2 text-white">
          {product.keyword_01}
        </p>
        <p className="text-5xl sm:text-7xl font-sans font-extrabold sm:pl-2 pb-4 text-white">
          {product.keyword_02}
        </p>
        <p className="text-white text-lg font-medium">
          {format(new Date(start), "dd MMM")} to
          {" " + format(new Date(end), "dd MMMM")}
        </p>
      </div>
      <div className="hidden 2xl:block 2xl:absolute 2xl:-bottom-14 2xl:right-1/3 z-0">
        <Image
          src={urlFor(product.pictures[1]).width(500).height(500).url()}
          width={500}
          height={500}
          alt="a picture"
        />
      </div>
      <div className="pt-20 pr-12 pb-24 pl-12 2xl:pl-4">
        <p className="text-xl text-white font-medium pb-4">{product.name}</p>
        <p className="text-5xl sm:text-6xl text-white font-bold pb-2">Summer Sale</p>
        <p className="text-md font-thin text-white pb-12">{product.desc_02}</p>
        <button
          onClick={() => router.push(`/product/${product.slug.current}`)}
          className="relative z-2 w-28 text-red-600 bg-white rounded-lg text-lg font-bold py-2"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default SaleBanner;
