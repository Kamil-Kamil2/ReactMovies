import {Link} from "react-router-dom"
import "../css/navbar.css"

function Navbar(){
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/" className="navbar-brand-link">Movie App</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>
        </div>
    </nav>
}

export default Navbar