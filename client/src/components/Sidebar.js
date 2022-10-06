import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from "react-router-dom";
import '../css/sidebar.css';


const Sidebar = () => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Hem
      </a>

      <a className="menu-item" href="./register">
        Regristrera användare
      </a>

      <Link to={'/login'}>Logga in</Link>

      <a className="menu-item" href="./Blogpost.js">
        Annat exempel
      </a>
    </Menu>
  );
};

export default Sidebar;