import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { authDataContext } from "./AuthContext";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const { user, serverUrl } = useContext(authDataContext);
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem("favorites");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Load favorites from backend when logged in
  useEffect(() => {
    const fetchFavorites = async () => {
      if (user) {
        try {
          const res = await axios.get(`${serverUrl}/api/auth/favorites`, {
            withCredentials: true,
          });
          if (res.data && res.data.favorites) {
            setFavorites(res.data.favorites);
          }
        } catch (err) {
          console.error("Error fetching favorites:", err);
        }
      }
    };
    fetchFavorites();
  }, [user, serverUrl]);

  const toggleFavorite = async (product) => {
    const isFav = favorites.some((fav) => fav.id === product.id);
    let updated;
    if (isFav) {
      updated = favorites.filter((fav) => fav.id !== product.id);
    } else {
      updated = [...favorites, product];
    }
    setFavorites(updated);

    if (user) {
      try {
        await axios.post(
          `${serverUrl}/api/auth/favorites`,
          { favorites: updated },
          { withCredentials: true }
        );
      } catch (err) {
        console.error("Error saving favorites to backend:", err);
      }
    }
  };

  const isFavorite = (productId) => {
    return favorites.some((fav) => fav.id === productId);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
