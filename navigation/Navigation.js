import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';


//login/signup screens
import Welcome from '../screens/Welcome';
import LoginSign from '../screens/LoginSign';
import GetStarted from '../screens/GetStarted';

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

    <Stack.Screen
    name="GetStarted"
    component={GetStarted}
    options={{headerShown:false}}/>


    </Stack.Navigator>
    )
}



export default RootStack;