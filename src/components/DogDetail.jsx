import "../styles/DogDetail.css";
import { useLocation } from "react-router-dom";

const DogDetail = () => {

  /* location innehåller informationen om urlen,
  location.state.dog hämtar hela hundobjektet som skickades
   med från catalogen som state */

  const location = useLocation();
  const dog = location.state.dog;

  return (
    <div className="dogDetail">
        <div className="dog-container">
      <h1>{dog.name}</h1>
      <img src={dog.img} alt={dog.name} />
      <div className="dog-info">
      <p>Breed: {dog.breed}</p>
      <p>Age: {dog.age}</p>
      <p>Sex: {dog.sex}</p>
      <p>Present: {dog.present ? "Yes" : "No"}</p>
      <p>
        Owner: {dog.owner.name} {dog.owner.lastName}
      </p>
      <p>Phone number: {dog.owner.phoneNumber}</p>
      </div>
      </div>
    </div>
  );
};

export default DogDetail;
