import Peep from "../models/peep.model.js";

export const getAllPeeps = async () => {
    try {
        return await Peep.find({});
    } catch (e) {
        throw e;
    }
}