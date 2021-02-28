import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

//custom component import
import RoundBtn from '../components/button';



function LoginSign({navigation}){
    return(
    <View style={styles.screen}>

    <Image
    source={require('../assets/images/choyceslogo.jpeg')}
    style={styles.image}/>

    <RoundBtn buttontext="Login"
        style={styles.loginBtn}
    />
    <RoundBtn buttontext="Sign Up"
        style={styles.signBtn}
    />

    </View>

    )
};

const styles=StyleSheet.create({
    screen: {
        flex:1,
    },
    loginBtn: {
        backgroundColor: '#ffa500',
    },
    signBtn: {
        backgroundColor: '#d6204e',
    },
    image: {
        width: '80%',
        resizeMode: 'contain',
        marginTop: 80,
        alignSelf: 'center',
    }
});
export default LoginSign;