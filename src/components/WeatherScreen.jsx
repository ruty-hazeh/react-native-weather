import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Alert } from 'react-native';


export default function WeatherScreen({ route }) {
  const { city } = route.params;
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [closestIndex, setClosestIndex] = useState(null);

  useEffect(() => {
    fetchWeather();
    
  }, []);
  const apiKey = "aad7df59a6e513b8ee44dc47a57c2e15";
  const fetchWeather = async () => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
      );
      const data = await res.json();
      if (data.cod !== "200") {
        Alert.alert('שגיאה', data.message);
        return;
      }
      setWeather(data.list);
    } catch (error) {
      Alert.alert('שגיאה', 'קרתה שגיאה בטעינת הנתונים');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (weather) {
      const now = new Date();
      let minDiff = Infinity;
      let closest = null;

      weather.forEach((item, index) => {
        const diff = Math.abs(new Date(item.dt_txt) - now);
        if (diff < minDiff) {
          minDiff = diff;
          closest = index;
        }
      });

      setClosestIndex(closest);
    }
  }, [weather]);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#2196F3" />
      </View>
    );
  }

  if (!weather) return null;

  return (
    <FlatList
      data={weather}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => {
        const isClosest = index === closestIndex;

        return (
          <View style={[styles.item, isClosest && styles.closestItem]}>
            <Text style={[styles.date, isClosest && styles.closestText]}>
              {item.dt_txt} {isClosest ? '(בזמן הקרוב)' : ''}
            </Text>
            <Text style={[styles.temp, isClosest && styles.closestText]}>
              {(item.main.temp - 273.15).toFixed(1)}°C
            </Text>
            <Text style={isClosest && styles.closestText}>{item.weather[0].description}</Text>
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
  },
  date: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  temp: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  closestItem: {
    backgroundColor: '#ffecb3', // רקע צהוב בהיר
  },
  closestText: {
    color: '#bf360c',
    fontWeight: 'bold',
  },
});



// REACT_APP_API_KEY=aad7df59a6e513b8ee44dc47a57c2e15 
//REACT_APP_API_KEY=6c0ebecc2a26d6a3cfd8224b58fc1f89 #my




// {
//   "name": "myfirstapp",
//   "version": "1.0.0",
//   "main": "index.js",
//   "scripts": {
//     "start": "expo start",
//     "android": "expo start --android",
//     "ios": "expo start --ios",
//     "web": "expo start --web"
//   },
//   "dependencies": {
//     "@expo/metro-runtime": "~4.0.1",
//     "@expo/vector-icons": "^14.1.0",
//     "@react-native-async-storage/async-storage": "1.23.1",
//     "@react-native-community/cli": "latest",
//     "@react-native-community/masked-view": "^0.1.11",
//     "@react-native-masked-view/masked-view": "0.3.2",
//     "@react-navigation/native": "^7.1.8",
//     "@react-navigation/stack": "^7.3.1",
//     "expo": "~52.0.46",
//     "expo-splash-screen": "~0.29.24",
//     "expo-status-bar": "~2.0.1",
//     "fbjs": "^1.0.0",
//     "react": "18.3.1",
//     "react-dom": "18.3.1",
//     "react-native": "0.76.9",
//     "react-native-animatable": "^1.4.0",
//     "react-native-config": "^1.5.5",
//     "react-native-dotenv": "^3.4.11",
//     "react-native-gesture-handler": "~2.20.2",
//     "react-native-reanimated": "~3.16.1",
//     "react-native-safe-area-context": "4.12.0",
//     "react-native-screens": "~4.4.0",
//     "react-native-vector-icons": "^10.2.0",
//     "react-native-web": "~0.19.13",
//     "react-native-webview": "13.12.5"
//   },
//   "devDependencies": {
//     "@babel/core": "^7.20.0",
//     "@types/react": "~18.3.12",
//     "typescript": "^5.3.3"
//   },
//   "private": true
// }