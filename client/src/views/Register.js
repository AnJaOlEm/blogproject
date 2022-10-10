import React from 'react'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context';
import { Link } from "react-router-dom";
import styles from '../css/Register.css'

const Register = () => {

    const navigate = useNavigate();

    const url = "http://localhost:8000/api/auth/register"
    const { login, setCurrentUser, currentUser } = useContext(AuthContext);

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
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

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );


    const renderForm = (
        <div className="render-form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Användarnamn</label>
                    <input type="text" name="username" onChange={handleUserInputs} />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label>Lösenord</label>
                    <input type="password" name="password" required onChange={handleUserInputs} />
                    {renderErrorMessage("pass")}
                </div>
                <div className="input-container">
                    <label>Email</label>
                    <input type="email" name="email" required onChange={handleUserInputs} />
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );

    return (

        <div className="form">
            <div className="reg-form">
                <div className="title">Registrera</div>
                {isSubmitted ? <div >
                    <div >Användaren är inloggad</div>
                    <Link className="entry-message" to={'/addpostform'}>OK</Link>
                </div> : renderForm}
            </div>
        </div>
    );

}

export default Register;

