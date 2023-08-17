import axios from "axios";

//todo: all of this - you get form app.jsx
//todo: error handling for when server is offline

//* Current backend link for logging in
const loggingInRoute = "http://localhost:3000/login";

//* Remember that in the schema the email is called userEmail
export const loginConfirm = async ({ email, password }) => {
    console.log(email, password)
    try {
        const logCheck = await axios.post(loggingInRoute, { userEmail: email, password: password });
        console.log("does user exist: ", (logCheck.status === 200))
        console.log("userdata for local storage", logCheck.data)
        const logCheckInfo = logCheck.data;
        localStorage.setItem('userRealName', logCheckInfo.name)
        localStorage.setItem('userName', logCheckInfo.userName)
        return ({ loginStatus: [logCheck.status === 200] }); //put this in array because default state is in array for some reason
    } catch (e) {
        console.log("does user exist: ", false)
        return false;
    }
}