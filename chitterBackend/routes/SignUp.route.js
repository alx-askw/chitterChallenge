import express from 'express';
import User from '../models/user.model.js'

import { SignUpControl } from '../controllers/signUp.controller.js';

//todo: perhaps route this through middleware: validation 
//! Using an else in here, maybe use a ternary clean it all up
const router = express.Router();

router.route('/').post(async (req, res) => {
    const { name, userName, userEmail, password, pfpUrl } = req.body;
    console.log("backend route", name, " | ", userName, " | ", userEmail, " | ", password, " | ", pfpUrl);
    try {
        const userNameValid = await User.findOne({ userName }).exec();
        const emailValid = await User.findOne({ userEmail }).exec();
        if (userNameValid || emailValid) {
            res.status(500).send(userNameValid ? 'username in use' : 'email in use')
            console.log('user exists');
        } else {
            res.status(200).send('sign up successful')
            console.log('sign up successful');
            SignUpControl(name, userName, userEmail, password, pfpUrl)
        }
    } catch (e) {
        console.log(e)
    }
});

export { router as signingUpRouter };