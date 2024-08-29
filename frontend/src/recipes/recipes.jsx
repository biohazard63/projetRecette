// src/components/account/account.jsx
import React from 'react';
import './recipes.css';
import RecipesFilter from '../components/recipesFilter/recipesFilter';

const Recipes = () => {
  return (
    <main>
      <h2>Nos recettes</h2>
        {/* Banner */}

      <div className='filterSection'>
        <RecipesFilter />
      </div>
      <div className='cardContainer'>
        {/* Recipe cards */}
      </div>

    </main>
  );
};

export default Recipes;