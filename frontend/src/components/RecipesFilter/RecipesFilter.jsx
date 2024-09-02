import React, { useState, useEffect } from 'react';
import axios from 'axios';import './recipesFilter.css';

function RecipesFilter() {
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedIngredient, setSelectedIngredient] = useState('');

  useEffect(() => {
    // Fetch categories and ingredients from the API
    const fetchFilters = async () => {
      try {
        const categoriesResponse = await axios.get('http://127.0.0.1:8000/api/categories');
        const ingredientsResponse = await axios.get('http://127.0.0.1:8000/api/ingredients');
        setCategories(categoriesResponse.data);
        setIngredients(ingredientsResponse.data);
      } catch (err) {
        console.error('Erreur lors du chargement des filtres', err);
      }
    };

    fetchFilters();
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    onFilterChange({ category: e.target.value, ingredient: selectedIngredient });
  };

  const handleIngredientChange = (e) => {
    setSelectedIngredient(e.target.value);
    onFilterChange({ category: selectedCategory, ingredient: e.target.value });
  };

  return (
    <>
      <div className="recipeFilterWrapper">
        <h2>Filtrer les recettes</h2>
        <div className="recipe_filter">
          <div className='filter_options'>
            <label>Catégories</label>
            <select name="category" id="category" value={selectedCategory} onChange={handleCategoryChange}>
              <option value="0">Toutes</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
          </div>
            
          <div className='filter_options'>
            <label>Ingrédients</label>
            <select name="ingredient" id="ingredient" value={selectedIngredient} onChange={handleIngredientChange}>
              <option value="0">Tous</option>
              {ingredients.map((ingredient) => (
                <option key={ingredient.id} value={ingredient.id}>{ingredient.name}</option>
              ))}
              {/* <option value="1">Pomme de terre</option>
              <option value="2">Carrote</option> */}
            </select>        
          </div>

          {/* <div className='filter_options'>
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
          </div> */}
        </div>
        
      </div>
    </>
  )
}

export default RecipesFilter;