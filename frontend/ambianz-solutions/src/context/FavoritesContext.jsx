import React, { createContext, useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import { authDataContext } from "./AuthContext";

export const FavoritesContext = createContext();

const getFavoriteKey = (item) => {
  if (item && typeof item === "object") {
    return String(item.favoriteId || item.id || item._id || "");
  }
  return String(item || "");
};

const normalizeFavorites = (items) =>
  (Array.isArray(items) ? items : [])
    .filter((item) => item && typeof item === "object")
    .map((item) => ({
      ...item,
      id: getFavoriteKey(item),
      img: item.img || item.image || "",
      image: item.image || item.img || "",
    }))
    .filter((item) => item.id && item.name);

const mergeFavorites = (...favoriteLists) => {
  const merged = [];
  const seen = new Set();

  favoriteLists.flatMap(normalizeFavorites).forEach((item) => {
    const key = getFavoriteKey(item);
    if (!seen.has(key)) {
      seen.add(key);
      merged.push(item);
    }
  });

  return merged;
};

export const FavoritesProvider = ({ children }) => {
  const { user, serverUrl } = useContext(authDataContext);
  const favoritesRef = useRef([]);
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem("favorites");
      return saved ? normalizeFavorites(JSON.parse(saved)) : [];
    } catch {
      return [];
    }
  });

  // Sync to localStorage
  useEffect(() => {
    favoritesRef.current = favorites;
    localStorage.setItem("favorites", JSON.stringify(normalizeFavorites(favorites)));
  }, [favorites]);

  // Load favorites from backend when logged in
  useEffect(() => {
    const fetchFavorites = async () => {
      if (!user) return;

      try {
        const res = await axios.get(`${serverUrl}/api/auth/favorites`, {
          withCredentials: true,
        });
        const merged = mergeFavorites(favoritesRef.current, res.data?.favorites);
        setFavorites(merged);

        if (merged.length !== normalizeFavorites(res.data?.favorites).length) {
          await axios.post(
            `${serverUrl}/api/auth/favorites`,
            { favorites: merged },
            { withCredentials: true },
          );
        }
      } catch (err) {
        console.error("Error fetching favorites:", err);
      }
    };
    fetchFavorites();
  }, [user, serverUrl]);

  const toggleFavorite = async (product) => {
    const productToSave = {
      ...product,
      id: getFavoriteKey(product),
      img: product.img || product.image || "",
      image: product.image || product.img || "",
    };
    const productKey = getFavoriteKey(productToSave);
    const isFav = favorites.some((fav) => getFavoriteKey(fav) === productKey);
    let updated;
    if (isFav) {
      updated = favorites.filter((fav) => getFavoriteKey(fav) !== productKey);
    } else {
      updated = [...favorites, productToSave];
    }
    updated = normalizeFavorites(updated);
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
    const key = getFavoriteKey(productId);
    return favorites.some((fav) => getFavoriteKey(fav) === key);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
