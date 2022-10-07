import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../context';

function Post({ post }) {

    const [author, setAuthor] = useState()

    useEffect(() => {
        getAuthor()
    }, [])

    const { login, setCurrentUser, currentUser } = useContext(AuthContext);

    console.log(post.user_id, " what we get here?")

    async function getAuthor() {
        fetch("http://localhost:8000/api/users/getuser/" + post.user_id)
            .then(res => res.json())
            .then(data => setAuthor(data.rows[0]))
    }

    return (
        <div>{author ?
            <div>
                <p>             </p>
                <h1>{post.title}</h1>
                <h2>{post.ingress}</h2>
                <p>{author.username}</p>
                <Link className="link" to={`/readmore/${post.blog_id}`} state={{ author: author }}>
                    Read More
                </Link>
            </div>
            : <div>Hey</div>
        }
        </div>
    )
}

export default Post