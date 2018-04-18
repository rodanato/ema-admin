import React             from 'react';
import withAuthorization from 'shared/components/with-authorization/with-authorization.component';
import {compose}         from "recompose";
import PageTitle         from 'shared/components/page-title/page-title.component'
import ReservationsTable from './reservations-table/reservations-table.component';
import './reservations.component.css';

const Home = () => (
  <div>
    <div className={'columns'}>
      <div className="column is-12 reservations__header">
        <PageTitle title={'Manejo de reservas'}/>
      </div>
    </div>

    <div className=''>
      <div className="container">
        <div className="columns">
          <div className="column is-4">
            <section className="section">
            </section>
          </div>
          <div className="column is-8">
            <section className="section">
              <ReservationsTable/>
            </section>
          </div>
        </div>
      </div>
    </div>

  </div>
);

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
)(Home);
