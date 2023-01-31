import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import About from './components/About';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import { Layout } from './components/Layout';
import NotFound from './components/NotFound';
import reportWebVitals from './reportWebVitals';


const container = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


container.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
