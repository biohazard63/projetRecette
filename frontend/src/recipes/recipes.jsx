import React, { useState, useEffect } from 'react';


const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/recipes');
        const data = await response.json();
        if (response.ok) {
          setRecipes(data);
        } else {
          setError('Erreur lors de la récupération des recettes');
        }
      } catch (error) {
        setError('Erreur lors de la récupération des recettes');
      }
    };

    fetchRecipes();
  }, []);


  return (
    <div>
      {error && <p>{error}</p>}
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
            <p>{recipe.instructions}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;