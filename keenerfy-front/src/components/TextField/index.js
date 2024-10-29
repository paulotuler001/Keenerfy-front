import React from 'react';
import './TextField.css'
import InputMask from 'react-input-mask'

const TextField = ({label, placeholder, value, onChange, type, required, maxlength}) => {
    return (
        <div className="form">
            <div className="text-field">
                <label>{label}</label>
                {label === 'CPF' ? 
                    <InputMask
                    mask="999.999.999-99"
                    value={value}
                    onChange={onChange}
                    onBlur={onChange} 
                    >
                    {(inputProps) => 
                        <input 
                            {...inputProps} 
                            label={label} 
                            placeholder={placeholder}
                            value={value}
                            type={type}
                        />
                    }
                    </InputMask>
                : 
                    <input 
                    placeholder={placeholder}
                    value={value}
                    maxLength={maxlength}
                    onChange={onChange}
                    type={type ?? undefined}
                    required={required}
                    />}
            </div>
        </div>
    )
}
export default TextField
