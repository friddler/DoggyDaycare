import HomeImage from '../assets/homeb.png'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${HomeImage})`}}>
        <div className='headerContainer'>
            <p>Welcome To</p>
            <h1>Doggy Daycare</h1>
            <p>Caring for Dogs, One Tail at a Time.</p>
            <button>Our Dogs</button>
        </div>
    </div>
  )
}

export default Home
