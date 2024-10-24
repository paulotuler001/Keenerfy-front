import React from 'react';
import './Register.css'
import TextField from '../../components/TextField'
import Button from '../../components/Button'
import SecondaryButton from '../../components/SecondaryButton'
import { useState } from 'react'
import axios from 'axios'

const Register = () =>{

    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpf, setCpf] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Dados que você quer enviar
        const postData = {
            username: name + " " + lastname,
            email: email,
            password: password,
            cpf: cpf
        };

        // Fazendo uma requisição POST
        axios.post('http://localhost:5006/register/register', postData)
            .then(response => {
                console.log(response.data);
            })
            .catch(error =>{
                console.log(error);
            })
    };

    const handleCPFChange = (e) => {
        setCpf(e.target.value);
    };

    return (
            <div className="container-register">
                <img src="/images/keener.fy-big.svg" alt="Principal"/>
                <form onSubmit={handleSubmit}>
                    <div className="sub-container">
                    <TextField 
                    label="NAME" 
                    placeholder="Paulo Gustavo"
                    value={name} 
                    type='name'
                    onChange={e => setName(e.target.value)}
                    />
                    <TextField 
                    label="LASTNAME" 
                    placeholder="Carvalho Tuler" 
                    value={lastname} 
                    type='name'
                    onChange={e => setLastname(e.target.value)} 
                    />

                    </div>
                    <div className="sub-container">
                    <TextField 
                        label="CPF" 
                        placeholder="Digite seu CPF"
                        value={cpf} // O valor atual do CPF
                        onChange={handleCPFChange}
                        type='text'
                    />

                    <TextField 
                    label="EMAIL" 
                    placeholder="example@mail.com"
                    value={email} 
                    type='email'
                    onChange={e => setEmail(e.target.value)}
                    />

                    </div >
                    <div className="sub-container">

                    <TextField 
                    label="PASSWORD" 
                    placeholder="************"
                    value={password} 
                    type='password'
                    onChange={e => setPassword(e.target.value)}
                    />
                    <TextField 
                    label="REPEAT YOUR PASSWORD" 
                    placeholder="************"
                    value={password} 
                    type='password'
                    onChange={e => setPassword(e.target.value)}
                    />
                    </div>
                    <div id="sub-container-button">
                        <Button button="REGISTER"/>
                        <SecondaryButton button="ALREADY CREATED?"/>
                    </div>
                </form>
            </div>
    )
}

export default Register