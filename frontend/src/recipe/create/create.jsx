// src/components/account/account.jsx
import React, { useState } from 'react';

const CreateRecipe = () => {
  const [title, setTitle] = useState('');
  // const [image , setImage] = useState('');
  const [description, setDescription] = useState('');
  const [instructions, setInstructions] = useState('');
  // const [ingredients, setIngredients] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const handleRecipeSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await fetch('http://127.0.0.1:8000/api/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description, instructions }),
      });

      if (response.ok) {
        setSuccess('Recette ajouter !');
        // Vous pouvez rediriger l'utilisateur ou effectuer d'autres actions ici
      } else {
        const data = await response.json();
        setError(data.message || 'Une erreur est survenue.');
      }
    } catch (err) {
      setError('Une erreur est survenue.');
    }
  };


  return (
    <div>
      <h2>Créer recettes</h2>
      <form onSubmit={handleRecipeSubmit}>
        <div>
          <label>Titre recette :</label>
          <input
              type="name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
          />
        </div>
        <div>
          <label>Description :</label>
          <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
          />
        </div>
        <div>
          <label>Instructions :</label>
          <input
              type="text"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              required
          />
        </div>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <button type="submit">Valider Recette</button>
      </form>

    </div>
  );
};

export default CreateRecipe;