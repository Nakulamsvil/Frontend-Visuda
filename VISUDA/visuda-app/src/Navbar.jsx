import React from 'react';
import './styles.css';
import logo from './assets/logo_visuda.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Visuda Logo" className="logo" />
          <span>VISUDA</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
