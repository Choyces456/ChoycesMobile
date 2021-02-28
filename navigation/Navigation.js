import React from 'react'
import {Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


//login/signup screens
import Welcome from '../screens/Welcome';
import LoginSign from '../screens/LoginSign';

const Stack = createStackNavigator();

function RootStack({navigation}) {
    return(
    <Stack.Navigator 
    initialRouteName="Welcome">
    
    <Stack.Screen
    name="Welcome"
    component={Welcome}
    options={{headerShown:false}}/>

    <Stack.Screen
    name="LoginSign"
    component={LoginSign}
    options={{headerShown:false}}/>


    </Stack.Navigator>
    )
}



export default RootStack;