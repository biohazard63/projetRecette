import React, { useState } from 'react';
import axios from 'axios';
import '../auth.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', {
        email,
        password
      });

      if (response.status === 200) {
        setSuccess('Connexion réussie !');
        // Vous pouvez rediriger l'utilisateur ou effectuer d'autres actions ici
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
          <img src="./images/1 (4).jpg" alt="placeholder" className="imgRegister"/>
      </div>
      <div className="formWrapperLogin">
          <div className="formCard">
          <h2>Fomulaire de connexion</h2>
          <form className='form_login' onSubmit={handleLoginSubmit}>
              <div className="loginField">
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
              </div>
              <div className="loginField">
                <label>Mot de passe:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
              </div>
              {error && <p className="error">{error}</p>}
              {success && <p className="success">{success}</p>}
              <button className='main_button' type="submit">Connexion</button>
              <p>Pas encore de compte ? <a href="/register">Créer un compte</a></p>
          </form>
          </div>
      </div>
    </div>
  );
}

export default Login;