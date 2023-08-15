import express from 'express';
import User from '../models/user.model.js'

const router = express.Router()

//findOne doesn't like callback functions like Ed's example
//exec returns a promise - async
//https://mongoosejs.com/docs/api/model.html#Model.findOne()
// https://mongoosejs.com/docs/api/query.html#Query.prototype.exec()

//* This is really good - related docs and queries - object id and populate
//https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose

router.route('/')
    .post(async (req, res) => {
        // console.log(req.body)
        const { email, password } = req.body;
        console.log(email, " | ", password)
        try {
            const user = await User.findOne({ email }).exec();
            if (user && user.password === password) {
                res.send('login successful')
                console.log('user exists')
            } else {
                res.status(404).send('information is incorrect')
                console.log('failure')
            }
        } catch (e) {
            console.log(e)
            res.status(500).send('failure')
            console.log('failure')
        }

    });

export { router as logInRouter };