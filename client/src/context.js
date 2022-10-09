import { createContext, useState } from "react";


export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState();

    const login = async (user) => {

        const url = "http://localhost:8000/api/auth/login";

        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: user.username, password: user.password }),
        });

        return response.json();
    };

    const logout = async () => {

    }

    return (
        <AuthContext.Provider value={{ currentUser, setCurrentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}