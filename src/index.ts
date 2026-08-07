import express from "express";
import dotenv from 'dotenv';
import { authRouter } from "./routes/auth.routes.js";
import mongoose from "mongoose";
import { log } from "node:console";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.get('api/v1/auth', authRouter);

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
    
})
