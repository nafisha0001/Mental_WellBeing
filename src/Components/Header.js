import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <div className="circle"></div>
            </div>
            <nav className="nav">
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/workshops">Workshops</Link></li>
                    <li><Link to="/professional-help">Professional Help</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                </ul>
            </nav>
            <div className="auth-buttons">
                <button className="login-btn">Login</button>
                <button className="signup-btn">SignUp</button>
            </div>
        </header>
    );
};

export default Header;
