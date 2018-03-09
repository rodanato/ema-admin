import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './index.css'

import store from './app/store';
import AppRouter from './app/router';

const container = document.getElementById('root');

render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  container
);
