import React             from 'react';
import withAuthorization from 'shared/components/with-authorization/with-authorization.component';
import {compose}         from "recompose";
import './reservations-table.component.css';

const ReservationsTable = () => (
  <table className={'reservations-table'}>
    <thead className={'reservations-table__header'}>
      <tr className={'reservations-table__header-tr'}>
        <td className={'reservations-table__header-td'}>N° de reserva</td>
        <td className={'reservations-table__header-td'}>Estado</td>
        <td className={'reservations-table__header-td'}>Cliente</td>
        <td className={'reservations-table__header-td'}>Fecha de reserva</td>
      </tr>
    </thead>
    <tbody className={'reservations-table__body'}>
      <tr className={'reservations-table__body-tr'}>
        <td className={'reservations-table__body-td'}>#454455</td>
        <td className={'reservations-table__body-td'}>En trabajo</td>
        <td className={'reservations-table__body-td'}>Maria Lopez</td>
        <td className={'reservations-table__body-td'}>07/04/2018</td>
        <td className={'reservations-table__body-td'}>
          <button className={'ema-btn--success reservations-table__btn'}>Ver detalle</button>
        </td>
      </tr>
    </tbody>
  </table>
);

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
)(ReservationsTable);
