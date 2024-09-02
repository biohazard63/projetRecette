import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../auth.css';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');
    const [role, setRole] = useState('user');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (password !== verifyPassword) {
            setError("Les mots de passe ne correspondent pas");
            return;
        }

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/users', {
                name,
                email,
                password,
                role
            });

            if (response.status === 201) {
                setSuccess('Inscription réussie !');
                setName('');
                setEmail('');
                setPassword('');
                setVerifyPassword('');
                setRole('user');

                setTimeout(() => {
                    navigate('/login');
                }, 1500);
            } else {
                setError(response.data.message || 'Une erreur est survenue.');
            }
        } catch (err) {
            setError('Une erreur est survenue.');
        }
    };

    return (
        <div className='auth_container'>
            <div className="imgContainer">
                <img src="./../../public/images/1 (16).jpg" alt="placeholder" className="imgRegister" />
            </div>
            <div className="formWrapperRegister">
                <div className="formCard">
                    <h2>Formulaire d'Inscription</h2>
                    <form className='form_register' onSubmit={handleRegisterSubmit}>
                        <div className="registerField">
                            <label>Pseudo:</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <label>Email:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <label>Mot de passe:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <label>Vérifiez le mot de passe:</label>
                            <input
                                type="password"
                                value={verifyPassword}
                                onChange={(e) => setVerifyPassword(e.target.value)}
                                required
                            />
                            <label>Rôle:</label>
                            <select value={role} onChange={(e) => setRole(e.target.value)}>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                        {error && <p className="error">{error}</p>}
                        {success && <p className="success">{success}</p>}
                        <button className='main_button' type="submit">Inscription</button>
                        <p>Vous avez déjà un compte ? <a href="/login">Connexion</a></p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;