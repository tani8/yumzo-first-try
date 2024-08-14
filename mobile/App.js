import React from 'react';
import AuthScreen from './src/screens/AuthScreen';

const App = () => {
  return (
    <>
      <AuthScreen type="register" />
      <AuthScreen type="login" />
    </>
  );
};

export default App;
