import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FiX, FiTrash2, FiMinus, FiPlus } from "react-icons/fi";

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

  const formatPrice = (price) => {
    const numPrice = typeof price === "number"
      ? price
      : parseFloat(String(price).replace(/[^0-9.]/g, "")) || 0;
    return `Rs. ${Math.round(numPrice * 360).toLocaleString()}`;
  };

  const totalPricePKR = Math.round(getTotalPrice() * 360);

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
                      {formatPrice(item.price)}
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
                    Subtotal: {formatPrice(parseFloat(String(item.price).replace(/[^0-9.]/g, "")) * item.quantity * 360)}
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
                Rs. {totalPricePKR.toLocaleString()}
              </span>
            </div>

            {/* Buttons */}
            <div className="space-y-3">
              <button className="w-full font-raleway text-sm font-bold tracking-[2px] uppercase px-6 py-3 bg-[#3c5a25] text-white hover:bg-[#adb940] transition-all duration-300">
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
