import Header from './Header'
import Footer from './Footer'
import PropTypes from 'prop-types';
import Peep from './Peep';
import './AllPeeps.css'
import PostPeepComp from './PostPeepComp';


function AllPeeps({ peeps, loggedIn, logOutUser, getThePeeps }) {
    // let peepArray = [];
    // peeps.forEach(e => {
    //     peepArray.push(e)
    // });
    // console.log(peeps);
    return (
        <>
            <div className='allPeepStyle'>

                <Header loggedIn={loggedIn} logOutUser={logOutUser}></Header>
                {loggedIn[0] ? <PostPeepComp getThePeeps={getThePeeps}></PostPeepComp> : <h1>Log In to Peep</h1>}
                <br></br>
                <Peep peeps={peeps}></Peep>
                <br></br>
                <Footer></Footer>
            </div>
        </>
    )
}

// AllPeeps.propTypes = {
//     peeps: PropTypes.shape({
//         userName: PropTypes.string.isRequired,
//         peepDate: PropTypes.string.isRequired,
//         peepContent: PropTypes.string.isRequired,
//         //TODO: Add peep replies here when you get there
//     })
// }

export default AllPeeps
