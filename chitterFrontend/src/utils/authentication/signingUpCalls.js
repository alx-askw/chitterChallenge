import axios from "axios";

//* Current backend link for signing up
//! make sure that it is the correct protocol - spent ages fixing cors errors because I had link as https
//https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSDidNotSucceed?utm_source=devtools&utm_medium=firefox-cors-errors&utm_campaign=default
const signingUpRoute = "http://localhost:3000/signup"

export const accountSignUp = async (name, userName, email, password, pfpUrl) => {

    console.log("in signing up calls", name, userName, email, password, pfpUrl);
    // const signUpinfo = { name, userName, email, password, pfpUrl };
    try {
        const signUpAttempt = await axios.post(signingUpRoute, {
            name: name,
            userName: userName,
            userEmail: email,
            password: password,
            pfpUrl: pfpUrl,
        });
        return signUpAttempt.status;
    } catch (e) {
        console.log(e);
        return 'error with sign up';
    }


}