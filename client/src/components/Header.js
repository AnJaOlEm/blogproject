import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css//Header.css';
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';


export const Header = () => {

    return (
        <div className='header'>
            <Sidebar />
            <Link className='blogname' to={'/'}>BLOGG</Link>
            <div className='container'>
                <div className='kategorieBlock'>
                </div>
                <div className='searchLoginBlock'>
                    <SearchBar />
                    <Link className='loginButton' to={'/login'}>Add post</Link>
                </div>
            </div>
        </div>
    );
};