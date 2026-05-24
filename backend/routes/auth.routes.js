import express from "express";
import {
  signUp,
  signIn,
  logout,
  googleSignUp,
  getUserCart,
  updateUserCart,
  getUserFavorites,
  updateUserFavorites,
} from "../controllers/auth.controller.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";

const authRouter = express.Router();

authRouter.post("/signup", signUp);
authRouter.post("/google", googleSignUp);
authRouter.post("/signin", signIn);
authRouter.post("/logout", logout);

authRouter.get("/cart", isAuthenticated, getUserCart);
authRouter.post("/cart", isAuthenticated, updateUserCart);
authRouter.get("/favorites", isAuthenticated, getUserFavorites);
authRouter.post("/favorites", isAuthenticated, updateUserFavorites);

export default authRouter;
