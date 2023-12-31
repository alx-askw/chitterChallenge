import { postPeeps } from "../services/postPeeps.service.js";
import { emailTaggedUser } from "../middlewares/emailTagged.middleware.js";

export const postPeepsControl = async (req, res) => {
    //todo: some kind of bug where 404 get sent on a successful add for some reason - this seems kinda breaking so get on it asap
    try {
        const { userName, name, peepContent } = req.body;
        await postPeeps({ userName, name, peepContent });
        res.status(200).send('peep added successfully')
        emailTaggedUser(userName, peepContent);
    } catch (e) {
        res.status(404).send('adding peep failed')
    }
    try {
        const { userName, peepContent } = req.body;
    } catch (e) {
        throw (e)
    }
}
