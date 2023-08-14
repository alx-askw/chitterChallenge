import User from "../models/user.model.js";

export const getName = async (uName) => {
    try {
        return await User.find({ uName, name });
    } catch (e) {
        console.log(e)
    }
}