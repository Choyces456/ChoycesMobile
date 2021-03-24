import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './navigation/Navigation';



export default function App() {
  return (
   
    <NavigationContainer>
      <Navigator/>
    </NavigationContainer>
    
  )
};
