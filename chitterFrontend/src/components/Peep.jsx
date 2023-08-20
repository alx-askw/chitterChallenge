import './Peep.css'
import PeepRepliesComp from './PeepRepliesComp.jsx';
import PropTypes from 'prop-types';


const Peep = ({ peeps, getThePeeps, loggedIn }) => {

    let peepArray = [];
    peeps.forEach(e => {
        peepArray.push(e)
    })

    // TODO: VERY IMPORTANT - it might be worth ordering them by date not by order in database - because the order could change?
    peepArray.reverse();

    //! for some reason that I don't have the time currently to find out, the username and name have to be backwards
    //! so username@name displays name@username on site
    return (
        <div >
            {peepArray.map(peepObj => (
                <div key={peepObj._id} className="rounded peepDiv">
                    <div className='peepHead'>
                        <h5 className='peepUserName'>
                            {peepObj.userName}@{peepObj.name}
                        </h5>
                        <h6 className='peepDate'>
                            {peepObj.peepDate}
                        </h6>
                    </div>
                    <p>
                        {peepObj.peepContent}
                    </p>
                    {<PeepRepliesComp peepObj={peepObj} getThePeeps={getThePeeps} loggedIn={loggedIn}></PeepRepliesComp>}
                </div>
            ))}
        </div>
    )
}

Peep.propTypes = {
    peeps: PropTypes.arrayOf(
        PropTypes.shape({
            userName: PropTypes.string.isRequired,
            peepDate: PropTypes.string.isRequired,
            peepContent: PropTypes.string.isRequired,
            //TODO: Add peep replies here when you get there
        })),
    // loggedIn: PropTypes.string.isRequired, //im passing down the index of the above array
    getThePeeps: PropTypes.func.isRequired
}

export default Peep
