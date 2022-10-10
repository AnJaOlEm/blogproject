import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';
import styles from '../css//Header.css';
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';



export const Header = () => {

    const { login, setCurrentUser, currentUser } = useContext(AuthContext);
    let user = '';
    if (currentUser) { user = currentUser };

    async function logoutUser() {
        localStorage.clear()
        setCurrentUser(null);
    }


    return (
        <div className='header'>
            <Sidebar />
            <Link className='blogname' to={'/'}>BLOGG</Link>

            <div className='container'>
                <div className='kategorieBlock'>
                </div>
                <div className='searchLoginBlock'>
                    <SearchBar />
                    {currentUser ? <div>
                        <Link className='loginButton' onClick={logoutUser}>Logout {user.username}</Link>
                        <Link className='loginButton' to={"/addpost"}>Add post {user.username}</Link>
                    </div> :
                    <div>
                    <Link className='loginButton' to={'/login'}>Login</Link>
                    <Link className='loginButton' to={'/register'}>New user</Link>
                    </div>}
                   
                        
                </div>
            </div>
        </div>
    );
};