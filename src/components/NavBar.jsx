import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar">
            <div className="nav-link-home">
                <Link to="/" className="nav-link">Home</Link>
            </div>
            <div className="nav-link-fav">
                <Link to="/favorites" className="nav-link">Favorites</Link>
            </div>
        </nav>
    )
}

export default NavBar