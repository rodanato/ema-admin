import React             from 'react';
import withAuthorization from 'shared/components/with-authorization/with-authorization.component';
import {compose}         from "recompose";
import PageTitle         from 'shared/components/page-title/page-title.component'


const Home = () => (
  <div className={'columns is-multiline'}>
    <div className="column is-12 reservations__header">
      <div className="container">
        <PageTitle title={'Manejo de reservas'}/>
      </div>
    </div>

    <div className="column is-4">
      <section className="section">

      </section>
    </div>
    <div className="column is-8">
      <section className="section">

      </section>
    </div>
  </div>
);

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
)(Home);
