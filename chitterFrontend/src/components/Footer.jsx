import './Footer.css'
import gitHubLogo from '../assets/gitHubLogo.png'

const Footer = () => {

    return (
        <div className='footerMain' >
            <h3 className='footerHead' >
                &copy; Chitter - Digital Futures - Alex A -
            </h3>
            <a className='imgAnchor' href='https://github.com/alx-askw/chitter-challenge/tree/main' rel="noreferrer" target='_blank'>
                <img className='gitHubImg' src={gitHubLogo} alt='Link to github page for this project' />
            </a>
        </div >
    )
}

export default Footer