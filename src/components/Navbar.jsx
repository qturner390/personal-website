import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [theme, setTheme] = useState(() => localStorage.getItem('app-theme') || 'dark');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('app-theme', theme);
    }, [theme]);

    const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className='navbar'>
            <div className='navbar-left'>
                <Link to="/home" className='navbar-name'>QT</Link>
            </div>

            <button 
                className={`mobile-toggle ${isMenuOpen ? 'open' : ''}`} 
                onClick={toggleMenu}
                aria-label="Toggle navigation"
            >
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
            </button>

            <div className={`navbar-center ${isMenuOpen ? 'mobile-active' : ''}`}>
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/home" className="nav-link liquid" onClick={closeMenu}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/resume" className="nav-link liquid" onClick={closeMenu}>Resume</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/projects" className="nav-link liquid" onClick={closeMenu}>Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/resume" className="nav-link liquid" onClick={closeMenu}>Contact Me</Link>
                    </li>
                    <li className="nav-item">
                        <button onClick={toggleTheme} className="theme-toggle-button mobile-theme-btn">
                            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                        </button>
                    </li>
                </ul>
                
            </div>
        </nav>
    );
};

export default Navbar;