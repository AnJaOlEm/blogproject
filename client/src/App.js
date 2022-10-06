import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from './views/Home';
import Register from './views/Register';
import Login from './views/Login';
import ListUsers from "./views/ListUsers"
import Blog from "./views/Blog";
import { useState, useEffect } from "react";
import { Addpost } from "./views/Addpost";
import { ReadMoreBlog } from "./views/ReadMoreBlog";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/users",
      element: <ListUsers />
    },
    {
      path: "/blogs",
      element: <Blog />
    },
    {
      path: "/addpost",
      element: <Addpost />
    },
    {
      path: "/readmore:id",
      element: <ReadMoreBlog />
    }

  ]);



  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
