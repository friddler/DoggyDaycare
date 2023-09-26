import '../styles/Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon className='icon'/>
            <FacebookIcon className='icon'/>
            <TwitterIcon className='icon'/>
        </div>
        <p>&copy; 2023 doggydaycare.com</p>
      
    </div>
  )
}

export default Footer
