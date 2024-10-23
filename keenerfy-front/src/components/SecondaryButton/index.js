import { Link } from 'react-router-dom'
import './SecondaryButton.css'

const SecondaryButton = (props) => {
    return (
           <Link to={props.button === "REGISTER" ? "/register" : "/login"}>
            <button id="secondary-button">{props.button}</button>
           </Link>
    )
}

export default SecondaryButton