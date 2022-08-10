import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.css'
import {Provider} from 'react-redux'
import Store from './Redux/store'
import App from './App';


ReactDOM.render(
  <Provider store={Store}>
     <App />
  </Provider>,
  document.getElementById('root')
);


