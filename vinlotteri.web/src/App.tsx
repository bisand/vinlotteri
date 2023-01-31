import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <React.StrictMode>
      <header id="root_header">
        <h1>Vinlotteri</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/blog">Blog</a>
          <a href="/notes">Notes</a>
          <a href="/guestbook">Guestbook</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <main id="root_main">
        <p>This is my new website and it's using Simple.css. It's really cool. If you want to use it too, you can <a href="https://simplecss.org">visit their site</a>.</p>
      </main>

      <footer id="root_footer">
        <p>Vinlotteri.com</p>
      </footer>
    </React.StrictMode>
  );
}

export default App;
