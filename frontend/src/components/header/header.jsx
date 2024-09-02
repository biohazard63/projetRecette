import React, { useState, useEffect } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';


function Header() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
            <Link className="menu-item" to="/login">Compte</Link>
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
            <Link to="/login">Compte</Link>
          </div>
        </>
      )}

      </header>
    </>
  )
}

export default Header
