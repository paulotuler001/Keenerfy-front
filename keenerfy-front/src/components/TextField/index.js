import React from 'react';
import './TextField.css'
import InputMask from 'react-input-mask'

const TextField = ({label, placeholder, value, onChange, type, required}) => {
    return (
        <div className="form">
            <div className="text-field">
                <label>{label}</label>
                {label === 'CPF' ? 
                    <InputMask
                    mask="999.999.999-99" // Formato da máscara de CPF
                    value={value}
                    onChange={onChange}
                    // Adicionando um evento para que o cursor não saia da posição
                    onBlur={onChange} 
                    >
                    {(inputProps) => 
                        <input 
                            {...inputProps}  // Passa as propriedades do InputMask
                            label={label} 
                            placeholder={placeholder}
                            value={value} // O valor atual do CPF
                            type={type} // Definindo o tipo como "text"
                        />
                    }
                    </InputMask>
                : 
                    <input 
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    type={type ?? undefined}
                    required={required}
                    />}
            </div>
        </div>
    )
}
export default TextField
