import HomeImage from "../assets/homeb.png";
import "../styles/Home.css";
import {Link} from 'react-router-dom'

function Home() {
  return (
    <>
      <div className="home" style={{ backgroundImage: `url(${HomeImage})` }}>
        <div className="welcomeContainer">
          <h2>Welcome To</h2>
          <h1>Doggy Daycare</h1>
          <p>Caring for Dogs, One Tail at a Time.</p>
          <Link to="/catalog"><button>Our dogs</button>
        </Link>
        </div>
      </div>
      <div className="aboutContainer">
        <h1>About Us</h1>
        <p>Information about website</p>
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
      </div>
    </>
  );
}

export default Home;
