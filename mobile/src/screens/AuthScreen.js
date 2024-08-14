import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const AuthScreen = ({ type }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleAuth = async () => {
    try {
      const payload = { email, password };
      let response;
      if (type === 'register') {
        payload.name = name;
        response = await axios.post('http://localhost:5001/api/auth/register', payload);
      } else {
        response = await axios.post('http://localhost:5001/api/auth/login', payload);
      }
      Alert.alert('Success', `Token: ${response.data.token}`);
    } catch (error) {
      Alert.alert('Error', 'Authentication failed');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      {type === 'register' && (
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
          style={{ marginBottom: 10, borderBottomWidth: 1 }}
        />
      )}
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ marginBottom: 10, borderBottomWidth: 1 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ marginBottom: 10, borderBottomWidth: 1 }}
      />
      <Button title={type === 'register' ? 'Register' : 'Login'} onPress={handleAuth} />
    </View>
  );
};

export default AuthScreen;
