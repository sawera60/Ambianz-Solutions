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
      "lighting",
      "wall_art",
      "clocks",
      "mirrors",
      "furniture",
      "hardware",
      "planters",
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
