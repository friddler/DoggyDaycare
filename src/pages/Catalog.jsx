import { useState, useEffect } from "react";
import "../styles/Catalog.css";
import { useNavigate } from "react-router-dom";

function Catalog() {
  const [dogs, setDogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  /*navigerar till detail-komponenten. tar in 'dog' som argument,
  skickar med hela hundobjektet som en state
  */
  const goToDogDetail = (dog) => {
    navigate(`/catalog/${dog.name}`, {state: {dog}});
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.jsonbin.io/v3/b/651e764012a5d37659877b73"
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

    fetchData();
  }, []);

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
              onClick={() => goToDogDetail(dog)}
            >
              <div className="dogImageWrapper">
                <img src={dog.img} alt={dog.name} />
              </div>
              <h1>{dog.name}</h1>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Catalog;
