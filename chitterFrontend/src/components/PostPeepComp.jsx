//*some of the sources for this page:
//use state
//https://stackoverflow.com/questions/33667773/what-is-the-react-js-way-of-handling-visibility-hidden

// https://stackoverflow.com/questions/35607209/i-need-a-form-to-appear-when-i-click-on-a-button

import { useState } from "react";
import { postingPeep } from "../utils/backendAPICalls.util.js";
import './PostPeepComp.css'
import PropTypes from 'prop-types';


const PostPeepComp = ({ getThePeeps }) => {

    const [formHidden, setFormHidden] = useState(['hidden'])

    const toggleForm = () => {
        setFormHidden(formHidden === 'hidden' ? 'visible' : 'hidden')
    }


    let peepContent = '';
    const peepFormSubmit = async (event) => {
        event.preventDefault();
        await postingPeep(localStorage.getItem('userRealName'), localStorage.getItem('userName'), peepContent)
        getThePeeps(); //to reload page on submit
        setFormHidden('hidden');

    }

    //TODO: when a user submits the peep, clear the form input field

    return (
        <div className="formWrapper">
            <h2 className="signHeader">Signed in as: @{localStorage.getItem('userName')}</h2>
            <h3>Post Peep</h3>
            <button className="formButton" onClick={toggleForm}>New Peep</button>
            <form id='peepForm' style={{ visibility: formHidden }} onSubmit={peepFormSubmit}>
                <input type="text" placeholder="Peep..." onChange={(event) => peepContent = event.target.value}></input>
                <br></br>
                <button type='submit'> -&gt; Post Peep &lt;-</button>
            </form>
        </div >
    )
}

PostPeepComp.propTypes = {
    getThePeeps: PropTypes.func.isRequired
}

export default PostPeepComp
