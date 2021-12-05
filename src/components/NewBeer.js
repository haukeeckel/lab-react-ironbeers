import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function NewBeer() {
  const navigate = useNavigate();
  const prostBeer = async (e) => {
    e.preventDefault();

    let {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    } = e.target;

    let newbeer = {
      name: name.value,
      tagline: tagline.value,
      description: description.value,
      first_brewed: first_brewed.value,
      brewers_tips: brewers_tips.value,
      attenuation_level: attenuation_level.value,
      contributed_by: contributed_by.value,
    };

    await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newbeer);

    navigate('/');
  };

  return (
    <form onSubmit={prostBeer}>
      <label htmlFor="name" />
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Name of the barley juice"
      />
      <label htmlFor="tagline" />
      <input
        id="tagline"
        name="tagline"
        type="text"
        placeholder="Tagline of the barley juice"
      />
      <label htmlFor="description" />
      <input
        id="description"
        name="description"
        type="textbox"
        placeholder="Description of the barley juice"
      />
      <label htmlFor="first_brewed" />
      <input
        id="first_brewed"
        name="first_brewed"
        type="text"
        placeholder="Birthdate of the barley juice"
      />
      <label htmlFor="brewers_tips" />
      <input
        id="brewers_tips"
        name="brewers_tips"
        type="text"
        placeholder="Finest Tips"
      />
      <label htmlFor="attenuation_level" />
      <input
        id="attenuation_level"
        name="attenuation_level"
        type="number"
        placeholder="Attenuation level of the barley juice"
      />
      <label htmlFor="contributed_by" />
      <input
        id="contributed_by"
        name="contributed_by"
        type="text"
        placeholder="Contributed of the barley juice"
      />
      <button type="submit">Cheers</button>
    </form>
  );
}

export default NewBeer;
