import React from 'react'
import './header.css';
import { Link } from 'react-router-dom';


function Header() {

  return (
    <>
      <header>
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
          <Link to="/create">Création</Link>
          <Link to="/login">Compte</Link>
        </div>
      </header>
    </>
  )
}

export default Header
