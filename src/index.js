/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import WeatherWidget from './components/WeatherWidget';

import './css/index.css';


ReactDOM.render(
  <Provider store={store}>
    <WeatherWidget />
  </Provider>,
  document.getElementById('root'),
);
