// App.js

import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './firebase';
import './App.css';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [userData, setUserData] = useState({ email: '', password: '' });

  // Handle Registration
  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, userData.email, userData.password);
      alert('User registered successfully!');
      setIsRegistering(false);
    } catch (error) {
      alert(`Registration error: ${error.message}`);
    }
  };

  // Handle Login
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, userData.email, userData.password);
      setIsAuthenticated(true);
    } catch (error) {
      alert(`Login error: ${error.message}`);
    }
  };

  // Handle Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsAuthenticated(false);
    } catch (error) {
      alert(`Logout error: ${error.message}`);
    }
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <div>
          <h1>Welcome!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="auth-container">
          <h1>{isRegistering ? 'Register' : 'Login'}</h1>
          <input
            type="email"
            placeholder="Email"
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={userData.password}
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
          />
          <button onClick={isRegistering ? handleRegister : handleLogin}>
            {isRegistering ? 'Register' : 'Login'}
          </button>
          <p>
            {isRegistering ? 'Already have an account?' : "Don't have an account?"}{' '}
            <span
              className="toggle-auth"
              onClick={() => setIsRegistering((prev) => !prev)}
            >
              {isRegistering ? 'Login here' : 'Register here'}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
