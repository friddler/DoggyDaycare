/* eslint-disable react/no-unescaped-entities */
import "../styles/About.css";
import DogBackground from "../assets/homeb.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <img src={DogBackground} alt="DoggyDaycare" />
      </div>
      <div className="about-content">
        <h1>About DoggyDaycare</h1>
        <p>
          Welcome to DoggyDaycare, a haven for your furry friends. Here, every
          dog is treated with the utmost love, care, and attention.
        </p>

        <h3>Our Story</h3>
        <p>
          Founded by Frida Nilsson, DoggyDaycare started as a passion project to
          provide a safe, playful, and nurturing environment for dogs. Frida's
          vision was to create a place where every dog felt at home, while their
          owners could have peace of mind knowing their beloved pets were in
          good hands.
        </p>

        <h3>Our Mission</h3>
        <p>
          Our goal is to provide top-tier care for dogs, fostering an
          environment where they can socialize, learn, play, and relax.
        </p>

        <h3>Opening Hours</h3>
        <p>
          We are open Monday to Friday, from 8am to 6pm. Weekends are reserved
          for special dog events and training sessions.
        </p>
      </div>
    </div>
  );
};

export default About;
