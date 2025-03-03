import React from 'react';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          {logo && <img src={logo} alt="EduPress" className="logo-img" />} 
          <span className="logo-text">EduPress</span>
        </div>

        {/* Navbar */}
        <nav className="nav">
          <ul className="nav-list">
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
            <li><NavLink to="/courses" className={({ isActive }) => isActive ? 'active' : ''}>Courses</NavLink></li>
            <li><NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''}>Blog</NavLink></li>
            <li><NavLink to="/page" className={({ isActive }) => isActive ? 'active' : ''}>Page</NavLink></li>
            <li><NavLink to="/learnpress" className={({ isActive }) => isActive ? 'active' : ''}>LearnPress Add-On</NavLink></li>
            <li><NavLink to="/premium" className={({ isActive }) => isActive ? 'active' : ''}>Premium Theme</NavLink></li>
          </ul>
        </nav>

        {/* Search & Auth */}
        <div className="header-actions">
          <NavLink to="/login" className="login-link">Login / Register</NavLink>
          <FaSearch className="search-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
