import express from "express";
import {
  createOrder,
  getOrders,
  updateOrderStatus,
} from "../controllers/order.controller.js";
import { isAuthenticated, isAdmin } from "../middlewares/auth.middleware.js";

const orderRouter = express.Router();

orderRouter.post("/", createOrder);
orderRouter.get("/", isAuthenticated, isAdmin, getOrders);
orderRouter.put("/:id", isAuthenticated, isAdmin, updateOrderStatus);

export default orderRouter;
