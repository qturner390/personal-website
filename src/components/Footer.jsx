import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div>
                <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
                <div>
                    Footer stuff here
                </div>
            </div>
        </footer>
    );
};

export default Footer;