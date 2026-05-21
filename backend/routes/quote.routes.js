import express from "express";
import { createQuoteRequest, getQuoteRequests } from "../controllers/quote.controller.js";

const quoteRouter = express.Router();

quoteRouter.post("/quote", createQuoteRequest);
quoteRouter.get("/quote", getQuoteRequests);

export default quoteRouter;
