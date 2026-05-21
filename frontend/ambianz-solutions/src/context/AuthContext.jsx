import { createContext, useState } from "react";

export const authDataContext = createContext();

const AuthContext = ({ children }) => {
  const serverUrl = "http://localhost:8000";

  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem("user");
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (error) {
      console.error("Failed to parse user from localStorage:", error);
      return null;
    }
  });

  const loginUser = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const logoutUser = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  let value = {
    serverUrl,
    user,
    setUser,
    setUserData: loginUser,
    loginUser,
    logoutUser,
  };

  return (
    <authDataContext.Provider value={value}>
      {children}
    </authDataContext.Provider>
  );
};

export default AuthContext;
