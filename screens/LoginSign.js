import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';

//custom component import
import RoundBtn from '../components/button';
import Logo from '../components/logo'



const LoginSign = ({ navigation }) => {
    return (
        <View style={styles.screen}>

            <Logo />

            <RoundBtn buttontext="Login"
                screenName='LoginPage'
                style={styles.loginBtn}
            />

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