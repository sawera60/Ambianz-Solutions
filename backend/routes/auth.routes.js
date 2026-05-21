import express from "express";
import {
  signUp,
  signIn,
  logout,
  googleSignUp,
} from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/signup", signUp);
authRouter.post("/google", googleSignUp);
authRouter.post("/signin", signIn);
authRouter.post("/logout", logout);

export default authRouter;
