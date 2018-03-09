import React, { Component } from 'react';

import Search from "./search/search.component";
import FilterContainer from "./filter/filter.container";
import saveStarshipsData from './starships-library.action';
import ListContainer from './list/list.container';

class StarshipsLibrary extends Component {
  url = 'https://swapi.co/api/starships/';

  loadStarships () {
    fetch(this.url)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.props.dispatch(saveStarshipsData(data.results));
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount () {
    this.loadStarships();
  }

  render () {
    return (
      <div className="columns">
        <div className="column is-2">
          FILTERS
          <br/>
          <Search />
          <br/>
          <FilterContainer />
        </div>

        <div className="column">
          <ListContainer />
        </div>
      </div>
    );
  }
}

export default StarshipsLibrary;
