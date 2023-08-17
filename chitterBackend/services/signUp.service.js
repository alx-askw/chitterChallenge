import User from "../models/user.model.js";

//todo: add the front end functionality for the front end

export const signUpUser = async (name, userName, userEmail, password, pfpUrl) => {
    try {
        //create is mongooses equivalent to insertOne apparently?
        return await User.create({
            name,
            userName,
            userEmail,
            password,
            pfpUrl
        });
    } catch (e) {
        console.log(e)
    }
}