import React from 'react';
import './TextFieldBig.css'

const TextFieldBig = (props) => {
    return (
        <div className="form">
            <div className="text-field-big">
                <label>{props.label}</label>
                <input required={props.required} placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
            </div>
        </div>
    )
}
export default TextFieldBig