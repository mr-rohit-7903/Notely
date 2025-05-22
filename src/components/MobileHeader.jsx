import React from 'react';
import logo from '../assets/icons/logo.png';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Notely" />
            
            {/* <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/notes">Notes</Link></li>
                <li><Link to="/folders">Folders</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul> */}
        </header>
    );
}
export default Header;