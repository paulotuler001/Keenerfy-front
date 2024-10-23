import React, { createContext, useEffect, useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

const Context = createContext();

function AuthProvider({ children }){

    const [authenticated, setAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)
    // const nav = useNavigate()

    useEffect(() =>{
        const token = localStorage.getItem('token')

        if(token){
            api.defaults.headers.Authorization = JSON.parse(token)
            setAuthenticated(true)
        } else {
            setAuthenticated(false);
        }
        
        setLoading(false)
    }, [])


    const handleLogin = async (login, password) =>{

        const postLogin = {
            email: login,
            password: password
        }

        const { data } = await api.post("/login/login", postLogin)
            // .then(response => {
            //     console.log(response.data);
            // })
            // .catch(error =>{
            //     console.log(error);
            // })

        const { token } = data

        localStorage.setItem('token', JSON.stringify(token))
        api.defaults.headers.Authorization = token
        setAuthenticated(true)

        // nav("/home")

        console.log(authenticated);
        
    }
    
    const handleLogout = () =>{
        setAuthenticated(false)
        localStorage.removeItem('token')
        api.defaults.headers.Authorization = undefined
    }

    return (
        <Context.Provider value = {{authenticated, handleLogin, handleLogout}}>
            {children}
        </Context.Provider>
    )
}

export { Context, AuthProvider }