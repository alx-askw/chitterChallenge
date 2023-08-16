import express from 'express';
import User from '../models/user.model.js'

const router = express.Router()

//findOne doesn't like callback functions like Ed's example
//exec returns a promise - async
//https://mongoosejs.com/docs/api/model.html#Model.findOne()
// https://mongoosejs.com/docs/api/query.html#Query.prototype.exec()

//* This is really good - related docs and queries - object id and populate
//https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose

//! is logic meant to be in this route file???
//! Using an else in here, maybe use a ternary clean it all up
//!remember when deconstructing the body to make sure the keys are the same (userEmail not email)
router.route('/')
    .post(async (req, res) => {
        console.log(req.body)
        const { userEmail, password } = req.body;
        console.log(userEmail, " | ", password)
        try {
            const user = await User.findOne({ userEmail }).exec();
            if (user && user.password === password) {
                res.status(200).send({ name: user.name, userName: user.userName, pfpUrl: user.pfpUrl })
                console.log('user exists')
                // console.log(user)
            } else {
                res.status(404).send('information is incorrect')
                console.log('failure')
                // console.log(user)
            }
        } catch (e) {
            console.log(e)
            res.status(500).send('failure')
            console.log('failure')
        }

    });

export { router as logInRouter };