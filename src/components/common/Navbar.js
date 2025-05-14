import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/components/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
        <li><NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''}>Services</NavLink></li>
        <li><NavLink to="/clients" className={({ isActive }) => isActive ? 'active' : ''}>Clients</NavLink></li>
        <li><NavLink to="/careers" className={({ isActive }) => isActive ? 'active' : ''}>Careers</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;