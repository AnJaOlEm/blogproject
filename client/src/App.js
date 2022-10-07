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

import React, { useContext } from 'react';
import { AuthContext } from "./context";


function App() {

  const { currentUser, login, setCurrentUser } = useContext(AuthContext);



  let user = localStorage.getItem("user")
  //user ? console.log(user, " this is user") : console.log("user is empty")


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
      path: "/readmore/:id",
      element: <ReadMoreBlog />
    },

  ]);

  useEffect(() => {
    let user = localStorage.getItem("user")
    if (user) setCurrentUser(JSON.parse(user))
  }, [])



  return (

    <div>

      <RouterProvider router={router} />

    </div>

  );
}

export default App;
