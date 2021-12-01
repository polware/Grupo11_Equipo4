import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import Axios from 'axios';

//Axios.defaults.baseURL = 'http://localhost:4000'
Axios.defaults.baseURL = 'https://app-backend-chaside.herokuapp.com'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
