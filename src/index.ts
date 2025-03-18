import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config";
import router from "./routes";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api", router);

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
