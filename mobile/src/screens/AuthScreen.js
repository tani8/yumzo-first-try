import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';

const AuthScreen = ({ navigation }) => {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    GoogleSignin.configure({
      iosClientId: '20289258679-tnvupr0nsb64v6c70vn3s1m0j046ni55.apps.googleusercontent.com', // Replace with your iOS client ID
      scopes: ['profile', 'email'], // Define the scopes your app needs
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUser(userInfo);
      navigation.navigate('Home');
      console.log('USER INFO', userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        console.error(error);
      }
    }
  };

  return (
    <View>
      <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
      />
      {user && <Text>Welcome, {user.name}</Text>}
    </View>
  );
/*
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleAuth = async () => {
    try {
      const payload = { email, password };
      let response;
      if (type === 'register') {
        payload.name = name;
        response = await axios.post('http://localhost:5001/api/auth/register', {
          headers: {
            'Authorization': `Bearer ${process.env.JWT_SECRET}`
          }
        }, payload);
      } else {
        response = await axios.post('http://localhost:5001/api/auth/login', {
          headers: {
            'Authorization': `Bearer ${process.env.JWT_SECRET}`
          }
        }, payload);
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
  */
};

export default AuthScreen;