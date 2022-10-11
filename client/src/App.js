import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './views/Home';
import Register from './views/Register';
import Login from './views/Login';
import ListUsers from "./views/ListUsers"
import Blog from "./views/Blog";
import { useEffect } from "react";
import { Addpost } from "./views/Addpost";
import { ReadMoreBlog } from "./views/ReadMoreBlog";
import React, { useContext } from 'react';
import { AuthContext } from "./context";
import { Bg } from "./components/Bg";




function App() {

  const { setCurrentUser } = useContext(AuthContext);



  let user = localStorage.getItem("user")


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
     <Bg/>
       <RouterProvider router={router} />
     </div>
   
  );
}

export default App;
