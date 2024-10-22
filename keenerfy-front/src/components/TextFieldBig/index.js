import './TextFieldBig.css'

const TextFieldBig = (props) => {
    return (
        <div className="form">
            <div className="text-field-big">
                <label>{props.label}</label>
                <input placeholder={props.placeholder}/>
            </div>
        </div>
    )
}
export default TextFieldBig
