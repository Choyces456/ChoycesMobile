import React from 'react';
import {StyleSheet, View, Text, Image, TouchableWithoutFeedback} from 'react-native';


function Welcome({ navigation }){
    return(
        <TouchableWithoutFeedback 
        onPress={() => navigation.navigate('LoginSign')}>
        <View  style={styles.screen}>

        <Image
        source={require('../assets/images/choyceslogo.jpeg')}
            style={styles.image}
        />


        <Text style={styles.text}>
            WELCOME!
        </Text>
        </View>

        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex:1,
        alignContent: 'center'

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