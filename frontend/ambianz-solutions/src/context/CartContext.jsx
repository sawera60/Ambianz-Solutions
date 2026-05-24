import { createContext, useState, useEffect, useContext } from "react";
import { getPricePKR } from "../utils/pricing.js";
import axios from "axios";
import { authDataContext } from "./AuthContext.jsx";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const { user, serverUrl } = useContext(authDataContext);

  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Failed to parse cart from localStorage:", error);
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Sync cart to backend when logged in and cart changes
  useEffect(() => {
    if (!user || !serverUrl) return;
    const timeout = setTimeout(() => {
      axios
        .post(`${serverUrl}/api/auth/cart`, { cart: cartItems }, { withCredentials: true })
        .catch((err) => console.error("Cart sync error:", err));
    }, 800); // debounce 800ms
    return () => clearTimeout(timeout);
  }, [cartItems, user, serverUrl]);

  // Load cart from backend when user logs in
  useEffect(() => {
    if (!user || !serverUrl) return;
    axios
      .get(`${serverUrl}/api/auth/cart`, { withCredentials: true })
      .then((res) => {
        if (res.data && res.data.cart && res.data.cart.length > 0) {
          setCartItems(res.data.cart);
        }
      })
      .catch((err) => console.error("Load cart error:", err));
  }, [user, serverUrl]);

  const addToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prevItems, { ...product, quantity }];
    });

    // Open cart to show the item was added
    setIsCartOpen(true);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + getPricePKR(item) * item.quantity;
    }, 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const value = {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
