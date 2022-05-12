import reportWebVitals from './reportWebVitals';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Store from "./Redux/StoreRedux";
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';



    ReactDOM.render(
      <BrowserRouter>
    <Provider store={Store}>
    <App />
    </Provider>
      </BrowserRouter>,
    document.getElementById('root')
  );


reportWebVitals()


