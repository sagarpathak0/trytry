import './navbar.css';
import { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNavigation = (path) => {
        window.location.href = path;
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='nav'>
            <div className='nav-logo' onClick={() => handleNavigation('/home')}>9MM</div>
            <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                <li onClick={() => handleNavigation('/home')}>Home</li>
                <li onClick={() => handleNavigation('/explore')}>Explore</li>
                <li onClick={() => handleNavigation('/about')}>About</li>
                <li className='nav-contact' onClick={() => handleNavigation('/contact')}>Contact</li>
            </ul>
        </div>
    );
};

export default Navbar;
