import { connect } from 'react-redux';
import {compose}         from "recompose";

import Home         from './home.component';
import {withRouter} from "react-router-dom";

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});



export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Home);
