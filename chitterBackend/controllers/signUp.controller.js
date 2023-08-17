import { signUpUser } from "../services/signUp.service.js"
import User from '../models/user.model.js'


export const SignUpControl = async (name, userName, userEmail, password, pfpUrl) => {

    try {
        const userNameValid = await User.findOne({ userName }).exec();
        const emailValid = await User.findOne({ userEmail }).exec();
        if (userNameValid || emailValid) {
            return { status: 500, message: 'username or email in use' };
        } else {
            await signUpUser(name, userName, userEmail, password, pfpUrl);
            return { status: 200, message: 'sign up successful' };
        }
    } catch (e) {
        console.log(e)
        return { status: 500, message: 'error' };
    }
}