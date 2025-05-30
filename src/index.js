import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import RouteReducer from './components/reducers/RouteReducer';

const store=createStore(RouteReducer)
localStorage.setItem("name", null)
localStorage.setItem("role", 0)
const root = ReactDOM.createRoot(document.getElementById('root'));
const customer = ()=> root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
customer();
store.subscribe(customer);// when new state value changes , then customer will rerender and get new store value



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
