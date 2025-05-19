import React from 'react';
import logo from '../assets/icons/logo.png';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Notely" />
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">Folders</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Contact</a>
                </li>
            </ul>
        </header>
    );
}
export default Header;