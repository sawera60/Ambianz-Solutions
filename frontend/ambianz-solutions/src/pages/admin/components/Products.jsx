import React, { useState, useEffect, useContext, useCallback } from "react";
import axios from "axios";
import {
  FiSearch,
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiLayers,
  FiTag,
  FiAlertTriangle,
  FiCheckCircle,
  FiGrid,
  FiList,
} from "react-icons/fi";
import { authDataContext } from "../../../context/AuthContext.jsx";

export default function Products({ refreshTrigger, onEditProduct, onNavigateToAdd }) {
  const { serverUrl } = useContext(authDataContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [viewMode, setViewMode] = useState("grid"); // grid or list
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await axios.get(`${serverUrl}/api/product`);
      if (response.data?.success) {
        setProductList(response.data.products || []);
      } else {
        setErrorMessage("Could not load products from server.");
      }
    } catch {
      setErrorMessage("Failed to load products from server.");
    } finally {
      setLoading(false);
    }
  }, [serverUrl]);

  useEffect(() => {
    fetchProducts();
  }, [refreshTrigger, fetchProducts]);

  // Delete product handler
  const handleDeleteProduct = async (id) => {
    if (!window.confirm("Are you sure you want to remove this product from the inventory?")) {
      return;
    }

    try {
      await axios.delete(`${serverUrl}/api/product/${id}`);
      setProductList((prev) => prev.filter((p) => p.id !== id));
    } catch {
      window.alert("Unable to delete product. Please try again.");
    }
  };

  // Filtered List
  const filteredProducts = productList.filter((product) => {
    const matchesSearch = product.Pname.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.material.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "All" || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  // Display category enum names in clean format
  const formatCategory = (cat) => {
    return cat.replace("_", " ");
  };

  // Render stock badges
  const renderStockStatus = (qty) => {
    if (qty === 0) {
      return (
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-red-50 border border-red-200 text-red-700 font-raleway text-[9px] font-bold uppercase tracking-wider">
          <FiAlertTriangle size={10} />
          Out of Stock
        </span>
      );
    }
    if (qty <= 5) {
      return (
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-amber-50 border border-amber-200 text-amber-700 font-raleway text-[9px] font-bold uppercase tracking-wider">
          <FiAlertTriangle size={10} />
          Low Stock ({qty})
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-green-50 border border-green-200 text-green-700 font-raleway text-[9px] font-bold uppercase tracking-wider">
        <FiCheckCircle size={10} />
        In Stock ({qty})
      </span>
    );
  };

  return (
    <div className="space-y-6 animate-fadeIn duration-300">
      
      {/* Top action block */}
      <div className="bg-white p-6 border border-[#e0ddd5] flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
        
        {/* Search Input */}
        <div className="relative flex-1 max-w-sm">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
          <input
            type="text"
            placeholder="SEARCH PRODUCTS..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-[#e0ddd5] focus:border-[#3c5a25] focus:outline-none font-raleway text-[10px] tracking-widest text-[#1A1C19]"
          />
        </div>

        {/* Filters and buttons */}
        <div className="flex flex-wrap gap-3 items-center">
          
          {/* Category drop */}
          <div className="relative flex items-center bg-[#F8F6F1] border border-[#e0ddd5]">
            <FiLayers className="text-gray-400 text-xs ml-3 pointer-events-none" />
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="pl-2 pr-8 py-2 outline-none font-raleway text-[9px] tracking-widest text-[#1A1C19] bg-transparent cursor-pointer font-bold uppercase appearance-none"
            >
              <option value="All">ALL CATEGORIES</option>
              <option value="lighting">Lighting</option>
              <option value="wall_art">Wall Art</option>
              <option value="clocks">Clocks</option>
              <option value="mirrors">Mirrors</option>
              <option value="furniture">Furniture</option>
              <option value="hardware">Hardware</option>
              <option value="planters">Planters</option>
            </select>
            <span className="absolute right-2.5 text-gray-400 text-[9px] pointer-events-none">▼</span>
          </div>

          {/* Grid/List switch */}
          <div className="flex border border-[#e0ddd5]">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 transition-colors ${viewMode === "grid" ? "bg-[#3c5a25] text-white" : "bg-white text-gray-600 hover:bg-gray-50"}`}
              title="Grid View"
            >
              <FiGrid size={14} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 transition-colors ${viewMode === "list" ? "bg-[#3c5a25] text-white" : "bg-white text-gray-600 hover:bg-gray-50"}`}
              title="List View"
            >
              <FiList size={14} />
            </button>
          </div>

          {/* Add Product Button */}
          <button
            onClick={onNavigateToAdd}
            className="bg-[#3c5a25] hover:bg-[#2a3f1a] text-white px-5 py-2 text-[10px] font-raleway font-bold uppercase tracking-[2px] flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
          >
            <FiPlus size={14} />
            <span>Add Product</span>
          </button>

        </div>

      </div>

      {/* Main product display */}
      {loading && (
        <div className="bg-white border border-[#e0ddd5] p-8 text-center font-raleway text-xs text-gray-500">
          Loading products...
        </div>
      )}
      {errorMessage && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 text-[10px] font-raleway uppercase tracking-[2px]">
          {errorMessage}
        </div>
      )}
      {viewMode === "grid" ? (
        /* Grid Layout */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-[#e0ddd5] flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
              >
                {/* Product Image block */}
                <div className="relative aspect-video w-full overflow-hidden bg-gray-100 border-b border-[#e0ddd5]">
                  <img
                    src={product.image}
                    alt={product.Pname}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
                    <span className="px-2 py-0.5 bg-[#1A1C19] text-[#F8F6F1] font-raleway text-[8px] font-bold tracking-widest uppercase">
                      ID: {product.id}
                    </span>
                    <span className="px-2 py-0.5 bg-[#adb940] text-[#1A1C19] font-raleway text-[8px] font-bold tracking-widest uppercase">
                      {formatCategory(product.category)}
                    </span>
                  </div>
                </div>

                {/* Content info */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-cinzel text-xs font-bold text-[#1A1C19] tracking-wider mb-2 line-clamp-1">
                      {product.Pname}
                    </h4>
                    
                    {/* Tags */}
                    <div className="flex gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 font-raleway text-[9px] text-gray-400 font-bold uppercase">
                        <FiTag size={10} />
                        {product.material}
                      </span>
                    </div>

                    <p className="font-raleway text-[11px] text-gray-500 leading-relaxed line-clamp-2 mb-4">
                      {product.description}
                    </p>
                  </div>

                  <div className="border-t border-[#F8F6F1] pt-4 flex items-center justify-between">
                    <div>
                      <span className="font-raleway text-[9px] text-gray-400 block tracking-wider uppercase font-bold">Price</span>
                      <span className="font-cinzel text-sm font-bold text-[#3c5a25]">
                        £{product.pprice.toFixed(2)}
                      </span>
                    </div>
                    <div>
                      {renderStockStatus(product.quantity)}
                    </div>
                  </div>
                </div>

                {/* Edit & Delete hover overlay bar */}
                <div className="border-t border-[#e0ddd5] bg-[#F8F6F1]/55 flex divide-x divide-[#e0ddd5]">
                  <button
                    onClick={() => onEditProduct(product)}
                    className="flex-1 py-3 text-[9px] font-raleway font-bold uppercase tracking-[2px] text-gray-600 hover:text-[#3c5a25] hover:bg-white transition-all flex items-center justify-center gap-2"
                  >
                    <FiEdit2 size={12} />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(product.id)}
                    className="flex-1 py-3 text-[9px] font-raleway font-bold uppercase tracking-[2px] text-gray-600 hover:text-red-700 hover:bg-white transition-all flex items-center justify-center gap-2"
                  >
                    <FiTrash2 size={12} />
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full bg-white p-12 border border-[#e0ddd5] text-center font-raleway text-xs text-gray-400 tracking-wider">
              NO PRODUCTS FOUND MATCHING FILTER CRITERIA
            </div>
          )}
        </div>
      ) : (
        /* List Layout */
        <div className="bg-white border border-[#e0ddd5] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F8F6F1] border-b border-[#e0ddd5]">
                  <th className="p-4 font-cinzel text-[10px] tracking-[2px] text-[#1A1C19] font-bold uppercase w-16 text-center">ID</th>
                  <th className="p-4 font-cinzel text-[10px] tracking-[2px] text-[#1A1C19] font-bold uppercase w-20">Image</th>
                  <th className="p-4 font-cinzel text-[10px] tracking-[2px] text-[#1A1C19] font-bold uppercase">Product Details</th>
                  <th className="p-4 font-cinzel text-[10px] tracking-[2px] text-[#1A1C19] font-bold uppercase">Category</th>
                  <th className="p-4 font-cinzel text-[10px] tracking-[2px] text-[#1A1C19] font-bold uppercase">Material</th>
                  <th className="p-4 font-cinzel text-[10px] tracking-[2px] text-[#1A1C19] font-bold uppercase">Inventory</th>
                  <th className="p-4 font-cinzel text-[10px] tracking-[2px] text-[#1A1C19] font-bold uppercase">Price</th>
                  <th className="p-4 font-cinzel text-[10px] tracking-[2px] text-[#1A1C19] font-bold uppercase w-28 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e0ddd5]">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <tr key={product.id} className="hover:bg-[#F8F6F1]/30 transition-colors">
                      <td className="p-4 text-center font-raleway text-xs text-gray-400 font-bold">{product.id}</td>
                      <td className="p-4">
                        <img
                          src={product.image}
                          alt={product.Pname}
                          className="w-12 h-12 object-cover border border-[#e0ddd5]"
                        />
                      </td>
                      <td className="p-4">
                        <div className="flex flex-col">
                          <span className="font-raleway text-xs font-bold text-[#1A1C19]">{product.Pname}</span>
                          <span className="font-raleway text-[10px] text-gray-400 line-clamp-1 mt-0.5 max-w-sm">{product.description}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="font-raleway text-[10px] tracking-wider uppercase font-semibold text-gray-600 bg-gray-100 px-2 py-0.5">
                          {formatCategory(product.category)}
                        </span>
                      </td>
                      <td className="p-4 font-raleway text-xs text-gray-600 capitalize">{product.material}</td>
                      <td className="p-4">{renderStockStatus(product.quantity)}</td>
                      <td className="p-4 font-cinzel text-xs font-bold text-[#3c5a25]">£{product.pprice.toFixed(2)}</td>
                      <td className="p-4 text-right">
                        <div className="flex gap-2 justify-end">
                          <button
                            onClick={() => onEditProduct(product)}
                            className="p-2 border border-[#e0ddd5] text-gray-600 hover:border-[#3c5a25] hover:text-[#3c5a25] hover:bg-[#F8F6F1]"
                            title="Edit"
                          >
                            <FiEdit2 size={12} />
                          </button>
                          <button
                            onClick={() => handleDeleteProduct(product.id)}
                            className="p-2 border border-[#e0ddd5] text-gray-600 hover:border-red-600 hover:text-white hover:bg-red-600"
                            title="Delete"
                          >
                            <FiTrash2 size={12} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="p-10 text-center font-raleway text-xs text-gray-400 tracking-wider">
                      NO PRODUCTS FOUND MATCHING FILTER CRITERIA
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
}
