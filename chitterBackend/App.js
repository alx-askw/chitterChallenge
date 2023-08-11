import { Express } from "express";

const app = Express();
const PORT = 3000;
app.use(express.urlencoded({ extended: true }));

