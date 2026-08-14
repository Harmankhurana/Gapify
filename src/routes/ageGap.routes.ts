import express from 'express';
import { Router } from 'express';
import type { Request, Response } from 'express';
import { PersonAndAgeModel } from '../database/ageGap.db.js';
import { safeParse, z } from 'zod';

const ageGapRouter = Router();

ageGapRouter.post('/home', async (req: Request, res: Response) => {
    const requiredBody = z.object({
        personOneName: z.string(),
        personOneAge: z.number().nonnegative(),
        personTwoName: z.string(),
        personTwoAge: z.number().nonnegative(),
    });

    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    if (!parsedDataWithSuccess.success) {
        res.json({
            message: "Incorrect format used in passing names and age"
        });
    }

    const { personOneName, personOneAge, personTwoName, personTwoAge } = parsedDataWithSuccess.data;

    try {
        await PersonAndAgeModel.create({
            personOneName: personOneName,
            personOneAge: personOneAge,
            personTwoName: personTwoName,
            personTwoAge: personTwoAge,
        });

        
    } catch (e) {
        res.json({
            message: "Something went wrong while adding information",
            error: e
        });
    }

});

export {
    ageGapRouter
}