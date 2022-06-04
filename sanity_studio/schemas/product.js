export default {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    { name: "name", type: "string", title: "Name" },
    { name: "type", type: "string", title: "Product Type" },
    { name: "price", type: "number", title: "Price" },
    {
      name: "pictures",
      type: "array",
      title: "Pictures",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    { name: "desc_01", type: "string", title: "First Description" },
    { name: "desc_02", type: "string", title: "Second Description" },
    { name: "keyword_01", type: "string", title: "First Keyword" },
    { name: "keyword_02", type: "string", title: "Second Keyword" },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "name", maxLength: 30 },
    },
  ],
};
