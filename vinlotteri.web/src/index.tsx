import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter, Route, Router } from 'react-router-dom';

const root_header = ReactDOM.createRoot(
  document.getElementById('root_header') as HTMLElement
);
root_header.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  </React.StrictMode>
);
const root_main = ReactDOM.createRoot(
  document.getElementById('root_main') as HTMLElement
);
root_main.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
const root_footer = ReactDOM.createRoot(
  document.getElementById('root_footer') as HTMLElement
);
root_footer.render(
  <React.StrictMode>
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
