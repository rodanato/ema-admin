import React             from 'react';
import withAuthorization from 'shared/components/with-authorization/with-authorization.component';
import {compose}         from "recompose";

const Home = () => (
  <section>
    <h2>Home</h2>
  </section>
);

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
)(Home);
