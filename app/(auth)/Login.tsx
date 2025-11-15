import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { BackHandler, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = () => {
  useEffect(() => {
    const backHandler = () => {
      router.back();
      return true;
    };

    const handleBackPress = BackHandler.addEventListener('hardwareBackPress', backHandler);
    return () => handleBackPress.remove();
  }, []);

  return (
    <SafeAreaView>
      <Text>Login</Text>
    </SafeAreaView>
  );
};

export default Login;
