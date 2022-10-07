import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from "react-router-dom";
import styles from '../css/sidebar.css';


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


    </Menu>
  );
};

export default Sidebar;