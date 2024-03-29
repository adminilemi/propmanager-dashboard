import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'react-loading-skeleton/dist/skeleton.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';
import store from './Redux/Stores/store.js';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
);
