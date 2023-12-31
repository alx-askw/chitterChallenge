
//*how to hide elements in react
//*https://dirask.com/posts/React-how-to-show-or-hide-element-jvorZ1

//* https://stackoverflow.com/questions/35762351/correct-way-to-handle-conditional-styling-in-react

import { useState } from "react";
import './PeepRepliesComp.css'
import PeepReplyForm from "./PeepReplyForm.jsx";

const PeepRepliesComp = ({ peepObj, getThePeeps, loggedIn }) => {

    const [visible, setVisible] = useState([false]);

    const toggleVisability = () => {
        setVisible(visible === false ? true : false)
    }

    //TODO: showing replies and posting replies could be styled nice - probably not enough time 

    return (
        <div className="replyWrapper" >
            {peepObj.peepReplies.length > 0 && <button onClick={toggleVisability}>Show Replies({peepObj.peepReplies.length})</button>}
            {peepObj.peepReplies.map(rep => (
                <div className={!visible ? 'replyPeep' : null} key={rep._id}>
                    {!visible && <h6>@{rep.userName} - {rep.peepDate}</h6>}
                    {!visible && <p>{rep.peepContent}</p>}
                </div>
            ))}{loggedIn[0] && <div className="postRepButton">
                <PeepReplyForm peepObj={peepObj} getThePeeps={getThePeeps}></PeepReplyForm>
            </div>
            }
        </div>
    )
}

export default PeepRepliesComp;
