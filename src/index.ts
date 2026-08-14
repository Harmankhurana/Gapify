import express from "express";
import type { Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { authRouter } from "./routes/auth.routes.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// API endpoint which checks the status of server
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

// API endpoint which uses for authentication
app.use("/api/v1/auth", authRouter);

// API endpoint which is used for generating the Age gaps between people
// app.use("api/v1/gap", gapRouter);

async function startServer(): Promise<void> {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
    
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

void startServer();
