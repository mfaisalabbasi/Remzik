import { useEffect } from 'react';

const LogoutScreen = ({ navigation }) => {
  useEffect(() => {
    // clear auth token / async storage here
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  }, []);

  return null;
};

export default LogoutScreen;