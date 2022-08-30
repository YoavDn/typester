import express, { Request, Response, NextFunction } from 'express'
import { testService } from '../services/test.service'
import { testType } from '../../../client/src/types'

export async function saveTest(req: Request, res: Response) {
    try {
        const test: testType = req.body.test
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