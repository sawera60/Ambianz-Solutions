import React, { useContext, useMemo, useState } from "react";
import { CartContext } from "../context/CartContext";
import { FiCheckCircle, FiMinus, FiPlus, FiTrash2, FiX } from "react-icons/fi";
import { formatPricePKR, getPricePKR } from "../utils/pricing.js";

const Cart = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    clearCart,
  } = useContext(CartContext);
  const [checkoutMessage, setCheckoutMessage] = useState("");

  const totalPricePKR = getTotalPrice();

  const checkoutUrl = useMemo(() => {
    const lines = cartItems.map(
      (item) =>
        `${item.quantity} x ${item.name} - ${formatPricePKR(getPricePKR(item) * item.quantity)}`,
    );
    const message = [
      "Hello Ambianz Solutions, I would like to checkout these items:",
      ...lines,
      `Total: ${formatPricePKR(totalPricePKR)}`,
    ].join("\n");

    return `https://wa.me/?text=${encodeURIComponent(message)}`;
  }, [cartItems, totalPricePKR]);

  const handleCheckout = () => {
    const savedOrders = JSON.parse(localStorage.getItem("customerOrders") || "[]");
    const order = {
      id: `AMB-${Date.now().toString().slice(-6)}`,
      date: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      items: cartItems.map((item) => ({
        id: item.id,
        name: item.name,
        image: item.img,
        qty: item.quantity,
        price: getPricePKR(item),
      })),
      subtotal: totalPricePKR,
      shipping: 0,
      total: totalPricePKR,
      currency: "PKR",
      paymentStatus: "Pending",
      fulfillmentStatus: "Processing",
    };

    localStorage.setItem("customerOrders", JSON.stringify([order, ...savedOrders]));
    clearCart();
    setCheckoutMessage(`Checkout created: ${order.id}`);
    window.open(checkoutUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* Cart Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Cart Sidebar */}
      <div
        className={`fixed right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl transition-transform duration-300 z-50 flex flex-col ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Cart Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#f0f0f0]">
          <h2 className="font-cinzel text-lg font-bold text-[#1A1C19]">
            Shopping Cart
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 rounded hover:bg-[#f0f0f0] transition-all duration-300"
          >
            <FiX className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <div className="w-16 h-16 rounded-full bg-[#f0f0f0] flex items-center justify-center text-2xl">
                🛒
              </div>
              <p className="font-raleway text-sm text-gray-400">
                Your cart is empty
              </p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-4 border border-[#f0f0f0] rounded hover:border-[#adb940]/40 transition-all duration-300"
              >
                {/* Product Image */}
                <div className="w-24 h-24 shrink-0 rounded overflow-hidden bg-[#f8f6f1]">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "";
                    }}
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1 flex flex-col gap-2">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <h4 className="font-cinzel text-sm font-semibold text-[#1A1C19] line-clamp-2">
                        {item.name}
                      </h4>
                      <p className="font-raleway text-xs text-gray-400 mt-1">
                        {item.material}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-1 text-gray-400 hover:text-red-500 transition-all duration-300"
                    >
                      <FiTrash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Price and Quantity */}
                  <div className="flex items-center justify-between mt-auto">
                    <span className="font-cinzel text-sm font-bold text-[#3c5a25]">
                      {formatPricePKR(item)}
                    </span>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 border border-[#f0f0f0] rounded">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 text-gray-600 hover:text-[#3c5a25] transition-all duration-300"
                      >
                        <FiMinus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center font-raleway text-xs font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 text-gray-600 hover:text-[#3c5a25] transition-all duration-300"
                      >
                        <FiPlus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Item Total */}
                  <p className="font-raleway text-xs text-gray-500 text-right">
                    Subtotal: {formatPricePKR(getPricePKR(item) * item.quantity)}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-[#f0f0f0] p-6 space-y-4">
            {/* Total */}
            <div className="flex items-center justify-between pb-4 border-b border-[#f0f0f0]">
              <span className="font-cinzel text-base font-bold text-[#1A1C19]">
                Total:
              </span>
              <span className="font-cinzel text-lg font-bold text-[#3c5a25]">
                {formatPricePKR(totalPricePKR)}
              </span>
            </div>

            {checkoutMessage && (
              <div className="flex items-center gap-2 border border-green-200 bg-green-50 px-3 py-2 text-[11px] font-raleway text-green-700">
                <FiCheckCircle />
                {checkoutMessage}
              </div>
            )}

            {/* Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleCheckout}
                className="w-full font-raleway text-sm font-bold tracking-[2px] uppercase px-6 py-3 bg-[#3c5a25] text-white hover:bg-[#adb940] transition-all duration-300"
              >
                Checkout
              </button>
              <button
                onClick={() => clearCart()}
                className="w-full font-raleway text-sm font-bold tracking-[2px] uppercase px-6 py-3 border-2 border-[#f0f0f0] text-gray-600 hover:border-red-500 hover:text-red-500 transition-all duration-300"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
