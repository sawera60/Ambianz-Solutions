import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import authRouter from "./routes/auth.routes.js";
import quoteRouter from "./routes/quote.routes.js";
import productRouter from "./routes/product.routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  }),
);

//api routes
app.use("/api/auth", authRouter);
app.use("/api", quoteRouter);
app.use("/api/product", productRouter);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
