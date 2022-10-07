import styles from '../css/ReadMoreBlog.css';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'


export const ReadMoreBlog = () => {
    //Content på sidan kommer att visas från toppen.
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [currentPost, setCurrenPost] = useState();
    //const [author, setAuthor] = useState();


    const navigate = useNavigate();

    let location = useLocation();
    const { author } = location.state

    useEffect(() => {
        getBlogPost()



    }, [])

    async function getBlogPost() {
        console.log("We here?")
        let blogId = location.pathname.split("/")[2];
        let response = await fetch("http://localhost:8000/api/blog/" + blogId).then(res => res.json()).then(data => setCurrenPost(data)).finally()

    }

    let currentUser = JSON.parse(localStorage.getItem("user"))

    // async function getAuthor() {

    //     let userId
    //     if (currentPost) {
    //         userId = currentPost.user_id;
    //         let response = await fetch("http://localhost:8000/api/users/getuser/" + userId).then(res => res.json()).then(data => setAuthor(data.rows))
    //     }
    // }


    async function handelDelete() {


        if (currentUser.user_id === author.user_id) {

            await fetch("http://localhost:8000/api/blog/" + currentPost.blog_id, {
                method: 'DELETE',
            }).then(res => res.json())
                .then(res => console.log(res)).finally(navigate("/"))
        }
    }

    return (

        <>  {currentPost ?
            <div className='container'>
                <div className="example-blog-post">
                    <h2 id="title">{currentPost.title}</h2>
                    <h3>{currentPost.ingress}</h3>

                    <div className="blog-post-text">
                        {currentPost.content}
                        <p id="author-name">{author.username}</p>
                    </div>
                    {currentUser.user_id === author.user_id ? <div><button onClick={handelDelete}>Delete</button> <button onClick={() => navigate("/")}>Home</button></div>
                        : <button onClick={() => navigate("/")}>Home</button>}

                </div>

            </div>
            : <div>loooooooooooooding</div>}
        </>
    );
}

/*<div className='about-author'>
        <img />
          <p>
          <h3>Om författaren</h3>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
             when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting, 
              remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
               containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
               PageMaker including versions of Lorem Ipsum... 
          </p>
        </div>*/



