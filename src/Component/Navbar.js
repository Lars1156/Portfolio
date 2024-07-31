// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Component/cssFiles/nav.css'// Import the CSS file for styling

const NavBar = () => {
    return (
        <nav>
            <Link to="/">Home<span></span></Link>
            <Link to="/about">About<span></span></Link>
            <Link to="/services">Services<span></span></Link>
            <Link to="/contact">Contact<span></span></Link>
        </nav>
    );
};

export default NavBar;
