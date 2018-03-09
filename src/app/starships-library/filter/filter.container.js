import { connect } from 'react-redux'
import Filter from './filter.component'

const mapStateToProps = (state) => {
  return {
    list: state.saveStarshipsData
  }
};

const FilterContainer = connect(
  mapStateToProps
)(Filter);

export default FilterContainer
