import React, { createContext, useEffect, useState } from "react";
import api from "../api";
import { jwtDecode } from "jwt-decode";
import Loading from "../components/Loading";

const Context = createContext();

function AuthProvider({ children }){

    const [authenticated, setAuthenticated] = useState(false)
    const [userName, setUserName ] = useState('')
    const [loading, setLoading] = useState(false)
    const [token, setToken] = useState('')
    const [error, setError] = useState('')

    useEffect(() =>{
        const token = localStorage.getItem('token')
        setToken(token)
        let decoded
        
        if(!token){
            return
        }
        
        if(token){
            decoded = jwtDecode(token);
            setUserName(decoded.unique_name)
            
            api.defaults.headers.Authorization = `${'Bearer ' + token}`
            setAuthenticated(true)
            setLoading(false)
        } else {
            setAuthenticated(false);
        }
        
    }, [])

    const handleLogin = async (login, password) =>{

        setLoading(true)
        const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        await sleep(2000)
        const postLogin = {
            email: login,
            password: password
        }
        let response
        try {
            response = await api.post("/login/login", postLogin)
            if(response.status === 200){
                const { token } = response.data
                localStorage.setItem('token', token)
                
                const decoded = jwtDecode(token);
                setUserName(decoded.unique_name)
                
                if (token) {
                    api.defaults.headers.Authorization = `Bearer ${token}`;
                    setAuthenticated(true);
                }
            }
        } catch (error) {
            console.log(error);
            setError("Invalid username or password")
        }
        
        setLoading(false)
    }

    if(loading){
        return <Loading/>
    }
    
    const handleLogout = () =>{
        api.defaults.headers.Authorization = undefined
        localStorage.removeItem('token')
        setAuthenticated(false)
    }

    return (
        <Context.Provider value = {{setError, error, token, userName, authenticated, handleLogin, handleLogout}}>
            {children}
        </Context.Provider>
    )
}

export { Context, AuthProvider }