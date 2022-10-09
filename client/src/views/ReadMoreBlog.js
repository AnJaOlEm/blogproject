import styles from '../css/ReadMoreBlog.css';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import { Header } from '../components/Header';



export const ReadMoreBlog = () => {
    //Content på sidan kommer att visas från toppen.
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [currentPost, setCurrenPost] = useState();



    const navigate = useNavigate();

    let location = useLocation();
    const { author } = location.state

    useEffect(() => {
        getBlogPost()



    }, [])

    async function getBlogPost() {
        let blogId = location.pathname.split("/")[2];
        let response = await fetch("http://localhost:8000/api/blog/" + blogId).then(res => res.json()).then(data => setCurrenPost(data)).finally()

    }

    let currentUser = JSON.parse(localStorage.getItem("user"))



    async function handelDelete() {


        if (currentUser.user_id === author.user_id) {

            await fetch("http://localhost:8000/api/blog/" + currentPost.blog_id, {
                method: 'DELETE',
            }).then(res => res.json())
                .then(res => console.log(res)).finally(navigate("/"))
        }
    }

    return (

        <>
            <Header />
            {currentPost ?
                <div className='container'>
                    <div className="example-blog-post">
                        <h2 id="title">{currentPost.title}</h2>
                        <h3>{currentPost.ingress}</h3>

                        <div className="blog-post-text">
                            <p className='blog-test'>{currentPost.content}</p>
                            <br />
                            <br />
                            <p id="author-name">Author: {author.username}</p>
                        </div>
                        {currentUser ? currentUser.user_id === author.user_id ? <div><button onClick={handelDelete}>Delete</button> <button onClick={() => navigate("/")}>Home</button></div>
                            : <button onClick={() => navigate("/")}>Home</button> : <button onClick={() => navigate("/")}>Home</button>}

                    </div>

                </div>
                : <div>loding</div>}
        </>
    );
}





