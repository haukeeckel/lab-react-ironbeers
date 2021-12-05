import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BeerDetailed() {
  const { _id } = useParams();
  const [beer, setBeer] = useState(null);
  let url = 'https://ih-beers-api2.herokuapp.com/beers/random';

  if (_id) {
    url = `https://ih-beers-api2.herokuapp.com/beers/${_id}`;
  }

  useEffect(() => {
    (async () => {
      (async () => {
        let { data } = await axios.get(url);
        console.log(data);
        setBeer(data);
      })();
    })();
  }, []);

  if (!beer) {
    return <p>Serving Beer</p>;
  }

  return (
    <div>
      <img src={beer.image_url} alt="" />
      <div>
        <h2>{beer.name}</h2>
        <p>{beer.attenuation_level}</p>
      </div>
      <div>
        <p>{beer.tagline}</p>
        <p>{beer.first_brewed}</p>
      </div>
      <p>{beer.description}</p>
      <p>{beer.contributed_by}</p>
    </div>
  );
}

export default BeerDetailed;
