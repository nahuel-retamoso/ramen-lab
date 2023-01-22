import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({click}) => {
    return (
        <div className="navbar">
            <h1 className='name'>Ramen Lab</h1>
            <div className="buttons">
                <button className='button' onClick={() => click('start')}>Home</button>
                <button className='button' onClick={() => click('menu')}>Menu</button>
                <button className='button' onClick={() => click('map')}>Find Us</button>
                <button className='button' onClick={() => click('booking')}>Book a table</button>
            </div>
        </div>
    )
}

export default Navbar;