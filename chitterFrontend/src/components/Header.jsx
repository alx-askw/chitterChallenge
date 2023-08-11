import logo from '../assets/chitter.png'
import './Header.css'

const Header = () => {

    return (
        <div className='headerMain'>
            <img src={logo} className='logoImg' alt="" />
            <h1 className='headerMain'>Chitter</h1>
        </div >
    )
}

export default Header
