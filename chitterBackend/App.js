import express from "express";
import mongoose from "mongoose";
import cors from 'cors';


import { allPeepsRouter } from "./routes/allPeeps.route.js";


const app = express();
const PORT = 3000;
app.use(express.urlencoded({ extended: true }));

const dbConnect = async () => {
    console.log('connecting to db');
    await mongoose.connect('mongodb://127.0.0.1:27017/chitterDev'); //TODO: maybe add timeout stuff here
    console.log('connected to db')
}

dbConnect().catch(err => console.log(err));

app.use(express.json());
app.use(cors());
app.use('/', allPeepsRouter)

const APP = app.listen(PORT, () => {
    console.log(`SERVER ONLINE: localhost:${PORT}`)
})


export default APP;