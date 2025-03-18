import mongoose from "mongoose";
import * as dotenv from "dotenv"; 

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/node_assignment";

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("MongoDB connected successfully!");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};
