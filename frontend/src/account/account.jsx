import React from 'react';
import { Link } from 'react-router-dom';
import RecipesManagement from './RecipesManagement/RecipesManagement';
import UsersManagement from './UsersManagement/UsersManagement';
import CategoriesManagement from './CategoriesManagement/CategoriesManagement';
import './account.css';

function Account({ isLoggedIn }) {
  isLoggedIn = true;
  return (
    <div>
      {isLoggedIn ? (
        <>
          <h2>Votre compte</h2>
          <CategoriesManagement />
          <UsersManagement />
          <RecipesManagement />
        </>
      ) : (
        <>
          <h2>Please log in to view your account</h2>
          <Link to="/login">Connexion</Link>
        </>
      )}
    </div>
  );
}

export default Account;