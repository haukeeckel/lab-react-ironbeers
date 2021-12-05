import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function BeerList() {
  const [beers, setBeers] = useState(null);

  useEffect(() => {
    (async () => {
      let { data } = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers'
      );
      setBeers(data);
    })();
  }, []);

  if (!beers) {
    return <p>Serving Beer</p>;
  }

  return (
    <>
      {beers.map((elem, i) => {
        return (
          <div>
            <Link to={`/beers/${elem._id}`} key={i}>
              <img src={elem.image_url} alt="" />
              <h2>{elem.name}</h2>
            </Link>
            <p>{elem.tagline}</p>
            <p>{elem.contributed_by}</p>
          </div>
        );
      })}
    </>
  );
}

export default BeerList;
