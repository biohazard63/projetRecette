import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Banner from '../../components/banner/banner';
import './recipe.css';


const GetRecipe = () => {

  let subtitle = "Ingrédients";
  let first_letter = "V";
  let text = "oici les ingrédients pour la recette :";


  // const [title, setTitle] = useState('');
  // // const [image , setImage] = useState('');
  // const [description, setDescription] = useState('');
  // const [instructions, setInstructions] = useState('');
  // // const [ingredients, setIngredients] = useState('');
  // const [error, setError] = useState('');
  // const [success, setSuccess] = useState('');
  
  // const handleRecipeSubmit = async (event) => {
  //   event.preventDefault();
  //   setError('');
  //   setSuccess('');

  //   try {
  //     const response = await fetch('http://127.0.0.1:8000/api/recipes/{id}', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ title, description, instructions }),
  //     });

  //     if (response.ok) {
  //       setSuccess('Recette ajouter !');
  //       // Vous pouvez rediriger l'utilisateur ou effectuer d'autres actions ici
  //     } else {
  //       const data = await response.json();
  //       setError(data.message || 'Une erreur est survenue.');
  //     }
  //   } catch (err) {
  //     setError('Une erreur est survenue.');
  //   }
  // };

  const { id } = useParams(); // Assurez-vous que votre routeur passe l'ID de la recette
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState('');
  // const [success, setSuccess] = useState('');

  // useEffect(() => {
  //   const fetchRecipe = async () => {
  //     try {
  //       const response = await fetch(`http://127.0.0.1:8000/api/recipes/${id}`);
  //       if (!response.ok) {
  //         throw new Error('Erreur lors de la récupération de la recette');
  //       }
  //       const data = await response.json();
  //       setRecipe(data);
  //     } catch (error) {
  //       setError('Erreur lors de la récupération de la recette');
  //     }
  //   };

  //   fetchRecipe();
  // }, [id]);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/recipes/${id}`);
        const recipeData = response.data;
        setRecipe(recipeData);
        const recipeIngredients = recipeData.ingredients; // Supposons que les ingrédients sont dans la propriété 'ingredients'
        setIngredients(recipeIngredients);
        console.log(recipeIngredients);  
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
        ingredients={recipe.ingredients}
      />
    ) : (
      <p>Chargement...</p>
    )}
  </div>

  );
};

export default GetRecipe;