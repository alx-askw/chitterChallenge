import Footer from "./Footer";
import Header from "./Header";
import LogInForm from "./logInSignUp/LogInForm";
import SigningUpForm from "./logInsignUp/signingUpForm";


const LogInComp = ({ loggedIn, loginHandle, logOutUser }) => {
    return (
        <div>
            <Header loggedIn={loggedIn} logOutUser={logOutUser}></Header>
            <LogInForm loginHandle={loginHandle}></LogInForm>
            <SigningUpForm></SigningUpForm>
            <Footer></Footer>
        </div>
    )
}

export default LogInComp;

