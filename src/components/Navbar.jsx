import Logo from '../assets/bluelonglogo.png'
import '../styles/Navbar.css'
import {Link} from 'react-router-dom'


function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo-left'>
            <Link to='/' className='logo-link'>
        <img src={Logo} alt="Logo"/>
        </Link>
        </div>
        <div className='nav-links'>
        <Link to='/'>Home</Link>
            <Link to='/catalog'>Catalog</Link>
            <Link to='/contact'>Contact</Link>
            </div>
    </div>
  )
}

export default Navbar
