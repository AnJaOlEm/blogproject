import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { AuthContext } from '../context';
import ReadMoreBtn from '../components/ReadMoreBtn';
import { Header } from '../components/Header';
import PostsHomePage from '../components/PostsHomePage';
import styles from '../css/Home.css';
import Post from '../components/Post';



const Home = () => {

    const [blogPosts, setBlogPosts] = useState([]);
    const { currentUser, login } = useContext(AuthContext);
    const [authorId, setAuthorId] = useState()



    useEffect(() => {
        getAllBlogPosts().then(res => setBlogPosts(res.rows))
        //getAuthor()
    }, [])


    async function getAllBlogPosts() {
        let res = await fetch("http://localhost:8000/api/blog/all")
        return res.json();
    }

    // async function getAuthor(post) {




    //     console.log(post, "<<--- id -----> posts", blogPosts, "----> curruser ", currentUser)

    //     let getAuthorName = await fetch("http://localhost:8000/api/users/getuser/" + post.user_id)
    //         .then(res => res.json())
    //         .then(data => console.log(data, " what is here?"))
    // }


    // const listPosts = blogPosts.map((post, i) => {
    //     return (<li key={i}><PostsHomePage blog={post} /></li>)
    // })





    //console.log(blogPosts, " tho s o s ")


    // const getLocalStorage = localStorage.getItem('jwt');
    //console.log(getLocalStorage, " <-----------------")
    const navigate = useNavigate();

    //if (getLocalStorage) 

    const handleNav = () => {
        navigate("/login")
    }

    console.log(authorId, " authoid")

    return (

        <>
            < Header />
            {blogPosts.length > 0 ? blogPosts.map((post, i) => (
                console.log(post, "       i --->", i, " this is post"),
                <div key={i}>
                    <Post post={post} />
                </div>
            )) : <div>No posts found</div>
            }
        </>
    );
}

export default Home;