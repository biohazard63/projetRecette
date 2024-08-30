import React, { useState } from 'react';
import '../auth.css';
function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // const handleLoginSubmit = (event) => {
  //   event.preventDefault();
  //   // Logique de soumission du formulaire
  //   // console.log('Name:', name);
  //   // console.log('Email:', email);
  //   // console.log('Password:', password);
  // };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await fetch('http://127.0.0.1:8000/api/users/{id}', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setSuccess('Connexion réussie !');
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
      <main>
      <div class="imgContainer">
          <img src="./images/1 (4).jpg" alt="placeholder" className="imgRegister"/>
      </div>
      <div class="formWrapperLogin">
          <div class="formCard">
          <h2>Fomulaire de connexion</h2>
          <form onSubmit={handleLoginSubmit}>
              <div class="loginField">
                <label>Nom:</label>
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
              </div>
              <div class="loginField">
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
              <button type="submit">Connexion</button>
              <p>Pas encore de compte ? <a href="/register">Créer un compte</a></p>

          </form>
          </div>
      </div>
    </main>
  );
}

export default Login;