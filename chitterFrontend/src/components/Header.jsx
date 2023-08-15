import logo from '../assets/chitter.png'
import './Header.css'
import { useNavigate } from 'react-router';

// TODO: change functionality for login button to depend on the state of logged in

const Header = ({ loggedIn }) => {
    const navigator = useNavigate();

    return (
        <div className='headerMain'>
            <img src={logo} className='logoImg' alt="" onClick={() => navigator('/home')} />
            <h1 className='headerMain' onClick={() => navigator('/home')}>Chitter</h1>

            {!loggedIn[0] ?
                <h5 className='loginText' onClick={() => navigator('/login')}>Login | Signup</h5>
                : <h5 className='loginText' onClick={() => navigator('/home')}>Logout</h5>
            }
        </div >

    )
}

export default Header
