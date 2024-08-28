import React, { useState } from 'react';
import './login.css'
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logique de soumission du formulaire
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
      <main>
      <div class="imgContainer">
      
      </div>
      <div class="formWrapper">
          <div class="formCard">
          <h2>Fomulaire de connexion</h2>
          <form onSubmit={handleSubmit}>
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
          </form>
          </div>
      </div>
    </main>
  );
}

export default Login;