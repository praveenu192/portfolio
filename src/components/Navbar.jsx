import React from 'react';
function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <a href="#" className="logo magnetic" data-text="PRAVEEN">PRAVEEN</a>
                <div className="menu-toggle magnetic">
                    <div className="hamburger"></div>
                </div>
                <ul className="nav-links">
                    <li><a href="#home" className="magnetic link-hover">Home</a></li>
                    <li><a href="#about" className="magnetic link-hover">About</a></li>
                    <li><a href="#skills" className="magnetic link-hover">Skills</a></li>
                    <li><a href="#projects" className="magnetic link-hover">Work</a></li>
                    <li><a href="#contact" className="magnetic link-hover">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
