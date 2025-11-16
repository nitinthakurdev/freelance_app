import logo from '@/assets/logo/logo.png';
import { HandleHightAcordingly } from '@/utils/heightDifference';
import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { Alert, BackHandler, Dimensions, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function WelcomeScreen() {
  const { height } = Dimensions.get('window');

  useEffect(() => {
    const backpress = () => {
      Alert.alert('Close App', 'Are you sure you want to close ', [
        { text: 'cancel', onPress: () => null },
        { text: 'Close', onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backpress);
    return () => backHandler.remove();
  }, []);

  return (
    <ScrollView className="flex-1 bg-black">
      <ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60' }} resizeMode="cover" className="flex-1">
        {/* dark overlay */}
        <View className="absolute inset-0 bg-black/55" />

        <View className="flex-1 justify-center items-center top-16">
          {/* Top logo */}
          <View className="items-center mb-8 flex-1 " style={{ height: HandleHightAcordingly(height) }}>
            <View className="w-28 h-28 rounded-full bg-white/90 items-center justify-center shadow-md overflow-hidden">
              <Image source={logo} resizeMode="contain" className="h-48 w-48" />
            </View>
            <Text className="text-white/90 mt-3 text-lg font-semibold">Freelance Market Place</Text>
          </View>

          <View className={` bg-white w-full rounded-tl-[70px] rounded-tr-[70px] px-5 py-5 flex-col justify-between`} style={{ height: height - 400 }}>
            <View className="py-4">
              <Text className="text-4xl  font-bold text-center py-3">Build Your Project With the Best</Text>
              <Text className=" text-black/70 text-lg font-medium text-center">Hire skilled professionals and get your projects done with speed, quality, and trust.</Text>
            </View>

            <View className="pb-4">
              <TouchableOpacity className="h-16 w-full rounded-full bg-background mb-7 items-center justify-center" onPress={() => router.replace('/(auth)/Login')}>
                <Text className="text-2xl text-white font-bold">Get Started</Text>
              </TouchableOpacity>
              <Text className="text-black/60 text-xs text-center">By continuing you agree to our Terms & Privacy</Text>
            </View>
          </View>

          {/* small footer */}
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
