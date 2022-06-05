export default {
  name: "banner",
  type: "document",
  title: "Banner",
  fields: [
    {
      name: "product",
      type: "reference",
      title: "Promoted Product",
      to: [{ type: "product" }],
    },
    {
        name:"sale_percentage",
        type: "number",
        title: "Sale Percentage Off",
    },
    {
        name: "start",
        type: "date",
        title: "Start Date"
    },
    {
        name: "end",
        type: "date",
        title: "End Date"
    }
  ],
};
