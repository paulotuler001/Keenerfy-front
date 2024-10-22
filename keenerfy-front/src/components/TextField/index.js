import './TextField.css'

const TextField = (props) => {
    return (
        <div className="form">
            <div className="text-field">
                <label>{props.label}</label>
                <input placeholder={props.placeholder}/>
            </div>
        </div>
    )
}
export default TextField
