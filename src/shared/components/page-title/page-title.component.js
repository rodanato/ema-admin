import React from 'react';
import './page-title.component.css';

const PageTitle = (props) => (
  <div className={'page-title'}>
    <img src={process.env.PUBLIC_URL + '/images/loading-logo.svg'}
         className={'page-title__icon'}/>
    <h1 className={'page-title__text'}>{props.title}</h1>
  </div>
);

export default PageTitle;
