import React from 'react';
import './Login.css'
import TextField from '../../components/TextField'
import Button from '../../components/Button'
import SecondaryButton from '../../components/SecondaryButton'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { Context } from '../../Context/AuthContext'

const Login = () =>{

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    
    const { handleLogin } = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault();
        handleLogin(login, password);
      };

    return (
        <div className="container-login">
                <img src="/images/keener.fy-big.svg" alt="Principal"/>
                <form onSubmit={handleSubmit}>
                    <TextField 
                    label="LOGIN" 
                    placeholder="email@example.com"
                    type="text"
                    value={login}
                    onChange={e => setLogin(e.target.value)}
                    />
                    <TextField 
                    label="PASSWORD" 
                    placeholder="************"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                    <Link to={"/forgot-password"}>
                        <button className='btn-forgot-password'><h3></h3></button>
                    </Link>
                    <Button button="ENTER"/>
                    <SecondaryButton button="REGISTER"/>
                </form>
        </div>
    )
}

export default Login