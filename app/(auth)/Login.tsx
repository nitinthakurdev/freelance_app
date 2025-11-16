import logo from '@/assets/logo/logo.png';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { BackHandler, Dimensions, Image, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const Login = () => {
  const { height } = Dimensions.get('window');

  // ---------------- all useState here ----------------------

  const [showPassword, setShowPassword] = useState<boolean>(false);

  // --------------- functions and logics here --------------------
  const backhandler = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/(auth)/Welcome');
    }
    return true;
  };

  // ------------------- all useeffects here -----------------
  useEffect(() => {
    const backpress = BackHandler.addEventListener('hardwareBackPress', backhandler);
    return () => backpress.remove();
  });

  return (
    <ScrollView className="flex-1 bg-black">
      <ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60' }} resizeMode="cover" className="flex-1">
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className="flex-1" style={{ minHeight: height }}>
          {/* dark overlay */}
          <View className="absolute inset-0 bg-black/55" />

          <View className="flex-1 justify-center items-center top-16">
            {/* Top logo */}
            <View className="items-center mb-8 flex-1 h-36 ">
              <View className="w-28 h-28 rounded-full bg-white/90 items-center justify-center shadow-md overflow-hidden">
                <Image source={logo} resizeMode="contain" className="h-48 w-48" />
              </View>
              <Text className="text-white/90 mt-3 text-lg font-semibold">Freelance Market Place</Text>
            </View>

            <View className={` bg-white w-full rounded-tl-[70px] rounded-tr-[70px] px-5 py-10 flex-col `} style={{ minHeight: height - 200 }}>
              <Text className="text-3xl font-bold pt-1 text-center mb-4">Login to your account</Text>
              <View className="py-5 flex-col ">
                <View className="py-3">
                  <Text className="text-xl font-semibold mb-2">Email or username</Text>
                  <TextInput
                    // value=
                    // onChangeText={}
                    placeholder="you@example.com or username"
                    placeholderTextColor="#9CA3AF"
                    className="border-2 border-gray-200 h-14 text-lg px-4 rounded-xl bg-white"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    returnKeyType="next"
                    accessible
                    accessibilityLabel="email or username input"
                  />
                </View>
                <View className="py-3">
                  <Text className="text-xl font-semibold mb-2">Password</Text>
                  <TextInput
                    // value=
                    // onChangeText={}
                    placeholder="**********"
                    placeholderTextColor="#9CA3AF"
                    className="border-2 border-gray-200 h-14 text-lg px-4 rounded-xl bg-white"
                    autoCapitalize="none"
                    returnKeyType="next"
                    accessible
                    accessibilityLabel="password"
                    secureTextEntry={!showPassword}
                  />
                </View>
                <View className="flex flex-row justify-start py-2 px-2">
                  <BouncyCheckbox
                    fillColor="#16A34A" // optional: checkbox color
                    unFillColor="#FFFFFF"
                    text="texting"
                    size={20}
                    onPress={(isChecked: boolean) => setShowPassword(isChecked)}
                  />
                  <Text className="-ml-2 text-gray-700 text-base font-mediums">Show Password</Text>
                </View>

                <TouchableOpacity className="bg-background h-14 rounded-xl items-center justify-center mt-5">
                  <Text className="text-primary text-2xl font-bold ">Login</Text>
                </TouchableOpacity>
              </View>
              <Text className="text-center">
                Don&apos;t have an accout ?{' '}
                <Text className="text-blue-600 font-semibold" onPress={() => router.replace('/(auth)/Register')}>
                  Register here{' '}
                </Text>
              </Text>
            </View>

            {/* small footer */}
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </ScrollView>
  );
};

export default Login;
