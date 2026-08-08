import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { authRouter } from "./routes/auth.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/v1/auth", authRouter);

mongoose.connect(process.env.MONGO_URL!)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server is running on PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("DB connection failed", err);
  });