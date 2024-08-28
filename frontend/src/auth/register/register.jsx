import React, { useState } from 'react';
import '../auth.css';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        if (password !== verifyPassword) {
            setError("Les mots de passe ne correspondent pas");
            return;
        }
        setError('');
        // Logic for form submission
    };

    return (
        <main>
            <div className="imgContainer">
                {/* Image content */}
            </div>
            <div className="formWrapperRegister">
                <div className="formCard">
                    <h2>Fomulaire d'Inscription</h2>
                    <form onSubmit={handleRegisterSubmit}>
                        <div className="registerField">
                            <label>Email:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
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
                        <button type="submit">Connexion</button>
                        <p>Vous avez déjà un compte ? <a href="/login">connexion</a></p>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default Register;