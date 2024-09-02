import React, { useState, useEffect } from 'react';

function UsersManagement() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // Fonction pour récupérer les utilisateurs du backend
    useEffect(() => {
        const fetchUsers = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('/api/users'); // Remplacez par votre point de terminaison API réel
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                setError(error.message);
            }
            setIsLoading(false);
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h2>Gestion des utilisateurs</h2>
            {isLoading ? (
                <p>Chargement...</p>
            ) : error ? (
                <p>Erreur: {error}</p>
            ) : (
                <ul>
                    {users.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default UsersManagement;
