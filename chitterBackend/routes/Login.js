import express from 'express';
// import { User } from '../models/user.model.js'

const router = express.Router();

router.route('/').get();

export { router as logInRouter };