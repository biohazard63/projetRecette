import React, { useState } from 'react';
import '../auth.css';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [role, setRole] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');


    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (password !== verifyPassword) {
            setError("Les mots de passe ne correspondent pas");
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:8000/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const data = await response.json();
                setError(data.message || 'Une erreur est survenue.');
                return;
            }

            setSuccess('Inscription réussie !');
            setName('');
            setEmail('');
            // setRole('');
            setPassword('');
            setVerifyPassword('');
        } catch (err) {
            setError('Une erreur est survenue.');
        }

    };

    return (
        <div className='auth_container'>
            <div className="imgContainer">
                <img src="./../../public/images/1 (16).jpg" alt="placeholder" className="imgRegister"/>
            </div>
            <div className="formWrapperRegister">
                <div className="formCard">
                    <h2>Fomulaire d'Inscription</h2>
                    <form className='form_register' onSubmit={handleRegisterSubmit}>
                        <div className="registerField">
                            <label>Pseudo:</label>
                            <input
                                type="name"
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
                            {/* <label>Role:</label>
                            <input
                                type="role"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                required
                            /> */}
                        </div>

                        <div className="registerField">
                            <label>Mot de passe:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="registerField">
                            <label>Vérifiez le mot de passe:</label>
                            {error && <p className="error">{error}</p>}
                            <input
                                type="password"
                                value={verifyPassword}
                                onChange={(e) => setVerifyPassword(e.target.value)}
                                required
                            />
                        </div>
                        {error && <p className="error">{error}</p>}
                        {success && <p className="success">{success}</p>}
                        <button className='main_button' type="submit">Connexion</button>
                        <p>Vous avez déjà un compte ? <a href="/login">connexion</a></p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;