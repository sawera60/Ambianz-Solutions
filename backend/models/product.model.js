import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  Pname: {
    type: String,
    required: true,
  },
  pprice: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: [
      "Wall Art",
      "Islamic Wall Art",
      "Clocks",
      "Coffee Table",
      "Drawers",
      "Study Table",
      "Office Chair",
      "Vanity Stool",
      "Full Length Mirror",
      "Mirror with Shelves",
      "Lighting",
      "Hardware",
    ],
  },
  material: {
    type: String,
    required: true,
    enum: ["metal", "wood", "glass", "marble", "ceramic", "brass", "stone"],
  },
  description: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});
const products = mongoose.model("products", productSchema);
export default products;
