import Logo from '../assets/logo1.png'
import '../styles/Navbar.css'
import {Link, useLocation} from 'react-router-dom'


function Navbar() {

  const location = useLocation()

  return (
    <div className='navbar'>
        <div className='logo-left'>
            <Link to='/' className='logo-link'>
        <img src={Logo} alt="Logo"/>
        </Link>
        </div>
        <div className='nav-links'>
        <Link to='/' className={location.pathname === '/' ? 'active-link' : ''}>HOME</Link>
        <Link to='/catalog' className={location.pathname === '/catalog' ? 'active-link' : ''}>CATALOG</Link>
        <Link to='/contact' className={location.pathname === '/contact' ? 'active-link' : ''}>CONTACT</Link>
            </div>
    </div>
  )
}

export default Navbar
