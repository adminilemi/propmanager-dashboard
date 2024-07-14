import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'animate.css';
import 'react-loading-skeleton/dist/skeleton.css';
import 'react-datepicker/dist/react-datepicker.css';
import './global.css';
import store from './Redux/Stores/store.js';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <Toaster position='top-center' />
      <App />
    </React.StrictMode>
  </Provider>,
);
