import { connect } from 'react-redux'
import { List } from './list.component'

const mapStateToProps = (state) => {
  return {
    search: state.search,
    filter: state.filter,
    list: state.saveStarshipsData
  }
};

const ListContainer = connect(
  mapStateToProps
)(List);

export default ListContainer
