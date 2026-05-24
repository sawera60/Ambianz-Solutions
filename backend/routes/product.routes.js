import express from "express";
import fs from "fs";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  seedProducts,
} from "../controllers/product.controller.js";

const productRouter = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const productUploadsDir = path.join(__dirname, "..", "uploads", "products");

fs.mkdirSync(productUploadsDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, productUploadsDir),
  filename: (_req, file, cb) => {
    const extension = path.extname(file.originalname).toLowerCase();
    const baseName = path
      .basename(file.originalname, extension)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    cb(null, `${Date.now()}-${baseName || "product"}${extension}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (/^image\/(jpeg|png|webp|gif)$/i.test(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed"));
    }
  },
});

const handleProductImageUpload = (req, res, next) => {
  upload.single("imageFile")(req, res, (error) => {
    if (error) {
      return res.status(400).json({
        message: error.message,
        success: false,
      });
    }

    next();
  });
};

// Mounted in index.js as: app.use("/api/product", productRouter)
// So these routes are: GET /api/product  POST /api/product  etc.
productRouter.post("/", handleProductImageUpload, createProduct);
productRouter.get("/", getProducts);
productRouter.put("/:id", handleProductImageUpload, updateProduct);
productRouter.delete("/:id", deleteProduct);

// Seeder - scans backend/uploads and creates product documents
productRouter.post("/seed", seedProducts);

export default productRouter;
