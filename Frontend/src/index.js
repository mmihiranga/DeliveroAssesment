import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import menusReducer from './redux/Menus'
import userReducer from './redux/Users'

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({
  reducer: {
    menus: menusReducer,
    user: userReducer,
  }
})

root.render(
  <BrowserRouter>
    <Provider store={store} >
      <App />
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
