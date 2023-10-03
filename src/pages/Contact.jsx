import "../styles/Contact.css";
import DogVideo from '../assets/dogvideo.mp4'

function Contact() {
  return (
    <div className="contact">
     <div className='video-container'>
      <video autoPlay loop muted>
        <source src={DogVideo} type="video/mp4"/>
      </video>
     </div>
    </div>
  )
}

export default Contact;
