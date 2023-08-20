import Footer from "./Footer";
import Header from "./Header";
import LogInForm from "./logInSignUp/LogInForm";
import SigningUpForm from "./logInSignUp/signingUpForm";
import PropTypes from 'prop-types';



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

LogInComp.propTypes = {

    // loggedIn: PropTypes.bool.isRequired,
    logOutUser: PropTypes.func.isRequired,
    signUpHandle: PropTypes.func.isRequired,
    loginHandle: PropTypes.func.isRequired
}
export default LogInComp;

