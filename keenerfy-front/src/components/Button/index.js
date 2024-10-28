import React from 'react';
import './Button.css'
import { Link } from 'react-router-dom';

const Button = (props) => {
    return (
            props.button === "REGISTER" ? <Link to={"/login"}><button className='btn' type={props.type} onClick={props.onClick}>{props.button}</button></Link>
            : 
            <button className='btn' type={props.type} onClick={props.onClick}>{props.button}</button>
    )
}

export default Button