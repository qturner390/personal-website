import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar-left'>
                <Link to="/home" className='navbar-name'>Quinn Turner</Link>
            </div>
            <div className='navbar-center'>
                <ul className='nav-list'>
                    <li className='nav-item'>
                        <Link to="/home" className='nav-link liquid'>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/resume" className='nav-link liquid'>Resume</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/projects" className='nav-link liquid'>Projects</Link>
                    </li>
                </ul>
            </div>
            <div className='navbar-right'>
                <Link to="/resume">Contact Me</Link>
            </div>
        </nav>
    );
};

export default Navbar;