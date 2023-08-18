import Peep from "../models/peep.model.js";

//todo: peep replies probably get handled in here somewhere
//todo: add the front end functionality for the front end

export const postPeeps = async ({ userName, name, peepContent }) => {
    try {
        //create is mongooses equivalent to insertOne apparently?
        return await Peep.create({
            userName,
            name,
            peepContent
        });
    } catch (e) {
        throw e
    }
}