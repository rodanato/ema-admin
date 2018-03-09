import React, { Component } from 'react';
import { connect } from 'react-redux'
import search from './search.action';

class Search extends Component {
  searchValue = '';

  render () {
    return (
      <form>
        By name:
        <input type="text"
               onKeyUp={() => {
                 this.props.dispatch(search(this.searchValue.value));
               }}
               ref={node => this.searchValue = node}/>
      </form>
    );
  }
}

Search = connect(dispatch => dispatch)(Search);

export default Search;
