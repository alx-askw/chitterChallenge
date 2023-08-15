//* passing down functions
//https://legacy.reactjs.org/docs/faq-functions.html
// https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

const logInForm = ({ loginHandle }) => {

    let emailIn = '';
    let passwordIn = '';

    const formSubmit = async (event) => {
        event.preventDefault();
        console.log("here")
        await loginHandle({ email: emailIn, password: passwordIn })
    }
    //todo: change text to email/password to hide it +validation step 1
    return (
        <div>
            <form onSubmit={formSubmit}>
                <input type="text" placeholder='Email' onChange={(event) => emailIn = event.target.value} />
                <input type="text" placeholder='Email' onChange={(event) => passwordIn = event.target.value} />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default logInForm
