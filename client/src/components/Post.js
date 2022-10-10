import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../context';
import styles from '../css/Post.css'

function Post({ post }) {

    const [author, setAuthor] = useState()

    useEffect(() => {
        getAuthor()
    }, [])



    async function getAuthor() {
        fetch("http://localhost:8000/api/users/getuser/" + post.user_id)
            .then(res => res.json())
            .then(data => setAuthor({ user_id: data.rows[0].user_id, username: data.rows[0].username }))
    }

    return (
        <div>{author ?
            <div className='example-blog-post'>
                <h1 className='title'>{post.title}</h1>
                <p>{post.ingress}</p>
                <br />
                <p className='author-name'>Author: {author.username}</p>
                <Link className="read-more-btn" to={`/readmore/${post.blog_id}`} state={{ author: author }}>
                    Read More
                </Link>
            </div>
            : <div>Hey</div>
        }
        </div>
    )
}

export default Post