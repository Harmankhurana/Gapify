import express from 'express';
import { Router } from 'express';
import type { Request, Response } from 'express';
import { PersonOneModel, PersonTwoModel } from '../database/ageGap.db.js';

const ageGapRouter = Router();

ageGapRouter.post('/', async (req: Request, res: Response) => {

});

export {
    ageGapRouter
}