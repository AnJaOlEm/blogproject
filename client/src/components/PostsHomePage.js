import React, { useEffect, useState } from 'react'
import ReadMoreBtn from './ReadMoreBtn'
import { useLocation } from 'react-router-dom'

export default function PostsHomePage({ blog }) {
    //console.log(blog, " this is blog ocmps")
    const [user, setUser] = useState({})


    console.log(blog, " thi si  blog")
    useEffect(() => {
        getAuthor()
    })

    const location = useLocation()
    const { author } = location.state


    const getAuthor = async (req, res) => {
        let userId = blog.user_id;
        let user = await fetch("http://localhost:8000/api/users/getuser/" + userId,)
            .then(res => res.json())

        setUser(user)

    }


    return (
        <div>
            <h1>title: {blog.title}</h1>
            <h2>ingress: {blog.ingress}</h2>
            <h3>author : {author.username}</h3>
            <p>email: {user.email}</p>
            <ReadMoreBtn />
            <br />
            <br />
        </div>
    )
}

