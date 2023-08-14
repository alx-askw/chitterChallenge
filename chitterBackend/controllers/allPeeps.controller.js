import { getAllPeeps } from "../services/getPeeps.service.js";
import { getName } from "../services/user.service.js";
// import { getAllPeeps } from "../developmentFilesNotForShow/chitterDevTest.js"; //TODO: get rid of this line lol
// import { getAllPeeps } from "../developmentFilesNotForShow/chitterUserDevTest.js";


export const allPeeps = async (req, res) => {
    try {
        const peeps = await getAllPeeps();
        res.json(peeps)
    } catch (e) {
        res.status(404).send('db - not found')
    }
}
