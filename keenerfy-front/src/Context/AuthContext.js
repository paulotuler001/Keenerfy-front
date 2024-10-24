import React, { createContext, useEffect, useState } from "react";
import api from "../api";
import { jwtDecode } from "jwt-decode";
// import { useNavigate } from "react-router-dom";

const Context = createContext();

function AuthProvider({ children }){

    const [authenticated, setAuthenticated] = useState(false)
    const [userName, setUserName ] = useState('')

    useEffect(() =>{
        const token = localStorage.getItem('token')
    
        const decoded = jwtDecode(token);
        setUserName(decoded.unique_name)
        if(token){
            api.defaults.headers.Authorization = `${'Bearer ' + JSON.parse(token)}`
            setAuthenticated(true)
        } else {
            setAuthenticated(false);
        }
        
    }, [])


    const handleLogin = async (login, password) =>{

        const postLogin = {
            email: login,
            password: password
        }

        const { data } = await api.post("/login/login", postLogin)

        const { token } = data
        localStorage.setItem('token', JSON.stringify(token))
        // api.defaults.headers.Authorization = JSON.parse(token)
        api.defaults.headers.Authorization = token
        setAuthenticated(true)
    }
    
    const handleLogout = () =>{
        api.defaults.headers.Authorization = undefined
        localStorage.removeItem('token')
        setAuthenticated(false)
    }

    return (
        <Context.Provider value = {{userName, authenticated, handleLogin, handleLogout}}>
            {children}
        </Context.Provider>
    )
}

export { Context, AuthProvider }