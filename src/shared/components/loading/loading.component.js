import React from 'react';

const Loading = () => (
  <div className="loading">
    <div className="loading__icon-container">
      <div className="loadingCSS">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <img src={process.env.PUBLIC_URL + '/images/loading-logo.svg'}
           className={'loading__icon-logo'}
           alt='Loading logo'/>
    </div>
  </div>
);

export default Loading;
