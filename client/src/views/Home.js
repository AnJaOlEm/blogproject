import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { AuthContext } from '../context';
import { Header } from '../components/Header';
import PostsHomePage from '../components/PostsHomePage';
import styles from '../css/Home.css';
import Post from '../components/Post';



const Home = () => {

    const [blogPosts, setBlogPosts] = useState([]);


    useEffect(() => {
        getAllBlogPosts().then(res => setBlogPosts(res.rows))

    }, [])

    async function getAllBlogPosts() {
        let res = await fetch("http://localhost:8000/api/blog/all")
        return res.json();
    }
    const navigate = useNavigate();

    const handleNav = () => {
        navigate("/login")
    }

    return (

        <>
            < Header />
            {blogPosts.length > 0 ? blogPosts.map((post, i) => (
                <div key={i}>
                    <Post post={post} />
                </div>
            )) : <div className='no-posts'>No posts found</div>
            }
        </>
    );
}

export default Home;