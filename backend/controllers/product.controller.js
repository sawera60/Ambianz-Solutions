import Product from "../models/product.model.js";

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
