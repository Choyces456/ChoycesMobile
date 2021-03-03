import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Logo from '../components/logo';
import DropList from '../components/droplist';


function GetStarted({navigation}){
    return(
        <View style={styles.screen}>
        <Logo/>
        <DropList>Are you..</DropList>



        <View style={styles.bottomLink}>
            <Text>
                Already have an account?
            </Text>


            <Text>Login</Text>
        </View>

        </View>
    )

};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    bottomLink: {
        marginTop: '75%',
        alignItems: 'center',
    }
});

export default GetStarted;