import React             from 'react';
import withAuthorization from 'shared/components/with-authorization/with-authorization.component';

const Home = () => (
  <section>
    <h2>Home</h2>
  </section>
);

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Home);
