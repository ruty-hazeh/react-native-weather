
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './src/components/HomeScreen';
import WeatherScreen from './src/components/WeatherScreen';
import SplashScreen from './src/components/SplashScreen';

import 'react-native-gesture-handler'  
const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'חיפוש עיר' }} />
          <Stack.Screen name="Weather" component={WeatherScreen} options={{ title: 'מזג האוויר' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}