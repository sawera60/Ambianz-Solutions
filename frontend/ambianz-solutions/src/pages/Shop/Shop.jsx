import React, { useState, useEffect, useCallback, useContext } from "react";
import Herosections from "./components/Herosections";
import axios from "axios";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import ProductModal from "./components/ProductModal";
import { CartContext } from "../../context/CartContext";
import { BACKEND_URL, getImageUrl } from "../../utils/api.js";

// ─── Backend base URL ──────────────────────────────────────────────────────────
// ─── Static product data (images served from backend /uploads static route) ───
// This data is shown immediately. If the backend /api/product returns products
// they will replace this array automatically.
const STATIC_PRODUCTS = [
  // ── Wall Art ──────────────────────────────────────────────────────────────
  { id: 1, name: "Abstract Wall Panel", category: "Wall Art", price: "£85", material: "Canvas", img: `${BACKEND_URL}/uploads/islamic%20wall%20art/wallart1.jpg` },
  { id: 2, name: "Modern Wall Composition", category: "Wall Art", price: "£120", material: "Canvas", img: `${BACKEND_URL}/uploads/islamic%20wall%20art/wallart2.jpg` },
  { id: 3, name: "Geometric Wall Piece", category: "Wall Art", price: "£95", material: "Metal", img: `${BACKEND_URL}/uploads/islamic%20wall%20art/wallart4.jpg` },
  { id: 4, name: "Boho Wall Hanging", category: "Wall Art", price: "£60", material: "Fabric", img: `${BACKEND_URL}/uploads/islamic%20wall%20art/wallart5.jpg` },
  { id: 5, name: "Luxury Wall Canvas", category: "Wall Art", price: "£110", material: "Canvas", img: `${BACKEND_URL}/uploads/islamic%20wall%20art/wallart7.jpg` },
  { id: 6, name: "Gold Leaf Wall Art", category: "Wall Art", price: "£145", material: "Metal", img: `${BACKEND_URL}/uploads/islamic%20wall%20art/wallart8.jpg` },
  { id: 7, name: "3D Wall Sculpture", category: "Wall Art", price: "£190", material: "Resin", img: `${BACKEND_URL}/uploads/islamic%20wall%20art/wallart9.jpg` },
  { id: 8, name: "Panoramic Wall Print", category: "Wall Art", price: "£225", material: "Canvas", img: `${BACKEND_URL}/uploads/islamic%20wall%20art/wallart10.jpg` },
  { id: 9, name: "Minimalist Line Art", category: "Wall Art", price: "£78", material: "Wood", img: `${BACKEND_URL}/uploads/islamic%20wall%20art/wallart11.jpg` },
  { id: 10, name: "Botanical Wall Frame", category: "Wall Art", price: "£160", material: "Wood", img: `${BACKEND_URL}/uploads/islamic%20wall%20art/wallart12.jpg` },
  { id: 11, name: "Textured Wall Decor", category: "Wall Art", price: "£135", material: "Plaster", img: `${BACKEND_URL}/uploads/islamic%20wall%20art/wallart13.jpg` },
  { id: 12, name: "Coastal Wall Panel", category: "Wall Art", price: "£72", material: "Wood", img: `${BACKEND_URL}/uploads/islamic%20wall%20art/wallart14.jpg` },
  { id: 13, name: "Framed Gallery Print", category: "Wall Art", price: "£88", material: "Glass", img: `${BACKEND_URL}/uploads/islamic%20wall%20art/wallart15.jpg` },
  { id: 14, name: "Arch Wall Artwork", category: "Wall Art", price: "£95", material: "Canvas", img: `${BACKEND_URL}/uploads/islamic%20wall%20art/wallart16.jpg` },
  { id: 15, name: "Earthy Tones Panel", category: "Wall Art", price: "£82", material: "Canvas", img: `${BACKEND_URL}/uploads/islamic%20wall%20art/wallart17.jpg` },
  { id: 16, name: "Sculptural Wall Art", category: "Wall Art", price: "£98", material: "Metal", img: `${BACKEND_URL}/uploads/islamic%20wall%20art/wallart18.jpg` },

  // ── Islamic Wall Art ──────────────────────────────────────────────────────
  { id: 17, name: "Bismillah Calligraphy", category: "Islamic Wall Art", price: "£95", material: "Metal", img: `${BACKEND_URL}/uploads/islamic%20wall%20art/islamicwallart1.jpg` },
  { id: 18, name: "Allah Name Gold Frame", category: "Islamic Wall Art", price: "£130", material: "Wood", img: `${BACKEND_URL}/uploads/islamic%20wall%20art/islamicwallart2.jpg` },
  { id: 19, name: "Ayatul Kursi Panel", category: "Islamic Wall Art", price: "£78", material: "Metal", img: `${BACKEND_URL}/uploads/islamic%20wall%20art/islamicwallart3.jpg` },
  { id: 20, name: "3D Arabic Script", category: "Islamic Wall Art", price: "£155", material: "Resin", img: `${BACKEND_URL}/uploads/islamic%20wall%20art/islamicwallart4.jpg` },
  { id: 21, name: "Islamic Arch Frame", category: "Islamic Wall Art", price: "£88", material: "Wood", img: `${BACKEND_URL}/uploads/islamic%20wall%20art/islamicwallart5.jpg` },
  { id: 22, name: "Gold Calligraphy Set", category: "Islamic Wall Art", price: "£110", material: "Metal", img: `${BACKEND_URL}/uploads/islamic%20wall%20art/islamicwallart6.jpg` },
  { id: 23, name: "Quran Verse Frame", category: "Islamic Wall Art", price: "£92", material: "Wood", img: `${BACKEND_URL}/uploads/islamic%20wall%20art/islamicwallart7.jpg` },
  { id: 24, name: "Luxury Arabic Plaque", category: "Islamic Wall Art", price: "£140", material: "Metal", img: `${BACKEND_URL}/uploads/islamic%20wall%20art/islamicwallart8.jpg` },
  { id: 25, name: "Geometric Islamic Art", category: "Islamic Wall Art", price: "£175", material: "Metal", img: `${BACKEND_URL}/uploads/islamic%20wall%20art/islamicwallart9.jpg` },

  // ── Clocks ────────────────────────────────────────────────────────────────
  { id: 26, name: "Vintage Wall Clock", category: "Clocks", price: "£65", material: "Metal", img: `${BACKEND_URL}/uploads/islamic%20wall%20art/clock.jpg` },
  { id: 27, name: "Nordic Minimalist Clock", category: "Clocks", price: "£55", material: "Wood", img: `${BACKEND_URL}/uploads/islamic%20wall%20art/clock1.jpg` },
  { id: 28, name: "Gold Rim Wall Clock", category: "Clocks", price: "£110", material: "Metal", img: `${BACKEND_URL}/uploads/islamic%20wall%20art/clock2.jpg` },
  { id: 29, name: "Marble Face Clock", category: "Clocks", price: "£135", material: "Marble", img: `${BACKEND_URL}/uploads/islamic%20wall%20art/clock3.jpg` },
  { id: 30, name: "Industrial Gear Clock", category: "Clocks", price: "£89", material: "Metal", img: `${BACKEND_URL}/uploads/islamic%20wall%20art/clock4.jpg` },
  { id: 31, name: "Brushed Brass Clock", category: "Clocks", price: "£75", material: "Brass", img: `${BACKEND_URL}/uploads/islamic%20wall%20art/clock5.jpg` },
  { id: 32, name: "Oversized Decor Clock", category: "Clocks", price: "£160", material: "Metal", img: `${BACKEND_URL}/uploads/islamic%20wall%20art/clock6.jpg` },

  // ── Coffee Table ──────────────────────────────────────────────────────────
  { id: 33, name: "Oak Coffee Table", category: "Coffee Table", price: "£280", material: "Wood", img: `${BACKEND_URL}/uploads/coffetables/coffetable1.jpg` },
  { id: 34, name: "Marble Top Coffee Table", category: "Coffee Table", price: "£450", material: "Marble", img: `${BACKEND_URL}/uploads/coffetables/coffetable2.jpg` },
  { id: 35, name: "Glass & Steel Table", category: "Coffee Table", price: "£320", material: "Glass", img: `${BACKEND_URL}/uploads/coffetables/coffetable3.jpg` },
  { id: 36, name: "Rustic Reclaimed Table", category: "Coffee Table", price: "£395", material: "Wood", img: `${BACKEND_URL}/uploads/coffetables/coffetable4.jpg` },
  { id: 37, name: "Oval Walnut Table", category: "Coffee Table", price: "£260", material: "Wood", img: `${BACKEND_URL}/uploads/coffetables/coffetable5.jpg` },
  { id: 38, name: "Nest of Tables Set", category: "Coffee Table", price: "£340", material: "Wood", img: `${BACKEND_URL}/uploads/coffetables/coffetable6.jpg` },
  { id: 39, name: "Round Coffee Table", category: "Coffee Table", price: "£225", material: "Wood", img: `${BACKEND_URL}/uploads/coffetables/coffetable7.jpg` },
  { id: 40, name: "Gold Accent Table", category: "Coffee Table", price: "£480", material: "Metal", img: `${BACKEND_URL}/uploads/coffetables/coffetable8.jpg` },
  { id: 41, name: "Herringbone Table", category: "Coffee Table", price: "£310", material: "Wood", img: `${BACKEND_URL}/uploads/coffetables/coffetable9.jpg` },
  { id: 42, name: "Sculptural Coffee Table", category: "Coffee Table", price: "£550", material: "Marble", img: `${BACKEND_URL}/uploads/coffetables/coffetable10.jpg` },

  // ── Drawers ───────────────────────────────────────────────────────────────
  { id: 43, name: "3-Drawer Chest", category: "Drawers", price: "£195", material: "Wood", img: `${BACKEND_URL}/uploads/drawers/drawers1.jpg` },
  { id: 44, name: "Slim Bedside Drawer", category: "Drawers", price: "£125", material: "Wood", img: `${BACKEND_URL}/uploads/drawers/drawers2.jpg` },
  { id: 45, name: "Wide Chest of Drawers", category: "Drawers", price: "£340", material: "Wood", img: `${BACKEND_URL}/uploads/drawers/drawers3.jpg` },
  { id: 46, name: "Compact 2-Drawer Unit", category: "Drawers", price: "£145", material: "Wood", img: `${BACKEND_URL}/uploads/drawers/drawers4.jpg` },
  { id: 47, name: "Oak Tallboy Drawers", category: "Drawers", price: "£280", material: "Wood", img: `${BACKEND_URL}/uploads/drawers/drawers6.jpg` },
  { id: 48, name: "Vintage Chest", category: "Drawers", price: "£365", material: "Wood", img: `${BACKEND_URL}/uploads/drawers/drawers7.jpg` },
  { id: 49, name: "Modern 5-Drawer Cabinet", category: "Drawers", price: "£420", material: "Wood", img: `${BACKEND_URL}/uploads/drawers/drawers8.jpg` },
  { id: 50, name: "Japandi Drawer Unit", category: "Drawers", price: "£310", material: "Wood", img: `${BACKEND_URL}/uploads/drawers/drawers9.jpg` },
  { id: 51, name: "Timber Storage Drawers", category: "Drawers", price: "£255", material: "Wood", img: `${BACKEND_URL}/uploads/drawers/drawers10.jpg` },

  // ── Study Table ───────────────────────────────────────────────────────────
  { id: 52, name: "Executive Study Desk", category: "Study Table", price: "£380", material: "Wood", img: `${BACKEND_URL}/uploads/studytable/studytable1.jpg` },
  { id: 53, name: "Corner Study Table", category: "Study Table", price: "£295", material: "Wood", img: `${BACKEND_URL}/uploads/studytable/studytable2.jpg` },
  { id: 54, name: "Minimalist Writing Desk", category: "Study Table", price: "£220", material: "Wood", img: `${BACKEND_URL}/uploads/studytable/studytable4.jpg` },
  { id: 55, name: "Shelf Study Desk", category: "Study Table", price: "£265", material: "Wood", img: `${BACKEND_URL}/uploads/studytable/studytable6.jpg` },
  { id: 56, name: "Walnut Home Office Desk", category: "Study Table", price: "£445", material: "Wood", img: `${BACKEND_URL}/uploads/studytable/studytable7.jpg` },

  // ── Office Chair ──────────────────────────────────────────────────────────
  { id: 57, name: "Ergonomic Office Chair", category: "Office Chair", price: "£240", material: "Fabric", img: `${BACKEND_URL}/uploads/officechairs/chair1.jpg` },
  { id: 58, name: "Mesh Back Task Chair", category: "Office Chair", price: "£185", material: "Mesh", img: `${BACKEND_URL}/uploads/officechairs/chair2.jpg` },
  { id: 59, name: "Executive Leather Chair", category: "Office Chair", price: "£350", material: "Leather", img: `${BACKEND_URL}/uploads/officechairs/chair3.jpg` },
  { id: 60, name: "Mid-Century Desk Chair", category: "Office Chair", price: "£295", material: "Fabric", img: `${BACKEND_URL}/uploads/officechairs/chair4.jpg` },
  { id: 61, name: "Velvet Office Chair", category: "Office Chair", price: "£275", material: "Velvet", img: `${BACKEND_URL}/uploads/officechairs/chair5.jpg` },
  { id: 62, name: "Adjustable Work Chair", category: "Office Chair", price: "£210", material: "Fabric", img: `${BACKEND_URL}/uploads/officechairs/chair6.jpg` },
  { id: 63, name: "Luxury High-Back Chair", category: "Office Chair", price: "£420", material: "Leather", img: `${BACKEND_URL}/uploads/officechairs/chair7.jpg` },
  { id: 64, name: "Swivel Accent Chair", category: "Office Chair", price: "£315", material: "Fabric", img: `${BACKEND_URL}/uploads/officechairs/chair8.jpg` },

  // ── Vanity Stool ──────────────────────────────────────────────────────────
  { id: 65, name: "Tufted Vanity Chair", category: "Vanity Stool", price: "£135", material: "Velvet", img: `${BACKEND_URL}/uploads/vanity%20stool/vanitychair1.jpg` },
  { id: 66, name: "Gold Leg Vanity Chair", category: "Vanity Stool", price: "£155", material: "Velvet", img: `${BACKEND_URL}/uploads/vanity%20stool/vanitychair2.jpg` },
  { id: 67, name: "Floral Boudoir Chair", category: "Vanity Stool", price: "£120", material: "Fabric", img: `${BACKEND_URL}/uploads/vanity%20stool/vanitychair3.jpg` },
  { id: 68, name: "Cushioned Dressing Chair", category: "Vanity Stool", price: "£145", material: "Velvet", img: `${BACKEND_URL}/uploads/vanity%20stool/vanitychair4.jpg` },
  { id: 69, name: "Round Velvet Stool", category: "Vanity Stool", price: "£95", material: "Velvet", img: `${BACKEND_URL}/uploads/vanity%20stool/vanitystool1.jpg` },
  { id: 70, name: "Ottoman Vanity Stool", category: "Vanity Stool", price: "£110", material: "Fabric", img: `${BACKEND_URL}/uploads/vanity%20stool/vanitystool2.jpg` },
  { id: 71, name: "Marble Base Stool", category: "Vanity Stool", price: "£175", material: "Marble", img: `${BACKEND_URL}/uploads/vanity%20stool/vanitystool3.jpg` },

  // ── Full Length Mirror ────────────────────────────────────────────────────
  { id: 72, name: "Slim Full Length Mirror", category: "Full Length Mirror", price: "£195", material: "Glass", img: `${BACKEND_URL}/uploads/fulllenthmirror/mirror1.jpg` },
  { id: 73, name: "Arched Floor Mirror", category: "Full Length Mirror", price: "£260", material: "Glass", img: `${BACKEND_URL}/uploads/fulllenthmirror/mirror2.jpg` },
  { id: 74, name: "Gold Frame Full Mirror", category: "Full Length Mirror", price: "£310", material: "Metal", img: `${BACKEND_URL}/uploads/fulllenthmirror/mirror3.jpg` },
  { id: 75, name: "Leaning Wall Mirror", category: "Full Length Mirror", price: "£240", material: "Wood", img: `${BACKEND_URL}/uploads/fulllenthmirror/mirror4.jpg` },

  // ── Mirror with Shelves ───────────────────────────────────────────────────
  { id: 76, name: "Mirror Cabinet with Shelf", category: "Mirror with Shelves", price: "£145", material: "Wood", img: `${BACKEND_URL}/uploads/mirrorwithshelves/mirrorwithshelf2.jpg` },
  { id: 77, name: "Floating Mirror Shelf", category: "Mirror with Shelves", price: "£175", material: "Wood", img: `${BACKEND_URL}/uploads/mirrorwithshelves/mirrorwithshelf3.jpg` },
  { id: 78, name: "Bathroom Mirror Shelf", category: "Mirror with Shelves", price: "£195", material: "Metal", img: `${BACKEND_URL}/uploads/mirrorwithshelves/mirrorwithshelf4.jpg` },
  { id: 79, name: "Ornate Mirror & Storage", category: "Mirror with Shelves", price: "£280", material: "Wood", img: `${BACKEND_URL}/uploads/mirrorwithshelves/mirrorwithshelf5.jpg` },

  // ── Lighting ──────────────────────────────────────────────────────────────
  { id: 80, name: "Arc Floor Lamp", category: "Lighting", price: "£125", material: "Metal", img: `${BACKEND_URL}/uploads/lighting/lamps1.jpg` },
  { id: 81, name: "Tripod Table Lamp", category: "Lighting", price: "£78", material: "Wood", img: `${BACKEND_URL}/uploads/lighting/lamps3.jpg` },
  { id: 82, name: "Industrial Cage Lamp", category: "Lighting", price: "£85", material: "Metal", img: `${BACKEND_URL}/uploads/lighting/lamps4.jpg` },
  { id: 83, name: "Nordic Globe Lamp", category: "Lighting", price: "£95", material: "Glass", img: `${BACKEND_URL}/uploads/lighting/lamps5.jpg` },
  { id: 84, name: "Rattan Shade Lamp", category: "Lighting", price: "£68", material: "Rattan", img: `${BACKEND_URL}/uploads/lighting/lamps6.jpg` },
  { id: 85, name: "Luxury Pendant Light", category: "Lighting", price: "£210", material: "Metal", img: `${BACKEND_URL}/uploads/lighting/pendanat1.jpg` },

  // ── Hardware ──────────────────────────────────────────────────────────────
  { id: 86, name: "Brushed Gold Handles", category: "Hardware", price: "£28", material: "Brass", img: `${BACKEND_URL}/uploads/hardware/cabinethandle2.jpg` },
  { id: 87, name: "Matte Black Knobs Set", category: "Hardware", price: "£65", material: "Metal", img: `${BACKEND_URL}/uploads/hardware/cabinethandle3.jpg` },
  { id: 88, name: "Smart Door Lock", category: "Hardware", price: "£95", material: "Metal", img: `${BACKEND_URL}/uploads/hardware/doorlock1.jpg` },
  { id: 89, name: "Lever Door Handle", category: "Hardware", price: "£45", material: "Brass", img: `${BACKEND_URL}/uploads/hardware/doorlock2.jpg` },
  { id: 90, name: "Luxury Mortise Lock", category: "Hardware", price: "£135", material: "Metal", img: `${BACKEND_URL}/uploads/hardware/doorlock3.jpg` },
  { id: 91, name: "Satin Chrome Lock Set", category: "Hardware", price: "£110", material: "Metal", img: `${BACKEND_URL}/uploads/hardware/doorlock4.jpg` },
];

