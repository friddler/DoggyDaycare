/* eslint-disable react/no-unescaped-entities */
import "../styles/Contact.css";
import { useState } from "react";
import DogVideo from "../assets/dogcontact.mp4";

function Contact() {
  const [formSubmit, setFormSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormSubmit(true);
  };

  return (
    <div className="contact">
      <div className="video-container">
          <video autoPlay muted>
            <source src={DogVideo} type="video/mp4" />
          </video>
        </div>
      <div className="form-container">
        {formSubmit ? (
          <div className="submitted-text">
            <h1>Thank you!</h1>
            <p>Thanks for reaching out. We'll respond as soon as we can.</p>
          </div>
        ) : (
          <>
            <h1>Contact Us</h1>
            <h3>We'd love to hear from you!</h3>
            <p>
              If you have any questions about our services, want to book a stay
              for your furry friend, or just want to say hello, don't hesitate
              to get in touch. Fill out the form below, and we'll get back to
              you as soon as we can.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="input-texts">
                <input type="text" placeholder="Full name:" />
                <input type="text" placeholder="Email Address:" />
                <input type="text" placeholder="Phone Number:" />
                <input type="text" placeholder="Dog's Name:" />
              </div>
              <textarea placeholder="Message:" rows="4"></textarea>
              <button type="submit">Submit</button>
            </form>
          </>
        )}
        <h3>For immiediate assistance or to book a stay, give us a call.</h3>
        <p>0761836562</p>
        <h3>Want to visit us? Here's where you can find our daycare.</h3>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2090.8244528858822!2d15.66088809999999!3d58.396359999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46596eea42df8e2b%3A0xe3d319cdb0d3c5aa!2sSkogslyckegatan%2010%2C%20587%2026%20Link%C3%B6ping!5e0!3m2!1sen!2sse!4v1696440331648!5m2!1sen!2sse"
            width="700"
            height="250"
            style={{ border: "0" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <p>Skogslyckegatan 10, 58726, Linköping</p>
      </div>
    </div>
  );
}

export default Contact;
