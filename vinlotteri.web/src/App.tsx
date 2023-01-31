import React, { Component, Suspense } from 'react';
import { Link, BrowserRouter as Router, Route, Routes, createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import { Layout } from './components/Layout';
import NotFound from './components/NotFound';

export default class App extends Component {
  static displayName = App.name;

  constructor(props: Record<string, unknown>) {
    super(props);
    this.state = { symbol: '' };
  }

  render() {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage />,
      },
      {
        path: "*",
        element: <NotFound />,
        errorElement: <ErrorPage />,
      },
    ]);

    return (
      <React.StrictMode>
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </React.StrictMode>
    );
  }
}
