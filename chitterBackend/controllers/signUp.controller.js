import { signUpUser } from "../services/signUp.service.js"
import User from '../models/user.model.js'


//*for case sense
//!https://stackoverflow.com/questions/7101703/how-do-i-make-case-insensitive-queries-on-mongodb
//!https://stackoverflow.com/questions/7101703/how-do-i-make-case-insensitive-queries-on-mongodb

export const SignUpControl = async (name, userName, userEmail, password, pfpUrl) => {

    try {
        const userNameValid = await User.findOne({ userName: {} }).exec();
        const emailValid = await User.findOne({ userEmail }).exec();
        if (userNameValid || emailValid) {
            return { status: 500, message: 'username or email in use' };
        } else {
            await signUpUser(name, userName, userEmail, password, pfpUrl);
            return { status: 200, message: 'sign up successful' };
        }
    } catch (e) {
        return { status: 500, message: 'error' };
    }
}