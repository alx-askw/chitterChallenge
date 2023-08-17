import express from 'express';


import { SignUpControl } from '../controllers/signUp.controller.js';

//todo: perhaps route this through middleware: validation 
const router = express.Router();

router.route('/').post(async (req, res) => {
    const { name, userName, userEmail, password, pfpUrl } = req.body;
    try {
        const signUpRes = await SignUpControl(name, userName, userEmail, password, pfpUrl)
        res.status(signUpRes.status || 500).send(signUpRes.message || 'error');
    } catch (e) {
        console.log(e)
    }

});

export { router as signingUpRouter };