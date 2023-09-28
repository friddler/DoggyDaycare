import { useState, useEffect } from 'react';
import '../styles/Catalog.css'

function Catalog() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch('https://api.jsonbin.io/v3/b/650a7ebece39bb6dce7f5683')
      .then((response) => response.json())
      .then((data) => {
        setDogs(data.record);
      })
      .catch((error) => {
        console.error('FEL FEL FEL', error);
      });
  }, []);

  return (
    <div className='catalog'>
      <h1 className='catalogTitle'>Our Dogs</h1>
      <div className='catalogList'>
        {dogs.map((dog) => (
          <div key={dog.chipNumber} className='dog'>
            <img src={dog.img} alt={dog.name} />
            <h1>{dog.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
