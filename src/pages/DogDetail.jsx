import "../styles/DogDetail.css";
import { useLocation } from "react-router-dom";
import PhoneIcon from '@mui/icons-material/PhoneIphoneRounded';
import PersonIcon from '@mui/icons-material/Person';

const DogDetail = () => {

  /* location innehåller informationen om urlen,
  location.state.dog hämtar hela hundobjektet som skickades
   med från catalogen som state */

  const location = useLocation();
  const dog = location.state.dog;

  return (
    <div className="dogDetail">
        <div className="dog-container">
      <h1>Hi! I&apos;m {dog.name}</h1>
      <img src={dog.img} alt={dog.name} />
      <div className="dog-info">
      <p><strong>Breed:</strong> {dog.breed}</p>
      <p>I&apos;m a {dog.age}-year-old {dog.sex.toLowerCase()} dog</p>
      <p>I&apos;m currently {dog.present ? "here" : "not here right now"}</p>
      <hr />
      <p><PersonIcon className="icon-detail"/><strong>Owned by:</strong> {dog.owner.name} {dog.owner.lastName}</p>
      <p><PhoneIcon className="icon-detail"/> <strong>Reach out at:</strong> {dog.owner.phoneNumber}</p>
      </div>
      </div>
    </div>
  );
};

export default DogDetail;
