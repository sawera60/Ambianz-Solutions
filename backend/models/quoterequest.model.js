import mongoose from "mongoose";

const quoteRequestSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    service: {
      type: String,
      enum: ["Kitchen", "Doors", "Wardrobe", "Media Wall", "Cafe Fitout"],
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const QuoteRequest = mongoose.model("QuoteRequest", quoteRequestSchema);
