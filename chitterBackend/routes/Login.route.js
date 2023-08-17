import express from 'express';
import { loginControl } from '../controllers/login.controller.js';

const router = express.Router()

//findOne doesn't like callback functions like Ed's example
//exec returns a promise - async
//https://mongoosejs.com/docs/api/model.html#Model.findOne()
// https://mongoosejs.com/docs/api/query.html#Query.prototype.exec()

//* This is really good - related docs and queries - object id and populate
//https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose

//! Using an else in here, maybe use a ternary clean it all up
//!remember when deconstructing the body to make sure the keys are the same (userEmail not email)
router.route('/')
    .post(async (req, res) => {
        const { userEmail, password } = req.body;
        const loginHandle = await loginControl(userEmail, password);
        res.status(loginHandle.status).send(loginHandle.message);
    });

export { router as logInRouter };