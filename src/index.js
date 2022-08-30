import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {legacy_createStore} from 'redux';
import rootReducer from './reducer';

const store = legacy_createStore(rootReducer);
console.log("state: ",store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App store = {store}/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
