import express from 'express';
import { Router } from 'express';
import z from 'zod';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import type { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { UserModel } from '../database/auth.db.js';
import { JWT_PASSWORD } from '../config/db.js';

dotenv.config();
const authRouter = Router();
const saltRounds = 10

authRouter.post('/signup', async (req: Request, res: Response) => {
    const requiredBody = z.object({
        firstName: z.string(),
        lastName: z.string(),
        email: z.string(),
        password: z.string(),
    });

    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    if(!parsedDataWithSuccess.success) {
        return res.status(400).json({
            message: "Incorrect format",
        });
    }

    const { firstName, lastName, email, password } = parsedDataWithSuccess.data;

    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        await UserModel.create({
            firstName: firstName,
            lastName: lastName,
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

authRouter.post('/api/v1/signin', async (req: Request, res: Response) => {
    const email =  req.body.email;
    const password = req.body.password;

    const existingUser = await UserModel.findOne({ email, password });

    if(existingUser) {
        const token = jwt.sign({
            id: existingUser._id,
        }, JWT_PASSWORD);
        console.log(token);

        res.json({
            token,
        });
    } else {
        res.json({
            message: "Incorrect Credentials",
        });
    };
});

export {
    authRouter
}