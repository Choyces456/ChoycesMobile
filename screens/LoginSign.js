import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';

//custom component import
import RoundBtn from '../components/button';
import Logo from '../components/logo'



const LoginSign = ({ navigation }) => {
    return (
        <View style={styles.screen}>

            <Logo />

<<<<<<< HEAD
    <RoundBtn buttontext="Login"
        style={styles.loginBtn}
        screenName='Welcome'
    />
=======
            <RoundBtn buttontext="Login"
                screenName='LoginPage'
                style={styles.loginBtn}
            />
>>>>>>> 82e221f87cecbf2a3c1cec3862610c9a6b09d3ba

            <RoundBtn buttontext="Sign Up"
                screenName='GetStarted'
                style={styles.signBtn}
            />



        </View>

    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    loginBtn: {
        backgroundColor: '#ffa500',
    },
    signBtn: {
        backgroundColor: '#d6204e',
    },
});
export default LoginSign;