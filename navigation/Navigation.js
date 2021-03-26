import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';


//login/signup screens
import Welcome from '../screens/Welcome';
import LoginSign from '../screens/LoginSign';
import GetStarted from '../screens/GetStarted';
import LoginPage from '../screens/LoginPage';
import GetStarted2 from '../screens/GetStarted2';

//Educator
import EduLanding from '../screens/educator/EduLanding';

//Employee
import EmpLanding from '../screens/employee/EmpLanding';

//Student 
import StudentLanding from '../screens/student/StudentLanding';

//Parent 
import ParentLanding from '../screens/parent/ParentLanding';




const Stack = createStackNavigator();

function RootStack({navigation}) {
    return(
    <Stack.Navigator 
    initialRouteName="Welcome">
    
    <Stack.Screen
    // LOGIN REGISTER SECTION *************************************
    name="Welcome"
    component={Welcome}
    options={{headerShown:false}}/>

    <Stack.Screen
    name="LoginSign"
    component={LoginSign}
    options={{headerShown:false}}/>

    <Stack.Screen
    name="LoginPage"
    component={LoginPage}
    options={{headerShown:false}}/> 

    <Stack.Screen
    name="GetStarted"
    component={GetStarted}
    options={{headerShown:false}}/>

    <Stack.Screen
    name="GetStarted2"
    component={GetStarted2}
    options={{headerShown:false}}/>

    <Stack.Screen
    //Educator section *************************************************
    name="EduLanding"
    component={EduLanding}
    options={{headerShown:false}}/>

<Stack.Screen
    //Employee section *************************************************
    name="EmpLanding"
    component={EmpLanding}
    options={{headerShown:false}}/>

<Stack.Screen
    //Student section *************************************************
    name="StudentLanding"
    component={StudentLanding}
    options={{headerShown:false}}/>

<Stack.Screen
    //Parent section *************************************************
    name="ParentLanding"
    component={ParentLanding}
    options={{headerShown:false}}/>


    </Stack.Navigator>
    )
}



export default RootStack;