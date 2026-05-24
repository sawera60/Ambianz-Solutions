import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDB = async () => {
  try {
    mongoose.set("bufferCommands", false);
    if (!process.env.MONGODB_URL) {
      throw new Error("MONGODB_URL is not configured");
    }

    const mongoUrl = process.env.MONGODB_URL.trim().replace(/^"+|"+$/g, "");
    const connect = await mongoose.connect(mongoUrl, { bufferCommands: false });
    console.log(`mongodb is connected${connect.connection.host}`);

    // Drop lingering userName unique index if it exists in the database
    try {
      await mongoose.connection.db.collection("users").dropIndex("userName_1");
      console.log("Successfully dropped legacy userName_1 unique index");
    } catch (indexError) {
      // Index might not exist or already dropped, which is completely fine
    }
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};
export default connectDB;
