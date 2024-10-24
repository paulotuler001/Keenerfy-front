import React from 'react';
import './TextFieldBig.css'

const TextFieldBig = (props) => {
    return (
        <div className="form">
            <div className="text-field-big">
                <label>{props.label}</label>
                <input required={true} placeholder={props.placeholder}/>
            </div>
        </div>
    )
}
export default TextFieldBig
