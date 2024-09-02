import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './tableNewRecipe.css';

const TableNewRecipe = () => {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [rejectMessage, setRejectMessage] = useState('');

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/recipes?status=new');
                setRecipes(response.data);
            } catch (err) {
                setError('Une erreur est survenue lors de la récupération des recettes.');
            }
        };

        fetchRecipes();
    }, []);

    const handlePublish = async (recipeId) => {
        try {
            await axios.put(`http://127.0.0.1:8000/api/recipes/${recipeId}`, { status: 'published' });
            setRecipes(recipes.filter(recipe => recipe.id !== recipeId));
        } catch (err) {
            setError('Une erreur est survenue lors de la publication de la recette.');
        }
    };

    const handleReject = async () => {
        try {
            await axios.put(`http://127.0.0.1:8000/api/recipes/${selectedRecipe.id}`, { status: 'rejected', message: rejectMessage });
            setRecipes(recipes.filter(recipe => recipe.id !== selectedRecipe.id));
            setShowPopup(false);
            setRejectMessage('');
        } catch (err) {
            setError('Une erreur est survenue lors du rejet de la recette.');
        }
    };

    const openPopup = (recipe) => {
        setSelectedRecipe(recipe);
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
        setRejectMessage('');
    };

    return (
        <div className="tableNewRecipeContainer">
            <h2>Nouvelles Recettes</h2>
            {error && <p className="error">{error}</p>}
            <table className="recipeTable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nom</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {recipes.map(recipe => (
                        <tr key={recipe.id}>
                            <td>{recipe.id}</td>
                            <td>{recipe.name}</td>
                            <td>{recipe.description}</td>
                            <td>
                                <button onClick={() => handlePublish(recipe.id)}>Publier</button>
                                <button onClick={() => openPopup(recipe)}>Refuser</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showPopup && (
                <div className="popup">
                    <div className="popupContent">
                        <h3>Raison du rejet</h3>
                        <textarea
                            value={rejectMessage}
                            onChange={(e) => setRejectMessage(e.target.value)}
                        />
                        <button onClick={handleReject}>Envoyer</button>
                        <button onClick={closePopup}>Annuler</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TableNewRecipe;