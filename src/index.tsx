import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import history from './util/history';
import {Router} from 'react-router-dom';

ReactDOM.render(
    <Router history = {history}>
        <App />
      </Router>, document.getElementById('root'));

