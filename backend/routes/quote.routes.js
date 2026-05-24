import express from "express";
import { createQuoteRequest, getQuoteRequests } from "../controllers/quote.controller.js";
import { isAuthenticated, isAdmin } from "../middlewares/auth.middleware.js";

const quoteRouter = express.Router();

quoteRouter.post("/quote", createQuoteRequest);
quoteRouter.get("/quote", isAuthenticated, isAdmin, getQuoteRequests);

export default quoteRouter;
