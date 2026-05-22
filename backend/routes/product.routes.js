import express from "express";
import {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  seedProducts,
} from "../controllers/product.controller.js";

const productRouter = express.Router();

// Mounted in index.js as: app.use("/api/product", productRouter)
// So these routes are: GET /api/product  POST /api/product  etc.
productRouter.post("/", createProduct);
productRouter.get("/", getProducts);
productRouter.put("/:id", updateProduct);
productRouter.delete("/:id", deleteProduct);

// Seeder - scans backend/uploads and creates product documents
productRouter.post("/seed", seedProducts);

export default productRouter;
