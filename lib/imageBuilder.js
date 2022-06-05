import sanityClient from "../lib/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => builder.image(source);
