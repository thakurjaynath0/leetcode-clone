import React , { useState } from 'react';
import './Login.css';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const json = await response.json();
    localStorage.setItem("token", json.token);
  };

  return (
    <div id="login" className="flex-col">
      <h1>Login</h1>
      <div className="signup-form">
        <div className="subform">
          <label htmlFor="email">Email: </label>
          <input
            onChange={handleEmailChange}
            type="text"
            name="email"
            placeholder="Your Email"
            value={email}
          />
        </div>

        <div className="subform">
          <label htmlFor="password">Password: </label>
          <input
            onChange={handlePasswordChange}
            type="password" // Use type="password" for password input
            name="password"
            placeholder="Your Password"
            value={password}
          />
        </div>

        <button type="submit" id="Test" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
