import React, { useState } from 'react';
import axios from 'axios';

const AuthForm = ({ type }) => {
/*
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { email, password };
      if (type === 'register') {
        payload.name = name;
        const response = await axios.post('http://localhost:5000/api/auth/register', {
          headers: {
            'Authorization': `Bearer ${process.env.JWT_SECRET}`
          }
        }, payload);
        setMessage(`Registered successfully! Token: ${response.data.token}`);
      } else {
        const response = await axios.post('http://localhost:5000/api/auth/login', {
          headers: {
            'Authorization': `Bearer ${process.env.JWT_SECRET}`
          }
        }, payload);
        setMessage(`Logged in successfully! Token: ${response.data.token}`);
      }
    } catch (error) {
      setMessage('Error during authentication');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {type === 'register' && (
        <>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br />
        </>
      )}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <br />
      <button type="submit">{type === 'register' ? 'Register' : 'Login'}</button>
      <p>{message}</p>
    </form>
  );
  */
};

export default AuthForm;
