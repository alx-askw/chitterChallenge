import express from 'express';

import { postPeepsControl } from '../controllers/postPeeps.controller.js';

const router = express.Router();

router.route('/').post(postPeepsControl);

export { router as postPeepsRouter };