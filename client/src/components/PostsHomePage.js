import React, { useEffect, useState } from 'react'
import ReadMoreBtn from './ReadMoreBtn'
import '../css/PostsHomePage.css';

export default function PostsHomePage({ blog }) {
    //console.log(blog, " this is blog ocmps")
    const [user, setUser] = useState({})



    useEffect(() => {
        getAuthor().then(res => {
            setUser({
                username: res.rows[0].username,
                email: res.rows[0].email
            })
        })
    })

    const getAuthor = async (req, res) => {
        let userId = blog.user_id;
        let user = await fetch("http://localhost:8000/api/users/getuser/" + userId,)
            .then(res => res.json())

        return user;

    }


    return (
        <body>
        <div className='post-wrapper'>
            <div className='post'>
            <h1>title: {blog.title}</h1>
            <h2>ingress: {blog.ingress}</h2>
            <h3>author : {user.username}</h3>
            <p>email: {user.email}</p>
            <ReadMoreBtn />
            <br />
            <br />
            </div>
        </div>
        </body>
    )
}

