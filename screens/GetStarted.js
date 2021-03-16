import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import RoundBtn from '../components/button';
import Logo from '../components/logo';
import { Picker } from 'react-native-picker-dropdown'
import { Ionicons } from '@expo/vector-icons';


function GetStarted({navigation}){

    const [loginType, setLoginType] = useState("educator");
    
    var type = `{type: "${loginType}"}`;
    
    return(
        <View style={styles.screen}>
        <Logo/>
        <View style={styles.container}>
                <Ionicons name="person-outline" size={24} color="white" style={styles.icon} />
        <Picker
        prompt= "select a login type"
        style={styles.picker}
        selectedValue={loginType}
        onValueChange={(itemValue, itemIndex) =>
        setLoginType(itemValue)}
        mode="dropdown"
        textStyle={styles.pickerText}
        >

                    <Picker.Item label="Educator" value="educator" key="1"/>
                    <Picker.Item label="Employee" value="employee" key="2"/>
                    <Picker.Item label="Parent" value="parent" key="3"/>
                    <Picker.Item label="Student" value="student"  key="4"/>

        </Picker>
        </View>
        <View>
        <RoundBtn buttontext="Continue"
                style={styles.signBtn}
                onPress={() => navigation.navigate('GetStarted2', {
                    type: loginType
                })}
            />
        </View>



        <View style={styles.bottomLink}>
            <Text>
                Already have an account?
            </Text>


            <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}><Text style={{fontSize: 18, color: 'blue'}}>Login</Text></TouchableOpacity> 
        </View>

        </View>
    )

};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'flex-end'
    },
    container: {
        flex: 0.4,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '85%',
        bottom: -20,
        minHeight: 50,
        maxHeight: 50,
        borderRadius: 20,
        backgroundColor: '#ffa500',
        alignSelf: 'center',
        alignItems: 'baseline'


    },
    icon: {
        paddingLeft: 10,
        paddingTop: 5,
    },
    picker: {
        flex: 1,
        alignSelf:'flex-end',
        height: 30,
        

    },
    pickerText: {
        flex: 1,
        color: '#FFFFFF',
        fontSize: 18,
        textAlign: 'center'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    signBtn: {
        marginTop: "10%",
        height: 40,
        textAlign: 'center',
        backgroundColor: '#d6204e',
    },
    bottomLink: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: "20%",
    }
});

export default GetStarted;