import './ButtonHeader.css'

const ButtonHeader = (props) => {
    return (
        <div className="container-button-header">
            <h2>{props.name}</h2>
        </div>
    )
}

export default ButtonHeader