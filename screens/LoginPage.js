import React from 'react';
import { StyleSheet, View, Image } from 'react-native';



/* 
I am currently using the custom component import, but I will change it to a standalone since it'll be a submission button. Also, I think I will turn these inputs into pure components tomorrow 

Update 1: Created an input component, but not sure about passing down values, will look into "props." Also needs a true submit button. secureTextEntry deals with obscuring password input. 
*/

import RoundBtn from '../components/button';
import Input from '../components/input';



function LoginPage({ navigation }) {
    return (
        <View style={styles.screen}>

            <Image
                source={require('../assets/images/choyceslogo.jpeg')}
                style={styles.image} />

            <Input
                style={styles.username}
                placeholder='Username'
                placeholderTextColor='white'
                iconName='person-circle-outline'
                />        

            <Input
                style={styles.password}
                placeholder='Password'
                placeholderTextColor='white'
                iconName='lock-open-outline'
               //secureTextEntry 
            />
           
            <RoundBtn buttontext="Login"
                style={styles.loginBtn}
                screenName='Welcome'
            />

        </View>

    )

};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    username: {
        backgroundColor: '#ffa500',
    },

    password: {
        backgroundColor: '#d6204e',
    },
    loginBtn: {
        backgroundColor: '#23b5ce',
        marginTop: 15,
    },
    image: {
        width: '80%',
        resizeMode: 'contain',
        marginTop: 80,
        alignSelf: 'center',
    }
});
export default LoginPage;
