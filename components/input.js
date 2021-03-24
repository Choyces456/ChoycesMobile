import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

/* This is the input component. The <Text> is just to make sure text is being passed. I still need to figure out it the value is saved in different input components
*/
const Input = ({ iconName, value, onChangeText, placeholder, placeholderTextColor, secureTextEntry, ...props }) => {
    const { inputStyle, containerStyle } = styles;
    return (
        <View style={{ ...styles.containerStyle, ...props.style }}>
            <Ionicons name={iconName}size={24} color="white" style={styles.icon} />
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                autoCorrect={false}
                style={inputStyle}
                autoCapitalize='none'>
            </TextInput>
            
        </View>
    )
};
const styles = StyleSheet.create({
    containerStyle: {
        height: 35,
        borderRadius: 50,
        marginTop: 15,
        width: '80%',
        alignSelf: 'center',
        fontSize: 18,
        flexDirection:'row',
        alignItems:'center',
    },
    icon: {
        paddingLeft:20,
        paddingRight: 5,
    },
    inputStyle: {
        alignItems:'center',
        color: 'white',
        fontSize: 20,
        paddingTop: 5,
    }
});

export default Input;

