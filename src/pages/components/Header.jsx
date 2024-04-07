import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
    return <nav className="header">
        <ul className="links">
            <Link to="/">Home</Link>
            <Link to="/about">Sobre nós</Link>
            <Link to="/contact">Contato</Link>
        </ul>
    </nav>
}

export default Header;