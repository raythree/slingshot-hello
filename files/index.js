import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './routes';
import configureStore from './store/configureStore';

require('es6-promise').polyfill(); // This is only needed for ie 11 (not edge)
require('./favicon.ico');
import './styles/styles.scss';

// bootstrap needs jquery available globally
//window.jQuery = window.$ =  require('jquery/dist/jquery.min');
require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/css/bootstrap-theme.min.css');
//require('bootstrap/dist/js/bootstrap.min.js');

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>, document.getElementById('app')
);
