import React  from 'react';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import { Avatar, FormControl, InputLabel, MenuItem, Select,Button,Menu } from '@mui/material';
import { useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const [user,setUser] = useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickContact =() => {
    handleClose();
    navigate('/contact');
  }

  const currentUser = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("user"));
    setUser(currentUser);
  }, []); // Run only once on mount
  const logout = () => {
    localStorage.removeItem("user")
    setUser(null);
  }
  return (
    <header className="header">

      <div className="navba">

      <div className="flex flex-row items-center gap-10">

        {/* Logo */}
        <div className="flex items-center pl-5">
          {logo && <img src={logo} alt="EduPress" className="logo-img" />} 
          <span className="logo-text">EduPress</span>
        </div>

        {/* Navbar */}
        <nav className=" nav">
          <ul className="flex flex-row items-center">
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
            <li><NavLink to="/courses" className={({ isActive }) => isActive ? 'active' : ''}>Courses</NavLink></li>
            <li><NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''}>Blog</NavLink></li>
            <li>
            <div>
                <Button
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  sx ={{color:"orange"}}
                >
                  Page
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={handleClickContact}>Contact</MenuItem>
                  <MenuItem onClick={handleClose}>FAQ</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </div>
            </li>
            <li><NavLink to="/learnpress" className={({ isActive }) => isActive ? 'active' : ''}>LearnPress Add-On</NavLink></li>
            <li><NavLink to="/premium" className={({ isActive }) => isActive ? 'active' : ''}>Premium Theme</NavLink></li>
          </ul>
        </nav>

        {/* Search & Auth */}
        {user ? (
          <div className='flex flex-row gap-2'>
          <div className='flex flex-row items-center gap-1 '>
         
            <Avatar>{user.userName.charAt(0)}</Avatar>
          </div>
            <button onClick={logout}>Logout</button>
          </div>
        ): 
        (<div className="header-actions">
          <NavLink to="/login" className="login-link">Login</NavLink>
          <NavLink to ="/signup" className= "">/ Register</NavLink>
          <FaSearch className="search-icon" />
        </div>)}
      </div>
    </header>
  );
};

export default Header;
