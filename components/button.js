import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';



const Button = props =>{
    return(
        <TouchableOpacity  activeOpacity={0.6}>
        <View style={{...styles.signUpButton, ...props.style}}>
            <Text style={styles.signUpButtonText}>
                {props.buttontext}
            </Text>
        </View>
    </TouchableOpacity>

    )
};

const styles=StyleSheet.create({
    signUpButton: {
        marginTop: 10,
        width: '80%',
        alignSelf: 'center',
        height: 35,
        borderRadius: 50,
        alignItems: "center"

    },
    signUpButtonText: {
        fontSize: 18,
        color: 'white',
        paddingTop: 5,
    },
});
export default Button;