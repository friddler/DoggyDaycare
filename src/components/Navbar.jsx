import Logo from '../assets/bluelonglogo.png'
import '../styles/Navbar.css'
import {Link} from 'react-router-dom'


function Navbar() {
  return (
    <div className='navbar'>
        <img src={Logo} alt="Logo"/>
        <Link to='/'>Home</Link>
            <Link to='/catalog'>Catalog</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
    </div>
  )
}

export default Navbar
