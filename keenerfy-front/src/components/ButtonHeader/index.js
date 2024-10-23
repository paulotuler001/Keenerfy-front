import { Link } from 'react-router-dom'
import './ButtonHeader.css'

const ButtonHeader = (props) => {
    const { name, path, isActive } = props
    
    return (
        <div className="container-button-header">
            <Link to={path}>
                <button className={isActive ? 'active' : ''}>
                    <h2 id="h2-button-header">{name}</h2>
                </button>
            </Link>
        </div>
    )
}

export default ButtonHeader