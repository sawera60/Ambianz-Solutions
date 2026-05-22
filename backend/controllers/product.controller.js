import Product from "../models/product.model.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import imageSize from "image-size";

export const createProduct = async (req, res) => {
  try {
    const { id, Pname, pprice, image, category, material, description, quantity } = req.body;

    if (
      id === undefined ||
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

    const existingProduct = await Product.findOne({ id });
    if (existingProduct) {
      return res.status(409).json({
        message: "A product with this ID already exists",
        success: false,
      });
    }

    const product = await Product.create({
      id,
      Pname,
      pprice,
      image,
      category,
      material,
      description,
      quantity,
    });

    return res.status(201).json({
      message: "Product created successfully",
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
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
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
      success: false,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const productId = Number(req.params.id);
    const updateData = req.body;

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
    return res.status(500).json({
      message: "Internal Server Error",
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
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
      success: false,
    });
  }
};

export const seedProducts = async (req, res) => {
  try {
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

          const material = mappedCategory === "Hardware" ? "Metal" : (mappedCategory.includes("Chair") || mappedCategory.includes("Stool") ? "Fabric" : "Wood");
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
