import express from 'express';

import { replyControl } from '../controllers/reply.controller.js';
import { emailTaggedUser } from '../middlewares/emailTagged.middleware.js';

const router = express.Router();

router.route('/').post(async (req, res) => {
    const { peepId, name, userName, peepContent } = req.body;
    emailTaggedUser(peepContent); // for other story
    // const replying = await replyControl(peepId, name, userName, peepContent);
    const replyingToPeep = await replyControl(peepId, name, userName, peepContent);
    res.status(replyingToPeep.status).send(replyingToPeep.message);
});

export { router as replyPeepsRouter };  