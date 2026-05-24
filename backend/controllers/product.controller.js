import Product from "../models/product.model.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import imageSize from "image-size";

const getErrorResponse = (error) => {
  if (error.name === "ValidationError") {
    return { status: 400, message: error.message };
  }

  if (error.message?.includes("bufferCommands = false")) {
    return {
      status: 503,
      message: "Database is not connected. Check MongoDB Atlas network access and credentials.",
    };
  }

  return { status: 500, message: "Internal Server Error" };
};

export const createProduct = async (req, res) => {
  try {
    const { id, Pname, pprice, category, description, quantity } = req.body;
    const image = req.file ? `products/${req.file.filename}` : req.body.image;
    const material = String(req.body.material || "").toLowerCase();

    if (
      !Pname ||
      pprice === undefined ||
      !image ||
      !category ||
      !material ||
      !description ||
      quantity === undefined
    ) {
      return res.status(400).json({
        message: "All product fields are required",
        success: false,
      });
    }

    let productId = Number(id);
    if (!Number.isFinite(productId)) {
      const maxDoc = await Product.findOne().sort({ id: -1 });
      productId = maxDoc ? Number(maxDoc.id) + 1 : 1;
    } else if (await Product.findOne({ id: productId })) {
      const maxDoc = await Product.findOne().sort({ id: -1 });
      productId = maxDoc ? Number(maxDoc.id) + 1 : productId + 1;
    }

    const product = await Product.create({
      id: productId,
      Pname,
      pprice: Number(pprice),
      image,
      category,
      material,
      description,
      quantity: Number(quantity),
    });

    return res.status(201).json({
      message: "Product created successfully",
      success: true,
      product,
    });
  } catch (error) {
    const response = getErrorResponse(error);
    res.status(response.status).json({
      message: response.message,
      error: error.message,
      success: false,
    });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({}).sort({ id: 1 });
    return res.status(200).json({
      message: "Products retrieved successfully",
      success: true,
      products,
    });
  } catch (error) {
    const response = getErrorResponse(error);
    return res.status(response.status).json({
      message: response.message,
      error: error.message,
      success: false,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const productId = Number(req.params.id);
    const updateData = {
      ...req.body,
      ...(req.file ? { image: `products/${req.file.filename}` } : {}),
      ...(req.body.material ? { material: String(req.body.material).toLowerCase() } : {}),
      ...(req.body.pprice !== undefined ? { pprice: Number(req.body.pprice) } : {}),
      ...(req.body.quantity !== undefined ? { quantity: Number(req.body.quantity) } : {}),
    };

    const product = await Product.findOneAndUpdate({ id: productId }, updateData, {
      new: true,
      runValidators: true,
    });

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Product updated successfully",
      success: true,
      product,
    });
  } catch (error) {
    const response = getErrorResponse(error);
    return res.status(response.status).json({
      message: response.message,
      error: error.message,
      success: false,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const productId = Number(req.params.id);
    const product = await Product.findOneAndDelete({ id: productId });

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Product deleted successfully",
      success: true,
      product,
    });
  } catch (error) {
    const response = getErrorResponse(error);
    return res.status(response.status).json({
      message: response.message,
      error: error.message,
      success: false,
    });
  }
};

export const seedProducts = async (req, res) => {
  try {
    if (process.env.ALLOW_PRODUCT_SEED !== "true") {
      return res.status(403).json({
        message: "Product seeding is disabled",
        success: false,
      });
    }

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const uploadsDir = path.join(__dirname, "..", "uploads");

    if (!fs.existsSync(uploadsDir)) {
      return res.status(400).json({ message: "Uploads folder not found", success: false });
    }

    // mapping folder names to category labels used in frontend
    const categoryMap = {
      "islamic wall art": "Islamic Wall Art",
      "coffetables": "Coffee Table",
      "drawers": "Drawers",
      "fulllenthmirror": "Full Length Mirror",
      "hardware": "Hardware",
      "lighting": "Lighting",
      "mirrorwithshelves": "Mirror with Shelves",
      "officechairs": "Office Chair",
      "studytable": "Study Table",
      "vanity stool": "Vanity Stool",
    };

    const folders = fs.readdirSync(uploadsDir, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);
    let created = 0;

    // find current max id
    const maxDoc = await Product.findOne().sort({ id: -1 });
    let nextId = maxDoc ? Number(maxDoc.id) + 1 : 1;

    for (const folder of folders) {
      const folderPath = path.join(uploadsDir, folder);
      const files = fs.readdirSync(folderPath).filter(f => /\.(jpe?g|png|webp)$/i.test(f));
      const mappedCategory = categoryMap[folder.toLowerCase().trim()] || "Wall Art";

      for (const file of files) {
        try {
          // skip thumbnails or cropped files by filename heuristics
          const lower = file.toLowerCase();
          if (lower.includes("thumb") || lower.includes("crop") || lower.includes("small")) continue;

          const filePath = path.join(folderPath, file);
          const dim = imageSize(filePath);
          if (!dim || dim.width < 800 || dim.height < 600) continue; // require HD-ish images

          const imageField = `${folder}/${file}`;

          // avoid duplicates
          const exists = await Product.findOne({ image: imageField });
          if (exists) continue;

          const name = path.basename(file, path.extname(file)).replace(/[-_]/g, " ").replace(/\s+/g, " ").trim();
          const Pname = name.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

          const material = mappedCategory === "Hardware" ? "metal" : (mappedCategory.includes("Mirror") ? "glass" : "wood");
          const pprice = Math.floor(50 + Math.random() * 450);

          await Product.create({
            id: nextId++,
            Pname,
            pprice,
            image: imageField,
            category: mappedCategory,
            material,
            description: `Imported from uploads/${folder}`,
            quantity: 10,
          });
          created++;
        } catch (e) {
          // ignore single file errors and continue
          console.warn("seed file error", e.message);
        }
      }
    }

    return res.status(200).json({ message: `Seeder completed. Created ${created} products.`, success: true, created });
  } catch (error) {
    return res.status(500).json({ message: "Seeder error", error: error.message, success: false });
  }
};
