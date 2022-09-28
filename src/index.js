import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './views/Home';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/users',
    element: <div>Helllo</div>
  },
  {
    path: '/users/register',
    element: <div>Shit</div>
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
