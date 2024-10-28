import React from 'react';
import './Button.css'

const Button = (props) => {
    return (
            props.button === "REGISTER" ? <button className='btn' type={props.type} onClick={props.onClick}>{props.button}</button>
            : 
            props.button === "EDIT" ? <button className='btn' type={props.type} onClick={props.onClick}><i className="fas fa-edit"></i></button>
            :
            <button className='btn' type={props.type} onClick={props.onClick}>{props.button}</button>
    )
}

export default Button