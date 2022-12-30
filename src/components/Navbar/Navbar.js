import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <h1 className='name'>Ramen Lab</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    )
}

export default Navbar;