import React, { useEffect, useState } from "react";
import {
  FiSearch,
  FiEye,
  FiShoppingBag,
  FiCalendar,
  FiUser,
  FiDollarSign,
  FiTruck,
  FiCheckCircle,
  FiChevronDown,
  FiMapPin,
  FiPrinter,
} from "react-icons/fi";

export default function Order() {
  const [searchTerm, setSearchTerm] = useState("");
  const [paymentFilter, setPaymentFilter] = useState("All");
  const [fulfillmentFilter, setFulfillmentFilter] = useState("All");
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Mock orders data
  const [orders, setOrders] = useState([
    {
      id: "AMB-9041",
      date: "May 20, 2026",
      customerName: "Jane Miller",
      email: "jane.miller@outlook.com",
      phone: "+44 7911 223344",
      shippingAddress: "12 Baker Street, Marylebone, London, NW1 6XE",
      items: [
        { name: "Luxury Brass Pendant Light", price: 245, qty: 2, image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=100&auto=format&fit=crop&q=60" },
        { name: "Fluted Brass Cabinet Handle", price: 15, qty: 6, image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=100&auto=format&fit=crop&q=60" }
      ],
      subtotal: 580,
      shipping: 15,
      total: 595,
      paymentStatus: "Paid",
      fulfillmentStatus: "Processing",
    },

    {
      id: "AMB-9042",
      date: "May 19, 2026",
      customerName: "Arthur Pendragon",
      email: "arthur.king@camelot.co.uk",
      phone: "+44 7911 556677",
      shippingAddress: "Tintagel Castle Residence, Camelot Way, Cornwall, PL34 0HE",
      items: [
        { name: "Sleek Marble Coffee Table", price: 850, qty: 1, image: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?w=100&auto=format&fit=crop&q=60" }
      ],
      subtotal: 850,
      shipping: 50,
      total: 900,
      paymentStatus: "Paid",
      fulfillmentStatus: "Shipped",
    },
    {
      id: "AMB-9043",
      date: "May 18, 2026",
      customerName: "Clara Oswald",
      email: "clara.oswald@tardis.net",
      phone: "+44 7911 889900",
      shippingAddress: "55 Coal Hill Lane, Shoreditch, London, EC1V 9LP",
      items: [
        { name: "Geometric Solid Oak Clock", price: 120, qty: 1, image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=100&auto=format&fit=crop&q=60" },
        { name: "Arch Antique Vanity Mirror", price: 185, qty: 1, image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=100&auto=format&fit=crop&q=60" }
      ],
      subtotal: 305,
      shipping: 10,
      total: 315,
      paymentStatus: "Pending",
      fulfillmentStatus: "Processing",
    },
    {
      id: "AMB-9044",
      date: "May 14, 2026",
      customerName: "Bruce Wayne",
      email: "bruce@wayneenterprise.com",
      phone: "+44 7911 445566",
      shippingAddress: "Wayne Manor, Crest Hill, Bristol, BS8 1AL",
      items: [
        { name: "Abstract Canvas Wall Art Set", price: 310, qty: 3, image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=100&auto=format&fit=crop&q=60" }
      ],
      subtotal: 930,
      shipping: 35,
      total: 965,
      paymentStatus: "Paid",
      fulfillmentStatus: "Delivered",
    },
  ]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("customerOrders") || "[]");
    if (!savedOrders.length) return;

    const normalizedOrders = savedOrders.map((order) => ({
      customerName: "Storefront Customer",
      email: "checkout via WhatsApp",
      phone: "Not provided",
      shippingAddress: "To be confirmed",
      ...order,
    }));

    setOrders((currentOrders) => {
      const existingIds = new Set(currentOrders.map((order) => order.id));
      return [
        ...normalizedOrders.filter((order) => !existingIds.has(order.id)),
        ...currentOrders,
      ];
    });
  }, []);

  // Handle status update
  const handlePaymentChange = (id, newStatus) => {
    setOrders(
      orders.map((o) => (o.id === id ? { ...o, paymentStatus: newStatus } : o))
    );
    if (selectedOrder && selectedOrder.id === id) {
      setSelectedOrder({ ...selectedOrder, paymentStatus: newStatus });
    }
  };

  const handleFulfillmentChange = (id, newStatus) => {
    setOrders(
      orders.map((o) => (o.id === id ? { ...o, fulfillmentStatus: newStatus } : o))
    );
    if (selectedOrder && selectedOrder.id === id) {
      setSelectedOrder({ ...selectedOrder, fulfillmentStatus: newStatus });
    }
  };

  // Status style helpers
  const getPaymentColor = (status) => {
    switch (status) {
      case "Paid":
        return "bg-green-50 text-green-700 border-green-200";
      case "Pending":
        return "bg-amber-50 text-amber-700 border-amber-200";
      default:
        return "bg-red-50 text-red-700 border-red-200";
    }
  };

  const getFulfillmentColor = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-50 text-green-700 border-green-200";
      case "Shipped":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "Processing":
        return "bg-purple-50 text-purple-700 border-purple-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  const formatOrderMoney = (order, amount) =>
    order.currency === "PKR"
      ? `Rs. ${Math.round(amount).toLocaleString()}`
      : `£${Number(amount).toFixed(2)}`;

  // Filter lists
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesPayment = paymentFilter === "All" || order.paymentStatus === paymentFilter;
    const matchesFulfillment = fulfillmentFilter === "All" || order.fulfillmentStatus === fulfillmentFilter;

    return matchesSearch && matchesPayment && matchesFulfillment;
  });

  return (
    <div className="space-y-6 animate-fadeIn duration-300">

      {/* Control bar */}
      <div className="bg-white p-6 border border-[#e0ddd5] flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">

        {/* Search */}
        <div className="relative flex-1 max-w-sm">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
          <input
            type="text"
            placeholder="SEARCH ORDERS..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-[#e0ddd5] focus:border-[#3c5a25] focus:outline-none font-raleway text-[10px] tracking-widest text-[#1A1C19]"
          />
        </div>

        {/* Status Dropdowns */}
        <div className="flex flex-wrap gap-3 items-center">

          {/* Payment Filter */}
          <div className="relative flex items-center bg-[#F8F6F1] border border-[#e0ddd5]">
            <span className="text-gray-400 text-[10px] font-raleway font-bold pl-3 uppercase tracking-wider">Payment:</span>
            <select
              value={paymentFilter}
              onChange={(e) => setPaymentFilter(e.target.value)}
              className="pl-2 pr-8 py-2.5 outline-none font-raleway text-[9px] tracking-widest text-[#1A1C19] bg-transparent cursor-pointer font-bold uppercase appearance-none"
            >
              <option value="All">All</option>
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
            </select>
            <FiChevronDown className="absolute right-2.5 pointer-events-none text-gray-400 text-[10px]" />
          </div>

          {/* Fulfillment Filter */}
          <div className="relative flex items-center bg-[#F8F6F1] border border-[#e0ddd5]">
            <span className="text-gray-400 text-[10px] font-raleway font-bold pl-3 uppercase tracking-wider">Fulfill:</span>
            <select
              value={fulfillmentFilter}
              onChange={(e) => setFulfillmentFilter(e.target.value)}
              className="pl-2 pr-8 py-2.5 outline-none font-raleway text-[9px] tracking-widest text-[#1A1C19] bg-transparent cursor-pointer font-bold uppercase appearance-none"
            >
              <option value="All">All</option>
              <option value="Processing">Processing</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
            </select>
            <FiChevronDown className="absolute right-2.5 pointer-events-none text-gray-400 text-[10px]" />
          </div>

        </div>

      </div>

      {/* Orders Table */}
      <div className="bg-white border border-[#e0ddd5] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F8F6F1] border-b border-[#e0ddd5]">
                <th className="p-4 font-cinzel text-[10px] tracking-[2px] text-[#1A1C19] font-bold uppercase w-28">Order ID</th>
                <th className="p-4 font-cinzel text-[10px] tracking-[2px] text-[#1A1C19] font-bold uppercase">Date</th>
                <th className="p-4 font-cinzel text-[10px] tracking-[2px] text-[#1A1C19] font-bold uppercase">Customer</th>
                <th className="p-4 font-cinzel text-[10px] tracking-[2px] text-[#1A1C19] font-bold uppercase">Items</th>
                <th className="p-4 font-cinzel text-[10px] tracking-[2px] text-[#1A1C19] font-bold uppercase">Total</th>
                <th className="p-4 font-cinzel text-[10px] tracking-[2px] text-[#1A1C19] font-bold uppercase w-32">Payment</th>
                <th className="p-4 font-cinzel text-[10px] tracking-[2px] text-[#1A1C19] font-bold uppercase w-36">Fulfillment</th>
                <th className="p-4 font-cinzel text-[10px] tracking-[2px] text-[#1A1C19] font-bold uppercase w-20 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e0ddd5]">
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-[#F8F6F1]/30 transition-colors">

                    {/* ID */}
                    <td className="p-4 font-raleway text-xs text-gray-600 font-bold">{order.id}</td>

                    {/* Date */}
                    <td className="p-4 font-raleway text-xs text-gray-500">{order.date}</td>

                    {/* Customer */}
                    <td className="p-4">
                      <div className="flex flex-col">
                        <span className="font-raleway text-xs font-bold text-[#1A1C19]">{order.customerName}</span>
                        <span className="font-raleway text-[9px] text-gray-400 mt-0.5">{order.email}</span>
                      </div>
                    </td>

                    {/* Items Summary */}
                    <td className="p-4 font-raleway text-xs text-gray-600">
                      <span className="line-clamp-1 max-w-[200px]">
                        {order.items.map((i) => `${i.qty}x ${i.name}`).join(", ")}
                      </span>
                    </td>

                    {/* Total */}
                    <td className="p-4 font-cinzel text-xs font-bold text-[#3c5a25]">{formatOrderMoney(order, order.total)}</td>

                    {/* Payment Dropdown */}
                    <td className="p-4">
                      <div className="relative inline-block">
                        <select
                          value={order.paymentStatus}
                          onChange={(e) => handlePaymentChange(order.id, e.target.value)}
                          className={`appearance-none pl-2.5 pr-7 py-1 text-[9px] tracking-wider font-raleway font-bold uppercase border cursor-pointer outline-none ${getPaymentColor(
                            order.paymentStatus
                          )}`}
                        >
                          <option value="Paid">Paid</option>
                          <option value="Pending">Pending</option>
                        </select>
                        <FiChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 text-[9px] pointer-events-none" />
                      </div>
                    </td>

                    {/* Fulfillment Dropdown */}
                    <td className="p-4">
                      <div className="relative inline-block">
                        <select
                          value={order.fulfillmentStatus}
                          onChange={(e) => handleFulfillmentChange(order.id, e.target.value)}
                          className={`appearance-none pl-2.5 pr-7 py-1 text-[9px] tracking-wider font-raleway font-bold uppercase border cursor-pointer outline-none ${getFulfillmentColor(
                            order.fulfillmentStatus
                          )}`}
                        >
                          <option value="Processing">Processing</option>
                          <option value="Shipped">Shipped</option>
                          <option value="Delivered">Delivered</option>
                        </select>
                        <FiChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 text-[9px] pointer-events-none" />
                      </div>
                    </td>

                    {/* Actions */}
                    <td className="p-4 text-right">
                      <button
                        onClick={() => setSelectedOrder(order)}
                        className="p-2 border border-[#e0ddd5] text-gray-600 hover:border-[#3c5a25] hover:text-white hover:bg-[#3c5a25] transition-all"
                        title="View Details"
                      >
                        <FiEye size={13} />
                      </button>
                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="p-10 text-center font-raleway text-xs text-gray-400 tracking-wider">
                    NO CUSTOMER ORDERS FOUND
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Detail Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedOrder(null)} />

          <div className="relative bg-white w-full max-w-3xl border border-[#e0ddd5] shadow-2xl p-6 md:p-8 overflow-y-auto max-h-[90vh] animate-slideIn">

            {/* Modal Header */}
            <div className="flex justify-between items-start border-b border-gray-100 pb-5 mb-5">
              <div>
                <span className="font-raleway text-[9px] tracking-[2px] text-gray-400 font-bold uppercase">ORDER SUMMARY INVOICE</span>
                <h3 className="font-cinzel text-lg font-bold text-[#1A1C19] mt-0.5 uppercase">Invoice ID: {selectedOrder.id}</h3>
              </div>
              <button onClick={() => setSelectedOrder(null)} className="text-[#1A1C19] hover:bg-gray-100 p-1.5 rounded-sm">✕</button>
            </div>

            {/* Quick Summary Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#F8F6F1] border border-[#e0ddd5] p-5 mb-6 text-xs font-raleway text-gray-600">
              <div className="space-y-1">
                <span className="block font-bold text-[9px] tracking-wider text-gray-400 uppercase">ORDER DATE</span>
                <p className="font-semibold text-[#1A1C19] flex items-center gap-1.5">
                  <FiCalendar size={13} /> {selectedOrder.date}
                </p>
              </div>
              <div className="space-y-1">
                <span className="block font-bold text-[9px] tracking-wider text-gray-400 uppercase">PAYMENT STATUS</span>
                <span className={`inline-block px-2.5 py-0.5 border text-[9px] font-bold uppercase tracking-wider ${getPaymentColor(selectedOrder.paymentStatus)}`}>
                  {selectedOrder.paymentStatus}
                </span>
              </div>
              <div className="space-y-1">
                <span className="block font-bold text-[9px] tracking-wider text-gray-400 uppercase">DISPATCH STATUS</span>
                <span className={`inline-block px-2.5 py-0.5 border text-[9px] font-bold uppercase tracking-wider ${getFulfillmentColor(selectedOrder.fulfillmentStatus)}`}>
                  {selectedOrder.fulfillmentStatus}
                </span>
              </div>
            </div>

            {/* Customer Details & Shipping */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

              {/* Customer Contact */}
              <div className="space-y-4">
                <h4 className="font-raleway text-[9px] tracking-wider text-gray-400 font-bold uppercase border-b pb-2">Customer Profile</h4>
                <div className="space-y-3 font-raleway text-xs text-gray-700">
                  <p className="flex items-center gap-2 font-bold text-gray-900"><FiUser className="text-gray-400 shrink-0" /> {selectedOrder.customerName}</p>
                  <p className="flex items-center gap-2"><span className="text-gray-400 font-bold">Email:</span> {selectedOrder.email}</p>
                  <p className="flex items-center gap-2"><span className="text-gray-400 font-bold">Phone:</span> {selectedOrder.phone}</p>
                </div>
              </div>

              {/* Shipping Details */}
              <div className="space-y-4">
                <h4 className="font-raleway text-[9px] tracking-wider text-gray-400 font-bold uppercase border-b pb-2">Delivery Address</h4>
                <div className="font-raleway text-xs text-gray-700 flex items-start gap-2 leading-relaxed">
                  <FiMapPin className="text-[#3c5a25] shrink-0 mt-0.5" />
                  <span>{selectedOrder.shippingAddress}</span>
                </div>
              </div>

            </div>

            {/* Items Purchased List */}
            <div className="space-y-3 mb-6">
              <h4 className="font-raleway text-[9px] tracking-wider text-gray-400 font-bold uppercase border-b pb-2">Items Purchased</h4>
              <div className="border border-gray-100 overflow-hidden">
                <table className="w-full text-left border-collapse text-xs font-raleway">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100 text-gray-400 font-bold uppercase text-[9px] tracking-wider">
                      <th className="p-3 w-16">Item</th>
                      <th className="p-3">Product Name</th>
                      <th className="p-3 w-24 text-right">Unit Price</th>
                      <th className="p-3 w-20 text-center">Qty</th>
                      <th className="p-3 w-24 text-right">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {selectedOrder.items.map((item, idx) => (
                      <tr key={idx} className="text-[#1A1C19] font-medium">
                        <td className="p-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-10 h-10 object-cover border border-gray-100"
                          />
                        </td>
                        <td className="p-3">{item.name}</td>
                        <td className="p-3 text-right">{formatOrderMoney(selectedOrder, item.price)}</td>
                        <td className="p-3 text-center font-bold">{item.qty}</td>
                        <td className="p-3 text-right font-semibold text-[#3c5a25]">{formatOrderMoney(selectedOrder, item.price * item.qty)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Calculations Breakdown */}
            <div className="flex justify-end mb-8">
              <div className="w-64 space-y-3 font-raleway text-xs border-t border-gray-100 pt-4">
                <div className="flex justify-between text-gray-500 font-medium">
                  <span>Cart Subtotal</span>
                  <span>{formatOrderMoney(selectedOrder, selectedOrder.subtotal)}</span>
                </div>
                <div className="flex justify-between text-gray-500 font-medium">
                  <span>Insured Shipping</span>
                  <span>{formatOrderMoney(selectedOrder, selectedOrder.shipping)}</span>
                </div>
                <div className="flex justify-between font-cinzel font-bold text-sm text-[#1A1C19] pt-2 border-t">
                  <span>Grand Total</span>
                  <span className="text-[#3c5a25]">{formatOrderMoney(selectedOrder, selectedOrder.total)}</span>
                </div>
              </div>
            </div>

            {/* Invoice Print & Dispatch Actions */}
            <div className="flex justify-between items-center border-t border-gray-100 pt-5">
              <button
                onClick={() => window.print()}
                className="flex items-center gap-2 border border-[#e0ddd5] px-5 py-3 hover:bg-gray-50 text-[10px] font-raleway font-bold uppercase tracking-[2px]"
              >
                <FiPrinter /> Print Slip
              </button>
              <div className="flex gap-4">
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="px-5 py-3 border border-[#e0ddd5] text-[10px] font-raleway font-bold uppercase tracking-[2px]"
                >
                  Close Invoice
                </button>
                {selectedOrder.fulfillmentStatus === "Processing" && (
                  <button
                    onClick={() => handleFulfillmentChange(selectedOrder.id, "Shipped")}
                    className="px-5 py-3 bg-[#3c5a25] hover:bg-[#2a3f1a] text-white text-[10px] font-raleway font-bold uppercase tracking-[2px] flex items-center gap-2 shadow-lg shadow-[#3c5a25]/15"
                  >
                    <FiTruck /> Mark Dispatched
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
