import express, { Request, Response, NextFunction } from 'express'
import passport from 'passport'
import { IUser } from '../models/user.model'

import { userService } from '../services/user.service'



export function logout() {

}

export async function signup(req: Request, res: Response) {
    try {
        const user: IUser = req.body
        const Saveduser = await userService.signup(user)
        login(req, res)
        res.json(Saveduser)
    } catch (err) {
        console.log(err);
    }
}

export function getCurrUser(req: Request, res: Response) {
    console.log(req.user);
    res.send(req.user)
}

export function login(req: Request, res: Response) {
    passport.authenticate("local", (err, user, info) => {
        if (err) { return err; }

        if (!user) { return res.status(400).send([user, "Cannot log in", info]); }

        req.login(user, err => {
            res.send("Logged in");
        });
    })(req, res);
}
