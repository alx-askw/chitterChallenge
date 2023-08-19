import express from 'express';

import { replyControl } from '../controllers/reply.controller.js';
import { emailTaggedUser } from '../middlewares/emailTagged.middleware.js';

const router = express.Router();

router.route('/').post(async (req, res) => {
    const { peepId, name, userName, peepContent } = req.body;
    emailTaggedUser(userName, peepContent); // for other story
    const replyingToPeep = await replyControl(peepId, userName, name, peepContent);
    res.status(replyingToPeep.status).send(replyingToPeep.message);
});

export { router as replyPeepsRouter };  