// ─── Category list ─────────────────────────────────────────────────────────────
const CATEGORIES = [
  "All products",
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
];

// ─── Component ─────────────────────────────────────────────────────────────────
const Shop = () => {
  const { addToCart } = useContext(CartContext);
  const GBP_TO_PKR = 360;
  const SKIPPED_PRODUCT_IDS = [2, 7, 10, 13];
  const PRODUCTS_PER_PAGE = 16;
  const FIRST_PAGE_EXTRA = 2; // show 2 more cards on first page

  const [isGrid, setIsGrid] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All products");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [priceRangeBounds, setPriceRangeBounds] = useState([0, 1000]);
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState(STATIC_PRODUCTS);
  const [loading, setLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const getNumericPrice = (product) => {
    if (!product) return 0;
    if (typeof product.price === "number") return product.price;
    const s = String(product.price || "");
    const parsed = parseFloat(s.replace(/[^0-9.]/g, ""));
    if (!Number.isFinite(parsed)) return 0;
    if (s.includes("£")) return Math.round(parsed * GBP_TO_PKR);
    // If the static data uses GBP symbol, convert to PKR
    if (s.includes("£")) return Math.round(parsed * GBP_TO_PKR);
    // otherwise treat as already PKR
    return Math.round(parsed);
  };

  const formatPricePKR = (product) => {
    const pkr = getNumericPrice(product);
    return `Rs. ${pkr.toLocaleString()}`;
  };

  const normalizeCategory = (rawCategory) => {
    if (!rawCategory) return "Wall Art";
    const category = String(rawCategory).toLowerCase();
    if (category.includes("islamic")) return "Islamic Wall Art";
    if (category.includes("wall art") || category.includes("wallart")) return "Wall Art";
    if (category.includes("clock")) return "Clocks";
    if (category.includes("coffee")) return "Coffee Table";
    if (category.includes("drawer")) return "Drawers";
    if (category.includes("study")) return "Study Table";
    if (category.includes("office")) return "Office Chair";
    if (category.includes("vanity")) return "Vanity Stool";
    if (category.includes("mirror") && category.includes("shelf")) return "Mirror with Shelves";
    if (category.includes("mirror")) return "Full Length Mirror";
    if (category.includes("light")) return "Lighting";
    if (category.includes("hardware")) return "Hardware";
    return rawCategory;
  };

  // ── Fetch products from backend API ─────────────────────────────────────────
  // If the API returns products, they replace the static data.
  // Also poll every 10s so newly added backend products appear automatically.
  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BACKEND_URL}/api/product`);
      // API returns { message, success, products }
      if (res.data && res.data.products && res.data.products.length > 0) {
        const mapped = res.data.products.map((p, i) => ({
          id: p._id || p.id || i,
          name: p.Pname || p.name,
          category: normalizeCategory(p.category),
          price: p.pprice,
          material: p.material || "Unknown",
          img: getImageUrl(p.image),
        }));
        setProducts((prevProducts) => {
          const existingImgs = new Set(prevProducts.map((item) => item.img));
          const additional = mapped.filter((item) => !existingImgs.has(item.img));
          return [...prevProducts, ...additional];
        });
      }
      // else keep STATIC_PRODUCTS
    } catch {
      // Backend not ready — static data already loaded, no action needed
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
    const id = setInterval(fetchProducts, 10000);
    return () => clearInterval(id);
  }, [fetchProducts]);

  useEffect(() => {
    const prices = products.map(getNumericPrice);
    const minPrice = Math.min(...prices, 0);
    const maxPrice = Math.max(...prices, 1000);
    setPriceRangeBounds([minPrice, maxPrice]);
    setPriceRange([minPrice, maxPrice]);
  }, [products]);

  const materialOptions = Array.from(
    new Set(products.map((product) => (product.material || "Unknown").toString())),
  );

  const filteredByCategoryAndSearch = products.filter((p) => {
    const matchSearch =
      searchQuery.trim() === "" ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());

    // Category selection: if selectedCategories set, use it; otherwise use activeCategory behavior
    let matchCat = true;
    if (selectedCategories.length > 0) {
      matchCat = selectedCategories.includes(p.category);
    } else {
      matchCat =
        activeCategory === "All products" ||
        p.category === activeCategory ||
        (activeCategory === "Wall Art" && (p.category === "Wall Art" || p.category === "Islamic Wall Art"));
    }

    return matchCat && matchSearch;
  });

  const filtered = filteredByCategoryAndSearch.filter((product, index, arr) => {
    if (SKIPPED_PRODUCT_IDS.includes(product.id)) return false;
    if (product.category === "Coffee Table") {
      const previousCoffeeCount = arr.slice(0, index).filter((item) => item.category === "Coffee Table").length;
      if (previousCoffeeCount >= 6) return false;
    }
    const productPrice = getNumericPrice(product);
    const matchesPrice = productPrice >= priceRange[0] && productPrice <= priceRange[1];
    const matchesMaterial =
      selectedMaterials.length === 0 || selectedMaterials.includes((product.material || "Unknown").toString());
    return matchesPrice && matchesMaterial;
  });

  // Pagination with extra items on first page
  const firstPageSize = PRODUCTS_PER_PAGE + FIRST_PAGE_EXTRA;
  const totalPages = (() => {
    if (filtered.length <= firstPageSize) return 1;
    return Math.max(1, Math.ceil((filtered.length - firstPageSize) / PRODUCTS_PER_PAGE) + 1);
  })();

  const paginatedProducts = (() => {
    if (page === 1) return filtered.slice(0, firstPageSize);
    const start = firstPageSize + (page - 2) * PRODUCTS_PER_PAGE;
    return filtered.slice(start, start + PRODUCTS_PER_PAGE);
  })();

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  const handleMaterialToggle = (material) => {
    setPage(1);
    setSelectedMaterials((current) =>
      current.includes(material) ? current.filter((item) => item !== material) : [...current, material],
    );
  };

  const openProduct = (product) => {
    setSelectedProduct(product);
  };

  const closeProduct = () => setSelectedProduct(null);

  const handleRangeChange = (index, value) => {
    setPage(1);
    const nextRange = [...priceRange];
    nextRange[index] = Number(value);
    if (index === 0 && nextRange[0] > nextRange[1]) nextRange[0] = nextRange[1];
    if (index === 1 && nextRange[1] < nextRange[0]) nextRange[1] = nextRange[0];
    setPriceRange(nextRange);
  };

  const getCategoryCount = (cat) => {
    if (cat === "All products") return products.length;
    if (cat === "Wall Art") return products.filter((p) => p.category === "Wall Art" || p.category === "Islamic Wall Art").length;
    return products.filter((p) => p.category === cat).length;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ─── Hero Banner ─────────────────────────────────────────────────────── */}
      <Herosections />

      {/* ─── Main Content ────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-8 lg:py-12 flex flex-col lg:flex-row gap-10">

        {/* Mobile Filter Toggle */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="lg:hidden flex items-center justify-center gap-3 w-full py-4 bg-[#3c5a25] text-white font-raleway text-xs tracking-[3px] uppercase font-bold transition-all duration-300"
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${showFilters ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* ─── LEFT PANE — Filters ─────────────────────────────────────────── */}
        <div className={`${showFilters ? "flex" : "hidden"} lg:flex w-full lg:w-[260px] shrink-0 flex-col gap-10`}>

          {/* Search */}
          <div className="relative group">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setPage(1); }}
              placeholder="Search products..."
              className="w-full font-raleway text-sm border-2 border-[#f0f0f0] px-5 py-3 outline-none focus:border-[#adb940] transition-all duration-300 placeholder:text-gray-300"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#adb940]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-col gap-4">
            <h4 className="font-cinzel text-xs font-bold text-[#1A1C19] tracking-widest uppercase border-b border-[#f0f0f0] pb-4">
              Categories
            </h4>
            <div className="space-y-2.5">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                const checked = selectedCategories.includes(cat);
                return (
                  <div key={cat} className="w-full flex items-center justify-between group cursor-pointer text-left transition-all duration-200">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => {
                          setPage(1);
                          setSelectedCategories((curr) => (curr.includes(cat) ? curr.filter((c) => c !== cat) : [...curr, cat]));
                        }}
                        className="h-4 w-4 text-[#3c5a25] border-gray-300 rounded"
                      />
                      <span
                        onClick={() => {
                          setActiveCategory(cat);
                          setShowFilters(false);
                          setPage(1);
                        }}
                        className={`font-raleway text-[12px] transition-all duration-300 text-left ${isActive ? "text-[#3c5a25] font-bold" : "text-[#60645d]"}`}
                      >
                        {cat}
                      </span>
                    </label>
                    <span className={`font-raleway text-[10px] transition-all duration-300 ${isActive ? "text-[#3c5a25] font-bold" : "text-[#8b8f86]"}`}>
                      {getCategoryCount(cat)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Price Range */}
          <div className="flex flex-col gap-3">
            <h4 className="font-cinzel text-xs font-bold text-[#1A1C19] tracking-widest uppercase border-b border-[#f0f0f0] pb-4">
              Price Range
            </h4>
            <div className="text-xs text-gray-500">
              {formatPricePKR({ price: `£${priceRange[0]}` })} - {formatPricePKR({ price: `£${priceRange[1]}` })}
            </div>
            <div className="space-y-3">
              <div>
                <label className="font-raleway text-[11px] text-gray-500">Min</label>
                <input
                  type="range"
                  min={priceRangeBounds[0]}
                  max={priceRangeBounds[1]}
                  value={priceRange[0]}
                  onChange={(e) => handleRangeChange(0, e.target.value)}
                  className="w-full mt-2 accent-[#3c5a25]"
                  style={{ accentColor: '#3c5a25' }}
                />
              </div>
              <div>
                <label className="font-raleway text-[11px] text-gray-500">Max</label>
                <input
                  type="range"
                  min={priceRangeBounds[0]}
                  max={priceRangeBounds[1]}
                  value={priceRange[1]}
                  onChange={(e) => handleRangeChange(1, e.target.value)}
                  className="w-full mt-2 accent-[#3c5a25]"
                  style={{ accentColor: '#3c5a25' }}
                />
              </div>
            </div>
          </div>

          {/* Material Filter */}
          <div className="flex flex-col gap-3">
            <h4 className="font-cinzel text-xs font-bold text-[#1A1C19] tracking-widest uppercase border-b border-[#f0f0f0] pb-4">
              Materials
            </h4>
            <div className="space-y-2">
              {materialOptions.map((material) => {
                const checked = selectedMaterials.includes(material);
                return (
                  <label key={material} className="flex items-center gap-3 text-[12px] text-gray-600 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => { handleMaterialToggle(material); }}
                      className="h-4 w-4 text-[#3c5a25] border-gray-300 rounded"
                    />
                    <span onClick={() => { handleMaterialToggle(material); }}>{material}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Clear Filters */}
          <button
            onClick={() => { setActiveCategory("All products"); setSearchQuery(""); setSelectedMaterials([]); setPriceRange(priceRangeBounds); setPage(1); }}
            className="font-raleway text-[11px] tracking-[3px] uppercase py-4 border-2 border-[#f0f0f0] text-gray-400 hover:border-[#adb940] hover:text-[#adb940] font-bold transition-all duration-300"
          >
            Clear Filters
          </button>
        </div>

        {/* ─── RIGHT PANE — Products ───────────────────────────────────────── */}
        <div className="flex-1 flex flex-col gap-8">

          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-[#f0f0f0] pb-6">
            <p className="font-raleway text-[13px] text-gray-400 order-2 sm:order-1">
              {loading ? (
                <span className="text-[#adb940]">Loading products…</span>
              ) : (
                <>
                  Showing <span className="text-[#1A1C19] font-semibold">{paginatedProducts.length}</span> of <span className="text-[#1A1C19] font-semibold">{filtered.length}</span> filtered products
                  {activeCategory !== "All products" && (
                    <>
                      {' '}in <span className="text-[#3c5a25] font-semibold">{activeCategory}</span>
                    </>
                  )}
                </>
              )}
            </p>

            <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end order-1 sm:order-2">
              {/* Sort */}
              <select className="font-raleway text-[13px] text-gray-400 border-2 border-[#f0f0f0] px-4 py-2.5 outline-none bg-white focus:border-[#adb940] transition-all duration-300 cursor-pointer">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
              </select>

              {/* Grid / List toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsGrid(true)}
                  className={`w-10 h-10 flex items-center justify-center border-2 transition-all duration-300 ${isGrid
                    ? "border-[#3c5a25] bg-[#3c5a25] text-white"
                    : "border-[#f0f0f0] text-gray-300 hover:border-[#3c5a25] hover:text-[#3c5a25]"
                    }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3A1.5 1.5 0 0 1 15 10.5v3A1.5 1.5 0 0 1 13.5 15h-3A1.5 1.5 0 0 1 9 13.5v-3z" />
                  </svg>
                </button>
                <button
                  onClick={() => setIsGrid(false)}
                  className={`w-10 h-10 flex items-center justify-center border-2 transition-all duration-300 ${!isGrid
                    ? "border-[#3c5a25] bg-[#3c5a25] text-white"
                    : "border-[#f0f0f0] text-gray-300 hover:border-[#3c5a25] hover:text-[#3c5a25]"
                    }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* ── No Results ──────────────────────────────────────────────────── */}
          {filtered.length === 0 && !loading && (
            <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
              <div className="w-16 h-16 rounded-full bg-[#f0f0f0] flex items-center justify-center text-2xl">🔍</div>
              <h3 className="font-cinzel text-sm text-[#1A1C19] font-semibold tracking-widest uppercase">
                No Products Found
              </h3>
              <p className="font-raleway text-xs text-gray-400 max-w-xs">
                No products match your current filters. Try a different category or clear your search.
              </p>
              <button
                onClick={() => { setActiveCategory("All products"); setSearchQuery(""); setSelectedMaterials([]); setPriceRange(priceRangeBounds); setPage(1); }}
                className="font-raleway text-[10px] tracking-[2px] uppercase px-6 py-3 bg-[#3c5a25] text-white font-bold hover:bg-[#adb940] transition-all duration-300"
              >
                View All Products
              </button>
            </div>
          )}

          {/* ── Product Grid ─────────────────────────────────────────────────── */}
          <div className={isGrid ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "flex flex-col gap-6"}>
            {paginatedProducts.map((product) =>
              isGrid ? (
                /* Grid Card */
                <div
                  key={product.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => openProduct(product)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openProduct(product); }}
                  className="group flex flex-col border border-[#f0f0f0] hover:border-[#adb940]/40 hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white cursor-pointer"
                >
                  <div className="overflow-hidden h-[240px] relative bg-[#f8f6f1]">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                      onError={(e) => { e.target.style.display = "none"; }}
                    />
                    <div className="absolute inset-0 bg-black/0 transition-all duration-500" />
                    <span className="absolute top-4 left-4 font-raleway text-[9px] bg-white/95 text-[#1A1C19] px-3 py-1 tracking-[3px] uppercase font-bold shadow-sm">
                      {product.category}
                    </span>
                  </div>
                    <div className="p-4 flex flex-col gap-2">
                    <h4 className="font-cinzel text-sm font-semibold text-[#1A1C19] group-hover:text-[#3c5a25] transition-colors leading-tight">
                      {product.name}
                    </h4>
                    <p className="font-raleway text-[11px] text-gray-400 tracking-wider">
                      {product.material}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="font-cinzel text-sm font-bold text-[#3c5a25]">
                        {formatPricePKR(product)}
                      </span>
                    <div className="flex items-center gap-3">
                        <button onClick={(e) => e.stopPropagation()} className="p-2 rounded border border-[#f0f0f0] bg-white text-gray-600 hover:bg-[#f3f6f1]">
                          <FiHeart />
                        </button>
                        <button onClick={(e) => { e.stopPropagation(); addToCart(product); }} className="p-2 rounded border border-[#f0f0f0] bg-white text-[#3c5a25] hover:bg-[#e6f1e6]">
                          <FiShoppingCart />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* List Card */
                <div
                  key={product.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => openProduct(product)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openProduct(product); }}
                  className="group flex flex-col sm:flex-row border border-[#f0f0f0] hover:border-[#adb940]/40 hover:shadow-lg transition-all duration-500 cursor-pointer overflow-hidden bg-white"
                >
                  <div className="overflow-hidden w-full sm:w-[220px] h-[200px] sm:h-auto shrink-0 relative bg-[#f8f6f1]">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                      onError={(e) => { e.target.style.display = "none"; }}
                    />
                    <span className="absolute top-4 left-4 font-raleway text-[9px] bg-white/95 text-[#1A1C19] px-3 py-1 tracking-[3px] uppercase font-bold">
                      {product.category}
                    </span>
                  </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full p-4 md:px-8 gap-4">
                    <div className="flex flex-col gap-1">
                      <h4 className="font-cinzel text-base font-semibold text-[#1A1C19] group-hover:text-[#3c5a25] transition-colors">
                        {product.name}
                      </h4>
                      <p className="font-raleway text-xs text-gray-400 tracking-wider">
                        {product.material}
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
                      <span className="font-cinzel text-base font-bold text-[#3c5a25]">
                        {formatPricePKR(product)}
                      </span>
                      <div className="flex items-center gap-3">
                        <button onClick={(e) => e.stopPropagation()} className="p-2 rounded border border-[#f0f0f0] bg-white text-gray-600 hover:bg-[#f3f6f1]">
                          <FiHeart />
                        </button>
                        <button onClick={(e) => { e.stopPropagation(); addToCart(product); }} className="p-2 rounded border border-[#f0f0f0] bg-white text-[#3c5a25] hover:bg-[#e6f1e6]">
                          <FiShoppingCart />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>

          {/* ── Pagination ───────────────────────────────────────────────────── */}
          {filtered.length > 0 && (
            <div className="flex flex-col items-center gap-4 mt-12">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className={`w-10 h-10 flex items-center justify-center border-2 rounded-full transition-all duration-300 ${page === 1 ? "border-[#f0f0f0] text-gray-300" : "border-[#adb940] text-[#3c5a25] hover:bg-[#adb940]/10"}`}
                >
                  ‹
                </button>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((num) => (
                  <button
                    key={num}
                    onClick={() => setPage(num)}
                    className={`w-10 h-10 flex items-center justify-center border-2 font-cinzel text-xs transition-all duration-300 rounded-full ${num === page
                      ? "border-[#3c5a25] bg-[#3c5a25] text-white"
                      : "border-[#f0f0f0] text-gray-300 hover:border-[#adb940] hover:text-[#adb940]"
                      }`}
                  >
                    {num}
                  </button>
                ))}
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className={`w-10 h-10 flex items-center justify-center border-2 rounded-full transition-all duration-300 ${page === totalPages ? "border-[#f0f0f0] text-gray-300" : "border-[#adb940] text-[#3c5a25] hover:bg-[#adb940]/10"}`}
                >
                  ›
                </button>
              </div>
              <p className="font-raleway text-[12px] text-gray-500">
                Page {page} of {totalPages}
              </p>
            </div>
          )}
        </div>
        {selectedProduct && (
          <ProductModal product={selectedProduct} onClose={closeProduct} />
        )}
      </div>
    </div>
  );
};

export default Shop;
