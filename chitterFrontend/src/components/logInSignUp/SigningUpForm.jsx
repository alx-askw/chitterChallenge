
const SigningUpForm = ({ signUpHandle }) => {

    //todo: added validation so no blank fields are sent
    //todo: maybe add confirm password if passwords get hashed at some point
    //todo: make fields required
    //! (THIS MAY NOT BE THE CASE) THE SCHEMA REQUIRES A PROFILE PICTURE TO PRESENT - MAYBE ADD DEFAULT IN BACKEND
    let nameIn = '';
    let userNameIn = '';
    let userEmailIn = '';
    let passwordIn = '';
    let pfpUrlIn = '';


    const formSubmit = async (event) => {
        event.preventDefault();
        console.log("inside formSubmit in signup form: ", nameIn, userNameIn, userEmailIn, passwordIn, pfpUrlIn)
        await signUpHandle(nameIn, userNameIn, userEmailIn, passwordIn, pfpUrlIn)
    }

    return (

        <div>
            <form onSubmit={formSubmit}>
                <input type="text" placeholder='Name' onChange={(event) => nameIn = event.target.value} required />
                <input type="text" placeholder='Username' onChange={(event) => userNameIn = event.target.value} />
                <input type="text" placeholder='Email' onChange={(event) => userEmailIn = event.target.value} />
                <input type="text" placeholder='Password' onChange={(event) => passwordIn = event.target.value} />
                <input type="text" placeholder='Url (optional)' onChange={(event) => pfpUrlIn = event.target.value} />
                {/* <input type="text" placeholder='Url (optional)' onChange={(event) => event.target.value.length > 0 ? pfpUrlIn = event.target.value : pfpUrlIn = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png'} /> */}

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SigningUpForm
