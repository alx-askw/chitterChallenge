//* passing down functions
//https://legacy.reactjs.org/docs/faq-functions.html
// https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

import { useNavigate } from "react-router-dom";



const logInForm = ({ loginHandle }) => {

    //TODO: redirect back to peeps page once logged in 
    const navigate = useNavigate();

    let emailIn = '';
    let passwordIn = '';

    const formSubmit = async (event) => {
        event.preventDefault();
        console.log("here: inside formSubmit()")
        await loginHandle({ email: emailIn, password: passwordIn })
    }
    //todo: change text to email/password to hide it +validation step 1
    return (
        <div>
            <form onSubmit={formSubmit}>
                <input type="text" placeholder='Email' onChange={(event) => emailIn = event.target.value} />
                <input type="text" placeholder='Password' onChange={(event) => passwordIn = event.target.value} />
                {/* {!localStorage.getItem('isLoggedIn') || (localStorage.getItem('isLoggedIn') == 'false' || undefined) && <button type="submit" >Login</button>} Stop any issues if user can press login when they're logged in */}
                <button type="submit" >Login</button>
            </form>
            test1@email.com
            testpassword1
        </div >
    )
}

export default logInForm