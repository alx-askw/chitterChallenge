import Footer from "./Footer";
import Header from "./Header";
import LogInForm from "./logInSignUp/LogInForm";
import SigningUpForm from "./logInSignUp/signingUpForm";


const LogInComp = ({ loggedIn, loginHandle, logOutUser, signUpHandle }) => {
    return (
        <div>
            <Header loggedIn={loggedIn} logOutUser={logOutUser}></Header>
            <LogInForm loginHandle={loginHandle}></LogInForm>
            <SigningUpForm signUpHandle={signUpHandle}></SigningUpForm>
            <Footer></Footer>
        </div>
    )
}

export default LogInComp;

