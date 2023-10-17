import React, { useState } from 'react';

import './Signup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSignup = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3000/signup', {
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
    console.log(json);
  };

  return (
    <div id="signup" className='flex-col'>
      <h1>Signup</h1>
      <form className='signup-form' method="post" action='/signup'>
        <div className='subform'>
          <label htmlFor="email">Email: </label>
          <input
            onChange={handleEmailChange}
            type="text"
            name='email'
            placeholder='Your Email'
            value={email}
          />
        </div>

        <div className='subform'>
          <label htmlFor="password">Password: </label>
          <input
            onChange={handlePasswordChange}
            type="password" // Use type="password" for password input
            name='password'
            placeholder='Your Password'
            value={password}
          />
        </div>

        <button type="submit" id="Test" onClick={handleSignup}>
          SIGNUP
        </button>
      </form>
    </div>
  );
};

export default Signup;

// abcd@gmail.com
// 123456789