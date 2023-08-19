import express from "express";
import mongoose from "mongoose";
import cors from 'cors';

//* IMPORT OF ALL ROUTES
import { allPeepsRouter } from "./routes/allPeeps.route.js";
import { logInRouter } from "./routes/Login.route.js";
import { postPeepsRouter } from "./routes/postPeep.route.js";
import { signingUpRouter } from "./routes/SignUp.route.js";
import { replyPeepsRouter } from "./routes/peepReply.route.js";


const app = express();
const PORT = 3000;
app.use(express.urlencoded({ extended: true }));

//TODO: replace this with envs | it will make is so much easier - to no test with dev lol
const chitterDevLink = 'mongodb://127.0.0.1:27017/chitterDev';
const chitterTestLink = 'mongodb://127.0.0.1:27017/chitterTest'

const dbConnect = async () => {
    console.log('connecting to db');
    await mongoose.connect(chitterDevLink); //TODO: maybe add timeout stuff here
    console.log('connected to db')
}

dbConnect().catch(err => console.log(err));

app.use(express.json());
app.use(cors());
app.use('/', allPeepsRouter);
app.use('/login', logInRouter);
app.use('/postPeeps', postPeepsRouter);
app.use('/signup', signingUpRouter);
app.use('/reply', replyPeepsRouter);

const APP = app.listen(PORT, () => {
    console.log(`SERVER ONLINE: localhost:${PORT}`)
})


export default APP;