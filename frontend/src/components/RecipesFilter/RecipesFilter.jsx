import React from 'react';
import './recipesFilter.css';
function RecipesFilter() {

  return (
    <>
      <div className="recipeFilterWrapper">
        <h2>Filtrer les recettes</h2>
        <div className="recipe_filter">
          <div className='filter_options'>
            <label>Catégories</label>
            <select name="category" id="category">
              <option value="0">Toutes</option>
              <option value="1">Entrées</option>
              <option value="2">Plats</option>
              <option value="3">Desserts</option>
            </select>
          </div>
            
          <div className='filter_options'>
            <label>Ingrédients</label>
            <select name="ingredient" id="ingredient">
              <option value="0">Tous</option>
              <option value="1">Pomme de terre</option>
              <option value="2">Carrote</option>
            </select>        
          </div>

          <div className='filter_options'>
            <label>Régime</label>
            <select name="diet" id="diet">
            <option value="0">Tous</option>
            <option value="1">Avec viande</option>
              <option value="2">Végétarien</option>
              <option value="3">Vegan</option>
            </select>
          </div>

          <div className='filter_options'>
            <label>Sucré / Salé</label>
            <select name="taste" id="taste">
              <option value="0">Tous</option>
              <option value="1">Sucré</option>
              <option value="2">Salé</option>
            </select>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default RecipesFilter;