import React from 'react';
import './footer.css';
import logo from '/images/Frigo_Magique1.svg';
import { Link } from 'react-router-dom';

function Footer() {

  return (
    <>
      <footer>
        <div className='footer_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='footer_link'>
          <div className='footer_navigation'>
            <h3>Navigation</h3>
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
              <li>
                <Link to="/legals">Mentions Légales</Link>
              </li>
            </ul>
          </div>
          <div className='footer_account'>
            <h3>Utilisateur</h3>
            <ul>
              <li>
                <Link to="/connexion">Connexion</Link>
              </li>
              <li>
                <Link to="/mes-recettes">Mes Recettes</Link>
              </li>
            </ul>
          </div>          
        </div>

      </footer>
    </>
  )
}

export default Footer
