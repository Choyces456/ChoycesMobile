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
                style={styles.loginBtn}
                onPress={() => navigation.navigate('LoginPage')}
            />

            <RoundBtn buttontext="Sign Up"
                style={styles.signBtn}
                onPress={() => navigation.navigate('GetStarted')}
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