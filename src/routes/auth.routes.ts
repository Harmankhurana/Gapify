import express from 'express';
import { Router } from 'express';
import z from 'zod';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import type { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { UserModel } from '../database/ageGap.db.js';

dotenv.config();
const authRouter = Router();
const saltRounds = 10

authRouter.post('/signup', async (req: Request, res: Response) => {
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
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        await UserModel.create({
            name: name,
            email: email,
            password: hashedPassword,
        });

        res.status(200).json({
            message: "You're Signed Up",
        });

    } catch (e) {
        res.status(500).json({
            message: "Something went wrong while Signing Up",
            error: e,
        });
    }
});

authRouter.post('/signin', async (req: Request, res: Response) => {
    const { email, password } = req.body;

});

export {
    authRouter
}