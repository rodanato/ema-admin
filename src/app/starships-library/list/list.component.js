import React from 'react';
import Starship from '../starship/starship.component';

let searchWordInEachItem = (search, item) => {
  return item.includes(search.toLowerCase());
};

let formatFilmList = (films) => {
  return (
    films.map(f => {
      return f.slice(-2);
    })
  );
}

let buildList = (list, search, filter) => {
  return list
    .filter(starship => searchWordInEachItem(search, starship.name.toLowerCase()))
    .filter(starship => filter.includes(formatFilmList(starship.films)))
    .map((starshipData, i) => {
    return (
      <Starship starship={starshipData}
                key={i}/>
    );
  });
};

let List = ({list, search, filter}) => {
  return (
    <div>
      <ul>
        <li className="columns">
          <span className="column">Name</span>
          <span className="column">Price</span>
          <span className="column">Films</span>
        </li>
      </ul>
      <ul>
        {buildList(list || [], search, filter)}
      </ul>
    </div>
  );
};


export {
  searchWordInEachItem,
  List
};
