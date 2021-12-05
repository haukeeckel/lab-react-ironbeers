import { Link } from 'react-router-dom';
import React from 'react';
import LinkContainer from './LinkContainer';

function BeerLinks() {
  let content = {
    beers: {
      img: '/images/beers.png',
      heading: 'All Beers',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae sint officiis est quas reprehenderit iure quasi esse!',
    },
    randomBeer: {
      img: '/images/random-beer.png',
      heading: 'Random Beer',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae sint officiis est quas reprehenderit iure quasi esse!',
    },
    newBeer: {
      img: '/images/new-beer.png',
      heading: 'New Beer',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae sint officiis est quas reprehenderit iure quasi esse!',
    },
  };
  return (
    <div>
      <Link to="/beers">
        <LinkContainer content={content.beers} />
      </Link>
      <Link to="/random-beer">
        <LinkContainer content={content.randomBeer} />
      </Link>
      <Link to="/new-beer">
        <LinkContainer content={content.newBeer} />
      </Link>
    </div>
  );
}

export default BeerLinks;
