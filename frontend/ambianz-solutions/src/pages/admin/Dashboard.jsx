import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiGrid,
  FiFileText,
  FiShoppingBag,
  FiPlusCircle,
  FiMenu,
  FiX,
  FiBell,
  FiUser,
  FiExternalLink,
  FiDollarSign,
  FiTrendingUp,
  FiLayers,
  FiActivity,
  FiArrowUpRight,
  FiSearch,
} from "react-icons/fi";


import QuotesRequest from "./components/QuotesRequest";
import Products from "./components/Products";
import Order from "./components/Order";
import AddProduct from "./components/AddProduct";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedProductForEdit, setSelectedProductForEdit] = useState(null);
  const [refreshProductsKey, setRefreshProductsKey] = useState(0);
 
  const refreshProducts = () => {
    setRefreshProductsKey((prev) => prev + 1);
  };

  // Quick stats mock data
  const stats = [
    {
      title: "Total Revenue",
      value: "£45,820",
      change: "+14.2% from last month",
      isPositive: true,
      icon: <FiDollarSign className="text-xl text-[#3c5a25]" />,
      color: "border-l-4 border-[#3c5a25]",
    },
    {
      title: "Quote Requests",
      value: "28 Pending",
      change: "8 new in last 24h",
      isPositive: true,
      icon: <FiFileText className="text-xl text-[#adb940]" />,
      color: "border-l-4 border-[#adb940]",
    },
    {
      title: "Store Orders",
      value: "142 Completed",
      change: "+6.8% from last week",
      isPositive: true,
      icon: <FiShoppingBag className="text-xl text-amber-600" />,
      color: "border-l-4 border-amber-600",
    },
    {
      title: "Conversion Rate",
      value: "3.42%",
      change: "-0.5% from last month",
      isPositive: false,
      icon: <FiTrendingUp className="text-xl text-teal-600" />,
      color: "border-l-4 border-teal-600",
    },
  ];

  // Handler to edit product - switches to add-product tab and passes the product
  const handleEditProduct = (product) => {
    setSelectedProductForEdit(product);
    setActiveTab("add-product");
  };

  // Handler to clear product edit state
  const handleCancelEdit = () => {
    setSelectedProductForEdit(null);
    setActiveTab("products");
  };

  // Recent activities list
  const activities = [
    {
      id: 1,
      user: "Liam Johnson",
      action: "submitted a new Quote Request for",
      target: "Media Wall design",
      time: "24 minutes ago",
      type: "quote",
    },
    {
      id: 2,
      user: "Emma Watson",
      action: "purchased 1x",
      target: "Minimalist Oak Dining Table",
      time: "1 hour ago",
      type: "order",
    },
    {
      id: 3,
      user: "System",
      action: "flagged low stock for product",
      target: "Brass Handle Premium Set",
      time: "3 hours ago",
      type: "alert",
    },
    {
      id: 4,
      user: "David Miller",
      action: "submitted a new Quote Request for",
      target: "Luxury Wardrobe & Vanity",
      time: "5 hours ago",
      type: "quote",
    },
  ];

  // Render subpage content based on active state
  const renderContent = () => {
    switch (activeTab) {
      case "quotes":
        return <QuotesRequest />;
      case "products":
        return (
          <Products
            refreshTrigger={refreshProductsKey}
            onEditProduct={handleEditProduct}
            onNavigateToAdd={() => setActiveTab("add-product")}
          />
        );
      case "orders":
        return <Order />;
      case "add-product":
        return (
          <AddProduct
            editProduct={selectedProductForEdit}
            onCancel={handleCancelEdit}
            onSaved={() => {
              refreshProducts();
              handleCancelEdit();
            }}
          />
        );
      case "overview":
      default:
        return renderOverview();
    }
  };

  // Overview dashboard content
  const renderOverview = () => {
    return (
      <div className="space-y-8 animate-fadeIn duration-500">
        {/* Welcome Section */}
        <div className="bg-white p-6 md:p-8 border border-[#e0ddd5] relative overflow-hidden">
          <div className="absolute right-0 top-0 w-32 h-32 bg-[#adb940]/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10" />
          <div className="absolute left-1/3 bottom-0 w-48 h-48 bg-[#3c5a25]/5 rounded-full blur-3xl" />

          <h2 className="font-cinzel text-lg md:text-xl text-[#1A1C19] font-semibold tracking-[1px] mb-2 uppercase">
            System Overview
          </h2>
          <p className="font-raleway text-[10px] md:text-[11px] text-gray-500 leading-snug max-w-2xl">
            Welcome back, Administrator. Here is a quick update from Ambianz
            Solutions — 8 quote requests and 3 store orders are currently
            active.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`bg-white p-6 border border-[#e0ddd5] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${stat.color} flex flex-col justify-between`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-raleway text-[8px] tracking-[1px] text-gray-400 uppercase font-semibold mb-1">
                    {stat.title}
                  </p>
                  <h3 className="font-cinzel text-base md:text-lg text-[#1A1C19] font-semibold leading-tight">
                    {stat.value}
                  </h3>
                </div>
                <div className="p-2.5 bg-[#F8F6F1] rounded-sm shadow-inner">
                  {stat.icon}
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-[#F8F6F1] flex items-center justify-between">
                <span
                  className={`font-raleway text-[9px] tracking-[1px] font-semibold ${stat.isPositive ? "text-[#3c5a25]" : "text-red-600"}`}
                >
                  {stat.change}
                </span>
                <span className="text-gray-300 hover:text-[#3c5a25] cursor-pointer">
                  <FiArrowUpRight size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Charts & Analytics Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Spline Trend Line Chart */}
          <div className="bg-white p-6 md:p-8 border border-[#e0ddd5] lg:col-span-2 flex flex-col justify-between">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="font-cinzel text-xs md:text-sm text-[#1A1C19] font-bold tracking-[2px] uppercase">
                  Sales & Quotes Inquiries Trend
                </h3>
                <p className="font-raleway text-[10px] text-gray-400 tracking-wider">
                  Comparison between store orders and design inquiries (Last 6
                  Months)
                </p>
              </div>
              <div className="flex gap-4">
                <span className="flex items-center gap-1.5 font-raleway text-[10px] text-gray-500 font-bold uppercase">
                  <span className="w-2.5 h-2.5 bg-[#3c5a25] rounded-full inline-block" />
                  Sales
                </span>
                <span className="flex items-center gap-1.5 font-raleway text-[10px] text-gray-500 font-bold uppercase">
                  <span className="w-2.5 h-2.5 bg-[#adb940] rounded-full inline-block" />
                  Quotes
                </span>
              </div>
            </div>

            {/* Custom Responsive SVG Chart */}
            <div className="relative w-full h-[220px]">
              <svg
                className="w-full h-full"
                viewBox="0 0 600 220"
                preserveAspectRatio="none"
              >
                {/* Grids */}
                <line
                  x1="40"
                  y1="20"
                  x2="580"
                  y2="20"
                  stroke="#e0ddd5"
                  strokeWidth="0.5"
                  strokeDasharray="4,4"
                />
                <line
                  x1="40"
                  y1="70"
                  x2="580"
                  y2="70"
                  stroke="#e0ddd5"
                  strokeWidth="0.5"
                  strokeDasharray="4,4"
                />
                <line
                  x1="40"
                  y1="120"
                  x2="580"
                  y2="120"
                  stroke="#e0ddd5"
                  strokeWidth="0.5"
                  strokeDasharray="4,4"
                />
                <line
                  x1="40"
                  y1="170"
                  x2="580"
                  y2="170"
                  stroke="#e0ddd5"
                  strokeWidth="0.5"
                  strokeDasharray="4,4"
                />
                <line
                  x1="40"
                  y1="190"
                  x2="580"
                  y2="190"
                  stroke="#1A1C19"
                  strokeWidth="1"
                />

                {/* X Axis Labels */}
                <text
                  x="40"
                  y="210"
                  fill="#9ca3af"
                  fontSize="9"
                  fontFamily="Raleway"
                  textAnchor="middle"
                >
                  DEC
                </text>
                <text
                  x="148"
                  y="210"
                  fill="#9ca3af"
                  fontSize="9"
                  fontFamily="Raleway"
                  textAnchor="middle"
                >
                  JAN
                </text>
                <text
                  x="256"
                  y="210"
                  fill="#9ca3af"
                  fontSize="9"
                  fontFamily="Raleway"
                  textAnchor="middle"
                >
                  FEB
                </text>
                <text
                  x="364"
                  y="210"
                  fill="#9ca3af"
                  fontSize="9"
                  fontFamily="Raleway"
                  textAnchor="middle"
                >
                  MAR
                </text>
                <text
                  x="472"
                  y="210"
                  fill="#9ca3af"
                  fontSize="9"
                  fontFamily="Raleway"
                  textAnchor="middle"
                >
                  APR
                </text>
                <text
                  x="580"
                  y="210"
                  fill="#9ca3af"
                  fontSize="9"
                  fontFamily="Raleway"
                  textAnchor="middle"
                >
                  MAY
                </text>

                {/* Y Axis Labels */}
                <text
                  x="30"
                  y="23"
                  fill="#9ca3af"
                  fontSize="9"
                  fontFamily="Raleway"
                  textAnchor="end"
                >
                  £15k
                </text>
                <text
                  x="30"
                  y="73"
                  fill="#9ca3af"
                  fontSize="9"
                  fontFamily="Raleway"
                  textAnchor="end"
                >
                  £10k
                </text>
                <text
                  x="30"
                  y="123"
                  fill="#9ca3af"
                  fontSize="9"
                  fontFamily="Raleway"
                  textAnchor="end"
                >
                  £5k
                </text>
                <text
                  x="30"
                  y="173"
                  fill="#9ca3af"
                  fontSize="9"
                  fontFamily="Raleway"
                  textAnchor="end"
                >
                  £1k
                </text>

                {/* Gradients */}
                <defs>
                  <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3c5a25" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#3c5a25" stopOpacity="0.0" />
                  </linearGradient>
                  <linearGradient id="quotesGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#adb940" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#adb940" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Fill Area Sales */}
                <path
                  d="M 40 190 L 40 150 Q 94 130 148 110 Q 202 120 256 70 Q 310 90 364 50 Q 418 70 472 40 Q 526 30 580 25 L 580 190 Z"
                  fill="url(#salesGrad)"
                />
                {/* Line Path Sales */}
                <path
                  d="M 40 150 Q 94 130 148 110 Q 202 120 256 70 Q 310 90 364 50 Q 418 70 472 40 Q 526 30 580 25"
                  fill="none"
                  stroke="#3c5a25"
                  strokeWidth="2.5"
                />

                {/* Fill Area Quotes */}
                <path
                  d="M 40 190 L 40 180 Q 94 165 148 140 Q 202 155 256 120 Q 310 110 364 90 Q 418 75 472 65 Q 526 50 580 40 L 580 190 Z"
                  fill="url(#quotesGrad)"
                />
                {/* Line Path Quotes */}
                <path
                  d="M 40 180 Q 94 165 148 140 Q 202 155 256 120 Q 310 110 364 90 Q 418 75 472 65 Q 526 50 580 40"
                  fill="none"
                  stroke="#adb940"
                  strokeWidth="2"
                  strokeDasharray="3,3"
                />

                {/* Active Tooltip Line Mock */}
                <line
                  x1="472"
                  y1="20"
                  x2="472"
                  y2="190"
                  stroke="#adb940"
                  strokeWidth="0.8"
                />
                <circle
                  cx="472"
                  cy="40"
                  r="4.5"
                  fill="#3c5a25"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <circle
                  cx="472"
                  cy="65"
                  r="4"
                  fill="#adb940"
                  stroke="white"
                  strokeWidth="1.5"
                />
              </svg>

              {/* Mock Floating Tooltip */}
              <div className="absolute top-4 right-1/4 bg-white border border-[#e0ddd5] px-3 py-2 shadow-xl z-10 pointer-events-none rounded-sm">
                <div className="font-raleway text-[9px] tracking-wider text-gray-400 font-bold uppercase">
                  APRIL 2026
                </div>
                <div className="font-cinzel text-xs font-bold text-[#3c5a25]">
                  Sales: £12,850
                </div>
                <div className="font-cinzel text-xs font-bold text-[#adb940]">
                  Quotes: 22 Req
                </div>
              </div>
            </div>
          </div>

          {/* Services Popularity Breakdowns (Donut Chart) */}
          <div className="bg-white p-6 md:p-8 border border-[#e0ddd5] flex flex-col justify-between">
            <div>
              <h3 className="font-cinzel text-xs md:text-sm text-[#1A1C19] font-bold tracking-[2px] uppercase mb-1">
                Design Popularity
              </h3>
              <p className="font-raleway text-[10px] text-gray-400 tracking-wider">
                Services distribution by quote requests volume
              </p>
            </div>

            {/* Donut SVG */}
            <div className="flex items-center justify-center py-4 relative">
              <svg width="150" height="150" className="transform -rotate-90">
                {/* Base Gray ring */}
                <circle
                  cx="75"
                  cy="75"
                  r="55"
                  fill="transparent"
                  stroke="#f3f4f6"
                  strokeWidth="16"
                />
                {/* Kitchens: 40% (Olive: #3c5a25) - Circumference = 2 * pi * 55 = 345.57. stroke-dasharray="dash gap" */}
                <circle
                  cx="75"
                  cy="75"
                  r="55"
                  fill="transparent"
                  stroke="#3c5a25"
                  strokeWidth="16"
                  strokeDasharray="138.2 207.3"
                  strokeDashoffset="0"
                />
                {/* Media Walls: 30% (Gold: #adb940) */}
                <circle
                  cx="75"
                  cy="75"
                  r="55"
                  fill="transparent"
                  stroke="#adb940"
                  strokeWidth="16"
                  strokeDasharray="103.6 241.9"
                  strokeDashoffset="-138.2"
                />
                {/* Wardrobes: 20% (Dark Charcoal: #1A1C19) */}
                <circle
                  cx="75"
                  cy="75"
                  r="55"
                  fill="transparent"
                  stroke="#1A1C19"
                  strokeWidth="16"
                  strokeDasharray="69.1 276.4"
                  strokeDashoffset="-241.8"
                />
                {/* Cafe Fitouts & Doors: 10% (Gray border) */}
                <circle
                  cx="75"
                  cy="75"
                  r="55"
                  fill="transparent"
                  stroke="#bdb9ab"
                  strokeWidth="16"
                  strokeDasharray="34.5 311"
                  strokeDashoffset="-310.9"
                />
              </svg>
              {/* Inner details text */}
              <div className="absolute flex flex-col items-center justify-center">
                <span className="font-cinzel text-xl text-[#1A1C19] font-bold">
                  82
                </span>
                <span className="font-raleway text-[8px] text-gray-400 font-bold uppercase tracking-widest">
                  Total
                </span>
              </div>
            </div>

            {/* Donut Legend */}
            <div className="space-y-2 mt-4 pt-4 border-t border-[#F8F6F1]">
              <div className="flex justify-between items-center text-[10px] font-raleway">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#3c5a25] rounded-sm" />
                  <span className="text-gray-600 font-medium">
                    Kitchen Designs
                  </span>
                </div>
                <span className="font-bold text-[#1A1C19]">40%</span>
              </div>
              <div className="flex justify-between items-center text-[10px] font-raleway">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#adb940] rounded-sm" />
                  <span className="text-gray-600 font-medium">Media Walls</span>
                </div>
                <span className="font-bold text-[#1A1C19]">30%</span>
              </div>
              <div className="flex justify-between items-center text-[10px] font-raleway">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#1A1C19] rounded-sm" />
                  <span className="text-gray-600 font-medium">
                    Luxury Wardrobes
                  </span>
                </div>
                <span className="font-bold text-[#1A1C19]">20%</span>
              </div>
              <div className="flex justify-between items-center text-[10px] font-raleway">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#bdb9ab] rounded-sm" />
                  <span className="text-gray-600 font-medium">
                    Doors & Fitting
                  </span>
                </div>
                <span className="font-bold text-[#1A1C19]">10%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Row: Recent Activity & Action Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Operations Activity */}
          <div className="bg-white p-6 md:p-8 border border-[#e0ddd5] lg:col-span-2 flex flex-col justify-between">
            <div className="mb-6 flex justify-between items-center">
              <div>
                <h3 className="font-cinzel text-xs md:text-sm text-[#1A1C19] font-bold tracking-[2px] uppercase">
                  Recent Activities
                </h3>
                <p className="font-raleway text-[10px] text-gray-400 tracking-wider">
                  Latest system logs and staff operations
                </p>
              </div>
              <FiActivity className="text-gray-400 text-base" />
            </div>

            <div className="space-y-5">
              {activities.map((act) => (
                <div
                  key={act.id}
                  className="flex gap-4 items-start p-3 hover:bg-[#F8F6F1] transition-colors duration-200 border-b border-gray-100 last:border-0 pb-4"
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      act.type === "quote"
                        ? "bg-[#3c5a25]/10 text-[#3c5a25]"
                        : act.type === "order"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-red-50 text-red-600"
                    }`}
                  >
                    {act.type === "quote" ? (
                      <FiFileText size={14} />
                    ) : act.type === "order" ? (
                      <FiShoppingBag size={14} />
                    ) : (
                      <FiBell size={14} />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-raleway text-xs text-gray-600 leading-normal">
                      <span className="font-bold text-[#1A1C19]">
                        {act.user}
                      </span>{" "}
                      {act.action}{" "}
                      <span className="font-semibold text-[#3c5a25]">
                        {act.target}
                      </span>
                    </p>
                    <span className="text-[10px] text-gray-400 font-raleway mt-1 block">
                      {act.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions Panel */}
          <div className="bg-[#1A1C19] text-[#F8F6F1] p-6 md:p-8 border border-[#e0ddd5] flex flex-col justify-between">
            <div>
              <h3 className="font-cinzel text-[11px] md:text-xs text-[#F8F6F1] font-semibold tracking-[1px] uppercase mb-2">
                Quick Task Center
              </h3>
              <p className="font-raleway text-[9px] text-[#F8F6F1]/65 tracking-[1px] mb-5">
                Shortcuts for quote and product management
              </p>

              <div className="space-y-3">
                <button
                  onClick={() => setActiveTab("add-product")}
                  className="w-full flex items-center gap-3 bg-[#3c5a25] hover:bg-[#2a3f1a] text-[#F8F6F1] p-3.5 text-[9px] font-raleway font-semibold uppercase tracking-[1px] transition-all duration-300 hover:scale-[1.01] shadow-lg shadow-[#3c5a25]/20"
                >
                  <FiPlusCircle className="text-sm shrink-0" />
                  Add Shop Product
                </button>

                <button
                  onClick={() => setActiveTab("quotes")}
                  className="w-full flex items-center gap-3 bg-white/5 hover:bg-white/10 text-[#F8F6F1] border border-white/10 p-3.5 text-[9px] font-raleway font-semibold uppercase tracking-[1px] transition-all duration-300 hover:scale-[1.01]"
                >
                  <FiFileText className="text-sm shrink-0" />
                  Review Quotes ({stats[1].value.split(" ")[0]})
                </button>

                <button
                  onClick={() => setActiveTab("orders")}
                  className="w-full flex items-center gap-3 bg-white/5 hover:bg-white/10 text-[#F8F6F1] border border-white/10 p-3.5 text-[9px] font-raleway font-semibold uppercase tracking-[1px] transition-all duration-300 hover:scale-[1.01]"
                >
                  <FiShoppingBag className="text-sm shrink-0" />
                  Manage Orders ({stats[2].value.split(" ")[0]})
                </button>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 text-[10px] font-raleway text-[#F8F6F1]/40">
              <FiLayers />
              <span>Ambianz Solutions Admin Panel v1.0.0</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Nav Items array
  const navItems = [
    { id: "overview", label: "Overview", icon: <FiGrid size={16} /> },
    { id: "quotes", label: "Quotes Inquiries", icon: <FiFileText size={16} /> },
    {
      id: "products",
      label: "Shop Products",
      icon: <FiShoppingBag size={16} />,
    },
    { id: "orders", label: "Customer Orders", icon: <FiLayers size={16} /> },
    {
      id: "add-product",
      label: "Add Product",
      icon: <FiPlusCircle size={16} />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F6F1] flex flex-col lg:flex-row text-[#1A1C19]">
      {/* Mobile Header Bar */}
      <div className="lg:hidden h-16 bg-[#1A1C19] text-[#F8F6F1] flex items-center justify-between px-6 border-b border-white/5 sticky top-0 z-40">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#adb940] flex items-center justify-center text-[#1A1C19] font-cinzel font-bold text-base">
            A
          </div>
          <div className="flex flex-col">
            <span className="font-cinzel text-[11px] font-semibold tracking-[1px] text-white">
              Ambianz
            </span>
            <span className="text-[#adb940] text-[8px] tracking-[1px] font-raleway font-semibold uppercase">
              Admin
            </span>
          </div>
        </Link>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-[#F8F6F1] focus:outline-none"
        >
          {sidebarOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Sidebar Drawer Backdrop for Mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Component */}
      <aside
        className={`w-[260px] bg-[#1A1C19] text-[#F8F6F1] flex flex-col justify-between border-r border-white/5 fixed lg:sticky top-16 lg:top-0 h-[calc(100vh-64px)] lg:h-screen z-35 transform lg:transform-none transition-transform duration-300 shrink-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col">
          {/* Logo - Hidden on mobile side-drawer since it has its own sticky header */}
          <div className="hidden lg:flex items-center gap-4 p-6 border-b border-white/5">
            <div className="w-12 h-12 rounded-full bg-[#adb940] flex items-center justify-center text-[#1A1C19] font-cinzel font-bold text-lg shadow-inner shadow-black/10">
              A
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel text-sm font-semibold tracking-[1px] text-white leading-tight">
                Ambianz
              </span>
              <span className="text-[#F8F6F1] text-[10px] tracking-[1px] font-raleway font-semibold mt-1 uppercase">
                Solutions Admin
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="p-6 space-y-2.5">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setSidebarOpen(false);
                    if (item.id !== "add-product")
                      setSelectedProductForEdit(null);
                  }}
                  className={`w-full flex items-center gap-4 px-4 py-3.5 text-[9px] tracking-[1px] font-raleway uppercase font-semibold transition-all duration-300 relative ${
                    isActive
                      ? "text-[#1A1C19] bg-[#F8F6F1]"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {/* Left Highlight indicator */}
                  {isActive && (
                    <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#3c5a25]" />
                  )}
                  <span className="shrink-0">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer User Info */}
        <div className="p-6 border-t border-white/5 bg-black/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-[#3c5a25] flex items-center justify-center text-[#F8F6F1] font-cinzel font-bold text-sm shadow-md">
              A
            </div>
            <div className="flex flex-col">
              <span className="font-raleway text-xs font-bold text-white leading-tight">
                Super Administrator
              </span>
              <span className="text-[9px] text-[#adb940] tracking-wider font-semibold font-raleway mt-0.5 uppercase">
                Owner Access
              </span>
            </div>
          </div>
          <Link
            to="/"
            className="w-full flex items-center justify-center gap-2 border border-white/10 hover:border-white/20 bg-white/5 py-2.5 text-[9px] font-raleway tracking-[2px] uppercase font-bold text-[#F8F6F1] transition-all hover:bg-[#3c5a25] hover:text-[#F8F6F1]"
          >
            <FiExternalLink size={12} />
            <span>Storefront</span>
          </Link>
        </div>
      </aside>

      {/* Main Page Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <header className="hidden lg:flex h-20 bg-white border-b border-[#e0ddd5] items-center justify-between px-8 sticky top-0 z-20">
          {/* Page Title */}
          <div>
            <h1 className="font-cinzel text-xs md:text-sm font-semibold tracking-[2px] text-[#1A1C19] uppercase">
              {navItems.find((n) => n.id === activeTab)?.label} Panel
            </h1>
            <p className="font-raleway text-[9px] md:text-[10px] text-gray-500 tracking-[1px] mt-0.5">
              Control center for storefront products, quote inquiries, and
              client orders
            </p>
          </div>

          {/* Top Actions */}
          <div className="flex items-center gap-6">
            {/* Header Search Mock */}
            <div className="relative w-48 xl:w-64">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                placeholder="GLOBAL SEARCH..."
                className="w-full pl-9 pr-4 py-2 border border-[#e0ddd5] focus:border-[#3c5a25] focus:outline-none font-raleway text-[9px] tracking-widest text-[#1A1C19] bg-transparent"
              />
            </div>

            {/* Notification bell */}
            <div className="relative cursor-pointer p-2 bg-[#F8F6F1] hover:bg-gray-100 transition-colors">
              <FiBell className="text-gray-700" size={16} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#3c5a25] rounded-full" />
            </div>

            <div className="h-6 w-[1px] bg-[#e0ddd5]" />

            {/* Admin Profile Dropdown layout */}
            <div className="flex items-center gap-3">
              <span className="font-raleway text-[10px] tracking-[2px] font-bold uppercase text-gray-600">
                Hi, Director
              </span>
              <div className="w-8 h-8 rounded-sm bg-[#adb940] flex items-center justify-center text-[#1A1C19] font-bold font-cinzel text-xs shadow-inner">
                AD
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Dynamic Panel Content */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto max-w-7xl w-full mx-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
