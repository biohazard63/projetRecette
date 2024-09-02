import React, { useState } from 'react';
import axios from 'axios';
import '../form_recipe.css';

const CreateRecipe = () => {
  const [title, setTitle] = useState('');
  const [servings, setServings] = useState('');
  const [description, setDescription] = useState('');
  const [instructions, setInstructions] = useState('');
  const [ingredients, setIngredients] = useState([{ name: '', quantity: '', unit: '' }]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleIngredientChange = (index, event) => {
    const values = [...ingredients];
    values[index][event.target.name] = event.target.value;
    setIngredients(values);
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { name: '', quantity: '', unit: '' }]);
  };

  const handleRemoveIngredient = (index) => {
    const values = [...ingredients];
    values.splice(index, 1);
    setIngredients(values);
  };

  const handleRecipeSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/recipes', {
        title,
        servings,
        description,
        instructions,
        ingredients,
        user_id: sessionStorage.getItem('userId'),
        category_id: 1
      });

      if (response.status === 201) {
        setSuccess('Recette ajoutée !');
      } else {
        setError(response.data.message || 'Une erreur est survenue.');
      }
    } catch (err) {
      setError('Une erreur est survenue.');
    }
  };

  return (
    <div className='forme_recipe'>
      <h1>Créer recettes</h1>
      <form onSubmit={handleRecipeSubmit}>
        <div>
          <label>Titre recette :</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Nombre de portions :</label>
          <input
            type="number"
            value={servings}
            onChange={(e) => setServings(e.target.value)}
            required
          />
        </div>
        <div className='description_form'>
          <label>Description :</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className='instructions_form'>
          <label>Instructions :</label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            required
          ></textarea>
        </div>
        <div className='ingredients_form'>
          <label>Ingrédients :</label>
          {ingredients.map((ingredient, index) => (
            <div key={index}>
              <input
                type="text"
                name="name"
                placeholder="Nom de l'ingrédient"
                value={ingredient.name}
                onChange={(event) => handleIngredientChange(index, event)}
                required
              />
              <input
                type="text"
                name="quantity"
                placeholder="Quantité"
                value={ingredient.quantity}
                onChange={(event) => handleIngredientChange(index, event)}
              />
              <input
                type="text"
                name="unit"
                placeholder="Unité"
                value={ingredient.unit}
                onChange={(event) => handleIngredientChange(index, event)}
              />
              <button type="button" onClick={() => handleRemoveIngredient(index)}>Supprimer</button>
            </div>
          ))}
          <button type="button" onClick={handleAddIngredient}>Ajouter un ingrédient</button>
        </div>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <button type="submit">Valider Recette</button>
      </form>
    </div>
  );
};

export default CreateRecipe;