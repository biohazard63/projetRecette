import React, { useState, useEffect } from 'react';

function RecipesManagement() {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // Function to fetch recipes from the backend
    useEffect(() => {
        const fetchRecipes = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('/api/recipes'); // Replace with your actual API endpoint
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setRecipes(data);
            } catch (error) {
                setError(error.message);
            }
            setIsLoading(false);
        };

        fetchRecipes();
    }, []);

    return (
        <div>
            <h2>Gestion des recettes</h2>
            {isLoading ? (
                <p>Chargement...</p>
            ) : error ? (
                <p>Erreur: {error}</p>
            ) : (
                <ul>
                    {recipes.map(recipe => (
                        <li key={recipe.id}>{recipe.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default RecipesManagement;
