import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import {
  FiUploadCloud,
  FiFile,
  FiTag,
  FiLayers,
  FiDollarSign,
  FiArrowLeft,
  FiSave,
} from "react-icons/fi";
import { authDataContext } from "../../../context/AuthContext.jsx";

export default function AddProduct({ editProduct, onCancel, onSaved }) {
  const isEditMode = !!editProduct;

  const { serverUrl } = useContext(authDataContext);
  const [formData, setFormData] = useState({
    id: "",
    Pname: "",
    pprice: "",
    category: "",
    material: "",
    description: "",
    quantity: "",
    image: "",
  });

  const [imageFileName, setImageFileName] = useState("");
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Load product if editing
  useEffect(() => {
    if (isEditMode && editProduct) {
      setFormData({
        id: editProduct.id || "",
        Pname: editProduct.Pname || "",
        pprice: editProduct.pprice || "",
        category: editProduct.category || "",
        material: editProduct.material || "",
        description: editProduct.description || "",
        quantity: editProduct.quantity || "",
        image: editProduct.image || "",
      });
      if (editProduct.image) {
        setImageFileName("Existing Image Loaded");
      }
    } else {
      // Clear form for add mode
      setFormData({
        id: Math.floor(100 + Math.random() * 900), // Random mock ID
        Pname: "",
        pprice: "",
        category: "",
        material: "",
        description: "",
        quantity: "",
        image: "",
      });
      setImageFileName("");
    }
    setSaveSuccess(false);
  }, [editProduct, isEditMode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "pprice" || name === "quantity" ? Number(value) : value,
    }));
  };

  const handleMockUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFileName(file.name);
      // Give it a mock URL from unsplash representing the category
      setFormData((prev) => ({
        ...prev,
        image:
          "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&auto=format&fit=crop&q=60",
      }));
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setErrorMessage("");

    try {
      const payload = {
        ...formData,
        pprice: Number(formData.pprice),
        quantity: Number(formData.quantity),
      };

      if (editProduct) {
        await axios.put(`${serverUrl}/api/product/${editProduct.id}`, payload);
      } else {
        await axios.post(`${serverUrl}/api/product`, payload);
      }

      setSaveSuccess(true);
      if (onSaved) {
        onSaved();
      }
      setTimeout(() => {
        setSaveSuccess(false);
      }, 1200);
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message ||
          "Failed to save product. Please try again.",
      );
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn duration-300">
      {/* Header Back Button Row */}
      <div className="flex items-center justify-between">
        <button
          onClick={onCancel}
          className="flex items-center gap-2 font-raleway text-[10px] tracking-[2px] font-bold text-gray-500 hover:text-[#3c5a25] transition-colors uppercase border border-[#e0ddd5] px-4 py-2 bg-white"
        >
          <FiArrowLeft size={12} />
          <span>Back to Products</span>
        </button>
        <span className="font-raleway text-[9px] tracking-[2px] text-gray-400 font-bold uppercase">
          {isEditMode ? "EDITING MODE" : "CREATION MODE"}
        </span>
      </div>

      {/* Main Form container */}
      <div className="bg-white border border-[#e0ddd5] p-6 md:p-8 relative">
        {/* Success Alert Overlay */}
        {saveSuccess && (
          <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-10 flex flex-col items-center justify-center animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-[#3c5a25]/10 flex items-center justify-center text-[#3c5a25] mb-4">
              <FiSave size={32} />
            </div>
            <h3 className="font-cinzel text-lg font-bold text-[#1A1C19] tracking-wide mb-1 uppercase">
              Product Saved
            </h3>
            <p className="font-raleway text-xs text-gray-500 tracking-wider">
              {isEditMode
                ? "Product updated successfully."
                : "New product added to inventory."}
            </p>
          </div>
        )}

        <form onSubmit={handleFormSubmit} className="space-y-8">
          <div className="border-b border-[#e0ddd5] pb-4 mb-6">
            <h3 className="font-cinzel text-xs md:text-sm font-bold tracking-[2px] text-[#1A1C19] uppercase">
              {isEditMode
                ? `Edit Product: ${formData.Pname}`
                : "Create New Product"}
            </h3>
            <p className="font-raleway text-[10px] text-gray-400 tracking-wider mt-0.5">
              Enter product specifications matching storefront inventory schema
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Side: Text Inputs */}
            <div className="space-y-6">
              {/* Product ID (Readonly) */}
              <div>
                <label className="block font-raleway text-[9px] tracking-wider text-gray-400 font-bold uppercase mb-2">
                  PRODUCT CODE / ID
                </label>
                <input
                  type="text"
                  value={formData.id}
                  disabled
                  className="w-full p-3.5 border border-[#e0ddd5] bg-gray-50 font-raleway text-xs text-gray-400 tracking-wider cursor-not-allowed"
                />
              </div>

              {/* Product Name */}
              <div>
                <label className="block font-raleway text-[9px] tracking-wider text-gray-400 font-bold uppercase mb-2">
                  PRODUCT NAME *
                </label>
                <input
                  type="text"
                  name="Pname"
                  value={formData.Pname}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Minimalist Pendant Light"
                  className="w-full p-3.5 border border-[#e0ddd5] focus:border-[#3c5a25] outline-none font-raleway text-xs text-[#1A1C19] tracking-wide bg-transparent"
                />
              </div>

              {/* Grid: Price and Quantity */}
              <div className="grid grid-cols-2 gap-4">
                {/* Price */}
                <div>
                  <label className="font-raleway text-[9px] tracking-wider text-gray-400 font-bold uppercase mb-2 flex items-center gap-1.5">
                    <FiDollarSign size={10} /> PRICE (GBP) *
                  </label>
                  <input
                    type="number"
                    name="pprice"
                    value={formData.pprice}
                    onChange={handleChange}
                    required
                    min="0"
                    placeholder="245"
                    className="w-full p-3.5 border border-[#e0ddd5] focus:border-[#3c5a25] outline-none font-raleway text-xs text-[#1A1C19] tracking-wide bg-transparent"
                  />
                </div>

                {/* Stock Quantity */}
                <div>
                  <label className="block font-raleway text-[9px] tracking-wider text-gray-400 font-bold uppercase mb-2">
                    STOCK QUANTITY *
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                    min="0"
                    placeholder="12"
                    className="w-full p-3.5 border border-[#e0ddd5] focus:border-[#3c5a25] outline-none font-raleway text-xs text-[#1A1C19] tracking-wide bg-transparent"
                  />
                </div>
              </div>

              {/* Grid: Category and Material */}
              <div className="grid grid-cols-2 gap-4">
                {/* Category */}
                <div className="relative">
                  <label className="font-raleway text-[9px] tracking-wider text-gray-400 font-bold uppercase mb-2 flex items-center gap-1.5">
                    <FiLayers size={10} /> CATEGORY *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full p-3.5 border border-[#e0ddd5] focus:border-[#3c5a25] outline-none font-raleway text-xs text-[#1A1C19] bg-transparent cursor-pointer appearance-none uppercase"
                  >
                    <option value="" disabled>
                      SELECT CATEGORY
                    </option>
                    <option value="lighting">Lighting</option>
                    <option value="wall_art">Wall Art</option>
                    <option value="clocks">Clocks</option>
                    <option value="mirrors">Mirrors</option>
                    <option value="furniture">Furniture</option>
                    <option value="hardware">Hardware</option>
                    <option value="planters">Planters</option>
                  </select>
                  <span className="absolute right-4.5 bottom-4 text-gray-400 text-[10px] pointer-events-none">
                    ▼
                  </span>
                </div>

                {/* Material */}
                <div className="relative">
                  <label className="font-raleway text-[9px] tracking-wider text-gray-400 font-bold uppercase mb-2 flex items-center gap-1.5">
                    <FiTag size={10} /> MATERIAL *
                  </label>
                  <select
                    name="material"
                    value={formData.material}
                    onChange={handleChange}
                    required
                    className="w-full p-3.5 border border-[#e0ddd5] focus:border-[#3c5a25] outline-none font-raleway text-xs text-[#1A1C19] bg-transparent cursor-pointer appearance-none uppercase"
                  >
                    <option value="" disabled>
                      SELECT MATERIAL
                    </option>
                    <option value="metal">Metal</option>
                    <option value="wood">Wood</option>
                    <option value="glass">Glass</option>
                    <option value="marble">Marble</option>
                    <option value="ceramic">Ceramic</option>
                    <option value="brass">Brass</option>
                    <option value="stone">Stone</option>
                  </select>
                  <span className="absolute right-4.5 bottom-4 text-gray-400 text-[10px] pointer-events-none">
                    ▼
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side: Media Upload and Description */}
            <div className="space-y-6">
              {/* Image upload zone */}
              <div>
                <label className="block font-raleway text-[9px] tracking-wider text-gray-400 font-bold uppercase mb-2">
                  PRODUCT IMAGES *
                </label>
                <div className="border-2 border-dashed border-[#e0ddd5] hover:border-[#3c5a25] p-6 text-center cursor-pointer transition-colors duration-300 flex flex-col items-center justify-center relative bg-[#F8F6F1]/30">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleMockUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  <FiUploadCloud className="text-gray-400 mb-3" size={32} />
                  <p className="font-raleway text-xs font-bold text-gray-600 mb-1">
                    Drag and drop product images here
                  </p>
                  <p className="font-raleway text-[10px] text-gray-400">
                    Supports JPG, PNG, WEBP (Max 5MB)
                  </p>
                  {imageFileName && (
                    <div className="mt-4 flex items-center gap-2 bg-[#3c5a25]/10 border border-[#3c5a25]/20 text-[#3c5a25] px-3 py-1.5 rounded-sm">
                      <FiFile size={12} />
                      <span className="font-raleway text-[10px] font-bold truncate max-w-45">
                        {imageFileName}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block font-raleway text-[9px] tracking-wider text-gray-400 font-bold uppercase mb-2">
                  PRODUCT DESCRIPTION *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Write detailed information about the product features, measurements, installation instructions, packaging details, and care rules..."
                  className="w-full p-4 border border-[#e0ddd5] focus:border-[#3c5a25] outline-none font-raleway text-xs text-[#1A1C19] bg-transparent resize-none leading-relaxed"
                />
              </div>
            </div>
          </div>

          {/* Form Actions footer */}
          {errorMessage && (
            <div className="rounded-sm border border-red-200 bg-red-50 text-red-700 px-4 py-3 text-[10px] font-raleway font-medium tracking-wider">
              {errorMessage}
            </div>
          )}
          <div className="border-t border-[#e0ddd5] pt-6 flex justify-end gap-4">
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-3 border border-[#e0ddd5] text-[10px] font-raleway font-bold uppercase tracking-[2px] hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSaving}
              className="bg-[#3c5a25] hover:bg-[#2a3f1a] text-white px-7 py-3 text-[10px] font-raleway font-bold uppercase tracking-[2px] flex items-center gap-2 shadow-lg shadow-[#3c5a25]/20 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FiSave size={13} />
              <span>{isEditMode ? "Save Changes" : "Create Product"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
