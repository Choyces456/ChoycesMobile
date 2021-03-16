import React from 'react';
import {StyleSheet, View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import Logo from '../components/logo';

function Welcome({ navigation }){
    return(
        <TouchableWithoutFeedback 
        onPress={() => navigation.navigate('LoginSign')}>
        <View  style={styles.screen}>

       
        <Logo/>
        <Text style={styles.text}>
            WELCOME
        </Text>
        </View>

        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent: 'center'

    },
    image: {
        resizeMode: 'contain',
        marginTop: 120,
        alignSelf: 'center',
    },
    text: {
       
        fontSize:38,
        fontWeight: 'bold',
        alignSelf: 'center',
        top: -40

    }
})
export default Welcome;