import { signUpUser } from "../services/signUp.service.js"

export const SignUpControl = async (name, userName, userEmail, password, pfpUrl) => {
    try {
        await signUpUser(name, userName, userEmail, password, pfpUrl);
    } catch (e) {
        console.log(e)
    }
}