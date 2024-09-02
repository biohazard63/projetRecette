import React, { useState, useEffect } from 'react';

function CategoriesManagement() {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // Fetch categories from the backend
    useEffect(() => {
        const fetchCategories = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('/api/categories');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                setError(error.message);
            }
            setIsLoading(false);
        };

        fetchCategories();
    }, []);

    return (
        <div>
            <h2>Gestion des Catégories</h2>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <ul>
                    {categories.map(category => (
                        <li key={category.id}>{category.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default CategoriesManagement;
