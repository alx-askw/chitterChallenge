import User from "../models/user.model.js";
import { tagEmailService } from "../services/emailTagged.service.js";

export const emailTaggedUser = async (userName, peepContent) => {
    let taggedUsers = [];
    const stringArray = String(peepContent).split(' ');
    for (const word of stringArray) {
        let validUser;
        word.startsWith('@') && (validUser = await User.findOne({ userName: word.substring(1) })) //get rid of the @
        validUser && taggedUsers.push(validUser.userEmail)
    }

    if (taggedUsers.length > 0) {
        for (const userEmail of taggedUsers) {
            try {
                await tagEmailService(userEmail, userName, peepContent)
            } catch (e) {
                throw (e)
            }
        }
    }
}