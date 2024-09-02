import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Banner from '../../components/banner/banner';
import './recipe.css';

const GetRecipe = () => {
  let subtitle = "Ingrédients";
  let first_letter = "V";
  let text = "oici les ingrédients pour la recette :";

  const { id } = useParams(); // Assurez-vous que votre routeur passe l'ID de la recette
  const [recipe, setRecipe] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/recipes/${id}`);
        const responseIngredients = await axios.get(`http://127.0.0.1:8000/api/recipe-ingredients`);
        const responseIngredient = await axios.get(`http://127.0.0.1:8000/api/ingredients`);
        
        const recipeData = response.data;
        setRecipe(recipeData);
        
        const recipeIngredients = responseIngredients.data; // Supposons que les ingrédients sont dans la propriété 'data'
        const allIngredients = responseIngredient.data; // Supposons que les ingrédients sont dans la propriété 'data'

        // Filtrer les ingrédients pour la recette actuelle
        const filteredIngredients = recipeIngredients
          .filter(ri => ri.recipe_id === parseInt(id))
          .map(ri => {
            const ingredient = allIngredients.find(i => i.id === ri.ingredient_id);
            return {
              ...ingredient,
              quantity: ri.quantity,
              unit: ri.unit
            };
          });

        setIngredients(filteredIngredients);
      } catch (err) {
        setError('Erreur lors du chargement de la recette');
      }
    };

    fetchRecipe();
  }, [id]);

  return (
    <div className='recipe_container'>
      {error && <p>{error}</p>}

      {recipe ? (
        <Banner 
          title={recipe.title}
          subtitle={subtitle} 
          first_letter={first_letter} 
          text={text} 
          description={recipe.description}
          appliance={recipe.appliance}
          servings={recipe.servings}
          instructions={recipe.instructions}
          ingredients={ingredients}
        />
      ) : (
        <p>Chargement...</p>
      )}

      {Array.isArray(ingredients) && ingredients.length > 0 ? (
        ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.quantity} {ingredient.unit} {ingredient.name}</li>
        ))
      ) : (
        <p>Pas d'ingrédients disponibles</p>
      )}
    </div>
  );
};

export default GetRecipe;