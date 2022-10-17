import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function NavItem (props) {
    const [icon, title, navigateTo ] = props
    
    return (
        <li className="nav-item">
        <Link className="nav-link" to={navigateTo}>
            <div className="d-flex align-items-center">
                {icon}
                <div className="fw-semibold ms-2">{title}</div>
            </div>
        </Link>
        </li>
    )
}

NavItem.propsType = {
    title : PropTypes.string,
    navigateTo : PropTypes.string,
}