import Header from './Header'
import Footer from './Footer'
import PropTypes from 'prop-types';
import Peep from './Peep';
import './AllPeeps.css'


function AllPeeps({ peeps }) {
    // let peepArray = [];
    // peeps.forEach(e => {
    //     peepArray.push(e)
    // });
    // console.log(peeps);
    return (
        <>
            <div className='allPeepStyle'>
                <Header></Header>
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