import React from 'react';

import './starship.component.css'

let loadFilm = (films) => {
  return (
    films.map((f, k) => {
      return (
        <span key={k}>
          {f.slice(-2)}
        </span>
      );
    })
  );
};

let Starship = ({starship}) => {
  return (
    <li className="columns primary-color">
      <span className="column">
        {starship.name}
      </span>
      <span className="column">
        {starship.cost_in_credits}
      </span>
      <span className="column">
        {loadFilm(starship.films)}
      </span>
    </li>
  );
};

export default Starship;

