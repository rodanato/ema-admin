import React, { Component } from 'react';
import filter from './filter.action';
import PropTypes from 'prop-types';

class Filter extends Component {
  formatFilmList (films) {
    return (
      films.map(f => {
        return f.slice(-2);
      })
    );
  }

  loadStarshipsFilter (list) {
    return list.map((starship, i)=> {
      let filmValue = this.formatFilmList(starship.films);

      return (
          <option key={i}
                  value={filmValue}>
            {filmValue}
          </option>
      );
    })
  }

  render () {
    return (
      <div>
        By film:

        <select onChange={(event) => {
                  this.props.dispatch(filter(event.target.value));
                }}>
          {this.loadStarshipsFilter(this.props.list || [])}
          {/*<option value="1/2/3/4/5/6/7">-</option>*/}
        </select>
      </div>
    );
  }
};

Filter.propTypes = {
  filmValue: PropTypes.string
};

export default Filter;
