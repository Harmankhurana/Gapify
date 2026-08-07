import express from 'express';
import { Router } from 'express';
import z from 'zod';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import type { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

dotenv.config();
const authRouter = Router();

authRouter.post('/api/v1/auth/signup', (req: Request, res: Response) => {
    const requiredBody = z.object({
        name: z.string(),
        email: z.string(),
        password: z.string(),
    });

    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    if(!parsedDataWithSuccess.success) {
        return res.status(400).json({
            message: "Incorrect format",
        });
    }

    const { name, email, password } = parsedDataWithSuccess.data;

    try {
        
    } catch (e) {
        
    }
});

authRouter.post('/api/v1/auth/signin', (req: Request, res: Response) => {

});

export {
    authRouter
}