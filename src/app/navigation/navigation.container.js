import { connect } from 'react-redux';

import Navigation from './navigation.component';

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

export default connect(mapStateToProps)(Navigation);
