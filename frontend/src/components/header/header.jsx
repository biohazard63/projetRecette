import React, { useState, useEffect } from 'react';
import './header.css';
import { Link, useNavigate } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const userId = sessionStorage.getItem('userId');
    const userRole = sessionStorage.getItem('Role'); // Ensure the key matches the stored value
    setIsLoggedIn(!!userId);
    setIsAdmin(userRole === 'admin');
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('Role');
    navigate('/');
  };

  return (
    <>
      <header>
        {windowWidth < 1000 ? (
          <Menu>
            <div>
              <Link className="menu-item" to="/">Accueil</Link>
              <Link className="menu-item" to="/recipes">Recettes</Link>
              <Link className="menu-item" to="/categories">Categories</Link>
            </div>
            <div>
              <Link className="menu-item" to="/recipes/new">Création</Link>
              <Link className="menu-item" to="/account">Compte</Link>
              {isAdmin && <Link className="menu-item" to="/dashboard">Dashboard</Link>}
              {isLoggedIn ? (
                <button onClick={handleLogout} className="menu-item main_button">Logout</button>
              ) : (
                <Link className="menu-item" to="/login">Login</Link>
              )}
            </div>
          </Menu>
        ) : (
          <>
            <nav>
              <ul>
                <li>
                  <Link to="/">Accueil</Link>
                </li>
                <li>
                  <Link to="/recipes">Recettes</Link>
                </li>
                <li>
                  <Link to="/categories">Categories</Link>
                </li>
              </ul>
            </nav>
            <div className='button_account'>
              <Link to="/recipes/new">Création</Link>
              <Link to="/account">Compte</Link>
              {isAdmin && <Link to="/dashboard">Dashboard</Link>}
              {isLoggedIn ? (
                <button className='main_button' onClick={handleLogout}>Logout</button>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </div>
          </>
        )}
      </header>
    </>
  );
}

export default Header;