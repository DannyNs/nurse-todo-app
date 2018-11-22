import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import tasksStore from './stores/TaskStore';

import 'bootstrap/scss/bootstrap-reboot.scss';
import './index.scss';

ReactDOM.render(
  <App title="Nurse Todo App" tasksStore={tasksStore} />,
  document.getElementById('root'),
);
