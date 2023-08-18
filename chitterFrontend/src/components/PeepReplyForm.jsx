//* this is copy of the post peep form but with some changes, duplicated code

import { replyingPeep } from "../utils/backendAPICalls.util.js"
import { useState } from "react"
import './PeepReplyForm.css'

const PeepReplyForm = ({ peepObj, getThePeeps }) => {

    const [formHidden, setFormHidden] = useState(['hidden'])

    const toggleForm = () => {
        setFormHidden(formHidden === 'hidden' ? 'visible' : 'hidden')
    }


    let peepContent = '';
    const peepReplyFormSubmit = async (event) => {
        event.preventDefault();
        await replyingPeep(peepObj._id, localStorage.getItem('userName'), localStorage.getItem('userRealName'), peepContent) //order was wrong way round - messed up order in backend lol
        getThePeeps(); //to reload page on submit
        setFormHidden('hidden');

    }

    return (
        <div className="formWrapper">
            <button className="formButton" onClick={toggleForm}>Reply</button>
            <form id='peepForm' style={{ visibility: formHidden }} onSubmit={peepReplyFormSubmit}>
                <input type="text" placeholder="Peep..." onChange={(event) => peepContent = event.target.value}></input>
                <button type='submit'> -&gt; Post Reply &lt;-</button>
            </form>
        </div >
    )
}

export default PeepReplyForm
