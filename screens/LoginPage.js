import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

/* 
I am currently using the custom component import, but I will change it to a standalone since it'll be a submission button. Also, I think I will turn these inputs into pure components tomorrow 
*/

import RoundBtn from '../components/button';



function LoginPage({navigation}){
    return(
    <View style={styles.screen}>

    <Image
    source={require('../assets/images/choyceslogo.jpeg')}
    style={styles.image}/> 

    <TextInput
    style={styles.username}
    placeholder='Username'
    placeholderTextColor='white'
    //onChangeText={text => onChangeText(text)}
    />

    <TextInput
    style={styles.password}
    placeholder='Password'
    placeholderTextColor='white'
    //onChangeText={text => onChangeText(text)}
    />

    <RoundBtn buttontext="Login"
        style={styles.loginBtn}
    />

    </View>

    )
};

const styles=StyleSheet.create({
    screen: {
        flex:1,
    },
    username:{
        backgroundColor: '#ffa500',  
        height: 35,
        borderRadius: 50,
        marginTop: 15,
        width: '80%',
        textAlign: 'center',
        alignSelf: 'center',
        alignItems: "center",
        fontSize: 18,
    },
    password:{
        backgroundColor: '#d6204e',  
        height: 35,
        borderRadius: 50,
        marginTop: 15,
        width: '80%',
        textAlign: 'center',
        alignSelf: 'center',
        alignItems: "center",
        fontSize: 18,

    },
    loginBtn: {
        backgroundColor: '#23b5ce',
        marginTop:15,
    },
    image: {
        width: '80%',
        resizeMode: 'contain',
        marginTop: 80,
        alignSelf: 'center',
    }
});
export default LoginPage;
