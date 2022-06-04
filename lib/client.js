import { createClient } from "next-sanity";

const sanityClient = createClient({
  projectId: "yqiikn3g",
  dataset: "production",
  apiVersion: "2022-06-04",
  useCdn: false,
});

export default sanityClient
