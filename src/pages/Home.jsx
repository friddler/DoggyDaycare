import DogVideo from "../assets/dogvideo.mp4";
import "../styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home">
        <div className="video-container">
          <video autoPlay loop muted>
            <source src={DogVideo} type="video/mp4" />
          </video>
        </div>
        <div className="welcomeContainer">
          <h2>Welcome To</h2>
          <h1>Doggy Daycare</h1>
          <p>Caring for Dogs, One Tail at a Time.</p>
          <Link to="/catalog">
            <button>Our dogs</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
