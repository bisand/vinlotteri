import React, { Component } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import LayoutAdmin from './components/LayoutAdmin';
import { LayoutMain } from './components/LayoutMain';
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
        element: <LayoutMain />,
        path: "/",
        children: [
          {
            index: true,
            element: <Home />,
            errorElement: <ErrorPage />,
          },
          {
            path: "about",
            element: <About />,
            errorElement: <ErrorPage />,
          },
          {
            path: "contact",
            element: <Contact />,
            errorElement: <ErrorPage />,
          },
          {
            path: "*",
            element: <NotFound />,
            errorElement: <ErrorPage />,
          },
        ]
      },
      {
        element: <LayoutAdmin />,
        path: "/admin",
        children: [
          {
            index: true,
            element: <Home />,
            errorElement: <ErrorPage />,
          },
          {
            path: "about",
            element: <About />,
            errorElement: <ErrorPage />,
          },
          {
            path: "contact",
            element: <Contact />,
            errorElement: <ErrorPage />,
          },
          {
            path: "*",
            element: <NotFound />,
            errorElement: <ErrorPage />,
          },
        ]
      }
    ]);

    return (
      <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
      </React.StrictMode>
    );
  }
}
