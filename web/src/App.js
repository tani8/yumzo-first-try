import React from 'react';
import AuthForm from './components/AuthForm';

function App() {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <h2>Register</h2>
      <AuthForm type="register" />
      <h2>Login</h2>
      <AuthForm type="login" />
    </div>
  );
}

export default App;
