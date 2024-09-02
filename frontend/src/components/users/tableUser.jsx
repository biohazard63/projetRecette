import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './tableUser.css';

const TableUser = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/users');
                setUsers(response.data);
            } catch (err) {
                setError('Une erreur est survenue lors de la récupération des utilisateurs.');
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="tableUserContainer">
            <h2>Liste des Utilisateurs</h2>
            {error && <p className="error">{error}</p>}
            <table className="userTable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nom</th>
                        <th>Email</th>
                        <th>Rôle</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableUser;