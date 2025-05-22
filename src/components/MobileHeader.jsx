import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MobileHeader.css';
import logo from '../assets/icons/logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

function MobileHeader() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="mobile-header">
            <div className="mobile-header-top">
                <img src={logo} alt="Notely" className="mobile-logo" />
                <button className="hamburger" onClick={toggleMenu}>
                    <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
                </button>
            </div>

            {isOpen && (
                <nav className="mobile-nav">
                    <Link to="/" onClick={closeMenu}>Home</Link>
                    <Link to="/notes" onClick={closeMenu}>Notes</Link>
                    <Link to="/folders" onClick={closeMenu}>Folders</Link>
                    <Link to="/about" onClick={closeMenu}>About</Link>
                </nav>
            )}
        </header>
    );
}

export default MobileHeader;
