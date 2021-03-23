import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './navigation/Navigation';
import * as firebase from 'firebase';
import ApiKeys from './constants/ApiKeys';

// Initialize Firebase
if(!firebase.apps.length) {firebase.initializeApp(ApiKeys.FirebaseConfig);}

export default function App() {
  return (
   
    <NavigationContainer>
      <Navigator/>
    </NavigationContainer>
    
  )
};
