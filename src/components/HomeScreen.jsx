// import React, { useState } from 'react';
// import {
//   Text,
//   TextInput,
//   StyleSheet,
//   KeyboardAvoidingView,
//   Platform,
//   View,
//   TouchableOpacity,
//   ImageBackground
// } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import * as Animatable from 'react-native-animatable';
// import { SafeAreaView } from 'react-native-safe-area-context';

// export default function HomeScreen({ navigation }) {
//   const [city, setCity] = useState('');

//   const handleSearch = () => {
//     if (city.trim() !== '') {
//       navigation.navigate('Weather', { city });
//     }
//   };

//   return (
//     <ImageBackground
//       source={require('../assets/images/background.jpg')} // נתיב לתמונה שלך
//       style={styles.background}
//       resizeMode="cover"
//     >
//       <SafeAreaView style={styles.safeArea}>
//         <KeyboardAvoidingView
//           style={styles.container}
//           behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         >
//           <Animatable.View animation="fadeInDown" duration={1000}>
//             <Text style={styles.label}>הכנס שם עיר</Text>
//           </Animatable.View>

//           <Animatable.View animation="fadeInLeft" duration={1000} delay={300}>
//             <TextInput
//               style={styles.input}
//               placeholder="לדוג' Tel Aviv"
//               value={city}
//               onChangeText={setCity}
//             />
//           </Animatable.View>

//           <Animatable.View
//             animation="bounceIn"
//             delay={600}
//             style={styles.buttonContainer}
//           >
//             <TouchableOpacity onPress={handleSearch}>
//               <Icon name="search" size={30} color="#fff" />
//             </TouchableOpacity>
//           </Animatable.View>
//         </KeyboardAvoidingView>
//       </SafeAreaView>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//   },
//   safeArea: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//   },
//   label: {
//     fontSize: 18,
//     marginBottom: 10,
//     textAlign: 'center',
//     color: '#fff',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     backgroundColor: 'rgba(255,255,255,0.8)',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 20,
//   },
//   buttonContainer: {
//     backgroundColor: '#2196F3',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
// });



import React, { useState } from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  View,
  TouchableOpacity
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen({ navigation }) {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city.trim() !== '') {
      navigation.navigate('Weather', { city });
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <Animatable.View animation="fadeInDown" duration={1000}>
          <Text style={styles.label}>הכנס שם עיר</Text>
        </Animatable.View>

        <Animatable.View animation="fadeInLeft" duration={1000} delay={300}>
          <TextInput
            style={styles.input}
            placeholder="לדוג' Tel Aviv"
            value={city}
            onChangeText={setCity}
          />
        </Animatable.View>

        <Animatable.View
          animation="bounceIn"
          delay={600}
          style={styles.buttonContainer}
        >
          {/* <TouchableOpacity onPress={handleSearch}>
            <Icon name="search" size={30} color="#fff"/>
          </TouchableOpacity> */}
          <TouchableOpacity onPress={handleSearch}>
            <Text style={{ fontSize: 30, color: "#fff" }}>🔍</Text> 
        </TouchableOpacity>
        </Animatable.View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff', // ניתן לשנות לפי הצורך
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});
