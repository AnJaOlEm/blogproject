import React from 'react'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context';

const Register = () => {

    const navigate = useNavigate();

    const url = "http://localhost:8000/api/auth/register"
    const { login, setCurrentUser, currentUser } = useContext(AuthContext);

    const [userCredentials, setUserCredentials] = useState(
        {
            username: "",
            password: "",
            email: ""
        }
    )

    const handleUserInputs = (e) => {

        console.log(e.target.name, " <-------------")
        setUserCredentials(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            username: userCredentials.username,
            password: userCredentials.password,
            email: userCredentials.email
        }


        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),

        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Server response:', data);
                navigate("/")

            })
            .catch((error) => {
                console.error('Error:', error);
            });

        login({ username: userCredentials.username, password: userCredentials.password })
            .then((res) => {
                if ((typeof res) === "object") {
                    localStorage.setItem("jwt", res.token);
                    setCurrentUser(res.user);
                    localStorage.setItem("user", JSON.stringify(res.user))
                    navigate("/")
                } else {
                    navigate("/")
                }
            })




    }

    return (
        <div>
            <form>
                <input placeholder='username' onChange={handleUserInputs} name='username' />
                <input placeholder='password' onChange={handleUserInputs} name='password' />
                <input placeholder='email' onChange={handleUserInputs} name='email' />
                <button onClick={handleSubmit}>Register user</button>
            </form>
        </div>
    )

}

export default Register;

