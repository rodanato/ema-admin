import { connect } from 'react-redux'
import StarshipsLibrary from './starships-library.component'

const StarshipsLibraryContainer = connect(dispatch => dispatch)(StarshipsLibrary);

export default StarshipsLibraryContainer;
