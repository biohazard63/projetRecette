import React, { useState } from 'react';
import '../auth.css';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Logique de soumission du formulaire
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
      <main>
      <div class="imgContainer">
      
      </div>
      <div class="formWrapperLogin">
          <div class="formCard">
          <h2>Fomulaire de connexion</h2>
          <form onSubmit={handleLoginSubmit}>
              <div class="loginField">
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
              <button type="submit">Connexion</button>
              <p>Pas encore de compte ? <a href="/register">Créer un compte</a></p>

          </form>
          </div>
      </div>
    </main>
  );
}

export default Login;