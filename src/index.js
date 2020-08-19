import React from 'react';
import ReactDOM from 'react-dom';
import  { Provider } from 'react-redux';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';

import App from './components/app/App';

import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);