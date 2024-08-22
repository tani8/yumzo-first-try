const [user, setUser] = React.useState(null);

const signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    setUser(userInfo); // Set the user info
    navigation.navigate('Home');
  } catch (error) {
    console.error(error);
    // Handle errors
  }
};

