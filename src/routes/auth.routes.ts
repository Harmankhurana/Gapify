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

});

authRouter.post('/api/v1/auth/signin', (req: Request, res: Response) => {

});

export {
    authRouter
}