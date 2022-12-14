import express, { Request, Response, NextFunction } from 'express'
import { testService } from '../services/test.service'

export async function saveTest(req: Request, res: Response) {
    try {
        const test = req.body.test
        const savedTest = await testService.saveTest(test, req.body.uid)
        return savedTest
    } catch (err) {
        return console.log(err);
    }
}

export async function getUserTests(req: Request, res: Response) {
    try {
        const userTests = await testService.userTests(req.params.userId)
        res.send(userTests)
    } catch (err) {
        return console.log(err);
    }
}


export async function topTests(req: Request, res: Response) {
    try {

        const topTests = await testService.getTopTests()

        return res.send(topTests)

    } catch (err) {
        return console.log(err);
    }
}