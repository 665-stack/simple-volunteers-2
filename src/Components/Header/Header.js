import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <nav >
                <Link to='/'>Main</Link>
                <Link to="/Volunteers">volunteers</Link>
            </nav>
        </div>
    );
};

export default Header;