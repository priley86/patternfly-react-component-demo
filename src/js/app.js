'use strict';

require('script!../../node_modules/patternfly/node_modules/c3/c3.min');
require('script!../../node_modules/patternfly/node_modules/d3/d3.min');

import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/AppRoutes';

window.onload = () => {
  ReactDOM.render(<AppRoutes/>, document.body);
};
