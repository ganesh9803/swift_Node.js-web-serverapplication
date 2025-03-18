import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { connectDB } from "./config";
import router from "./routes";


dotenv.config();
const app = express();

app.use(express.json());
app.use("/api", router);

// Default route to prevent 404 errors
app.get("/", (req: Request, res: Response) => {
    res.send("API is running...");
});

connectDB();

export default app;
