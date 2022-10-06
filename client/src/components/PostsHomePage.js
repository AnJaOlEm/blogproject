import React from 'react'
import ReadMoreBtn from './ReadMoreBtn'

export default function PostsHomePage({ blog }) {
    console.log(blog, " this is blog ocmps")

    return (
        <div>
            <h1>title: {blog.title}</h1>
            <h2>ingress: {blog.ingress}</h2>
            <h3>author :Author</h3>
            <ReadMoreBtn />
            <br />
            <br />
        </div>
    )
}

