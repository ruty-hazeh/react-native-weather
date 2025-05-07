import React, { useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>🌦️ מזג האוויר</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2196F3',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold'
  }
});