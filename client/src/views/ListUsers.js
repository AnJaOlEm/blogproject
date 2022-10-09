import React, { useState, useEffect } from 'react'

function ListUsers() {



    const [users, setUsers] = useState([]);

    async function sendPost() {

        let token = localStorage.getItem("jwt")


        const url = "http://localhost:8000/api/users/users";
        const response = await fetch(url)

        return response.json();
    }

    useEffect(() => {
        sendPost().then(res => setUsers(res))

    }, [])

    const listUsers = users.map((user, i) => {
        return (<li key={i}>Name:{user.username} <br />Email: {user.email}</li>)
    })


    return (
        users.length > 0 ? <div>
            <ul>
                {listUsers}
            </ul>
        </div> : <div>loooading</div>

    )
}

export default ListUsers