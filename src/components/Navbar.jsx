import React, { useState } from 'react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <a href="#" className="logo magnetic" data-text="PRAVEEN">PRAVEEN</a>
                <div className={`menu-toggle magnetic ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <div className="hamburger"></div>
                </div>
                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li><a href="#home" className="magnetic link-hover" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                    <li><a href="#about" className="magnetic link-hover" onClick={() => setIsMenuOpen(false)}>About</a></li>
                    <li><a href="#skills" className="magnetic link-hover" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
                    <li><a href="#projects" className="magnetic link-hover" onClick={() => setIsMenuOpen(false)}>Work</a></li>
                    <li><a href="#contact" className="magnetic link-hover" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
