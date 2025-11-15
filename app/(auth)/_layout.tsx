import { Stack } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { StackAnimationTypes } from 'react-native-screens';

const AuthLayout = () => {
  const animatinAccordingPlatform = (): StackAnimationTypes => {
    if (Platform.OS === 'android') {
      return 'slide_from_right';
    } else {
      return 'ios_from_right';
    }
  };

  return (
    <Stack screenOptions={{ headerShown: false, animation: animatinAccordingPlatform() }}>
      <Stack.Screen name="Welcome" />
      <Stack.Screen name="Login" />
      <Stack.Screen name="Register" />
    </Stack>
  );
};

export default AuthLayout;
