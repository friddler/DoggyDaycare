import { useState, useEffect } from "react";
import "../styles/Catalog.css";

function Catalog() {
  const [dogs, setDogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDog, setSelectedDog] = useState(null);

  const toggleDog = (dog) => {
    if (selectedDog === dog) {
      setSelectedDog(null);
    } else {
      setSelectedDog(dog);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.jsonbin.io/v3/b/650a7ebece39bb6dce7f5683"
      );

      if (!response.ok) {
        throw Error("Doesn't work");
      }

      const data = await response.json();
      setDogs(data.record);
      setIsLoading(false);
    } catch (error) {
      console.error("FEL FEL FEL", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="catalog">
      <h1 className="catalogTitle">Our Dogs</h1>
      <div className="catalogList">
        {isLoading ? (
          <h1 className="errorText">Loading dogs...</h1>
        ) : dogs.length === 0 ? (
          <h1 className="errorText">No dogs found &#128546;</h1>
        ) : (
          dogs.map((dog) => (
            <div
              key={dog.chipNumber}
              className="dog"
              onClick={() => toggleDog(dog)}
            >
              <img src={dog.img} alt={dog.name} />
              <h1>{dog.name}</h1>
              {selectedDog === dog && (
                <div className="dogDetails">
                  <p>Breed: {dog.breed}</p>
                  <p>Age: {dog.age}</p>
                  <p>Sex: {dog.sex}</p>
                  <p>Present: {dog.present ? "yes" : "no"}</p>
                  <p>Owner: {dog.owner.name}</p>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Catalog;
