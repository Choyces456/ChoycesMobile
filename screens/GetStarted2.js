import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';


import Logo from '../components/logo';
import Input from '../components/input';
import Btn from '../components/button';

const GetStarted2 = ({navigation, route}) => {
    const {type} = route.params;
    return(
        <View  style={styles.screen}>
            <Logo/>
            <View style={{flex: 2, textAlign: 'center', alignContent: 'center', top: -50, }}>
            <Text style={{marginTop: 30, fontSize: 25,textAlign:'center', fontWeight: 'bold', }}>
            Get Started with your {type} account
            </Text>
            </View>
            <View style={{flex: 10, justifyContent: 'flex-start', borderTopWidth: 2, borderColor: "rgba(100, 31, 152, 0.3)"}}>
            <ScrollView>
            <Input
                style={{backgroundColor: '#ffa500',height: 50, margin: 5,}}
                placeholder='Full Name'
                placeholderTextColor='white'
                iconName='person-circle-outline'
                />    
            <Input
                style={{backgroundColor: '#ff748c',height: 50, margin: 5,}}
                placeholder='Email'
                placeholderTextColor='white'
                iconName='mail-outline'
                />    

            <Input  
                style={{backgroundColor: '#00cc00',height: 50, margin: 5,}}
                placeholder='Phone'
                placeholderTextColor='white'
                iconName='call-outline'
                />    
            <Input
                style={{backgroundColor: '#23b5ce',height: 50, margin: 5,}}
                placeholder='Password'
                placeholderTextColor='white'
                iconName='lock-open-outline'
                />    
            <Input
                style={{backgroundColor: '#23b5ce',height: 50, margin: 5,}}
                placeholder='Password'
                placeholderTextColor='white'
                iconName='lock-open-outline'
                />
            <Btn 
                style={{backgroundColor: '#e700e7', width: '40%', height: 40, margin: 5,}}
                buttontext="Create"
            />
            
            
            <View style={styles.bottomLink}>
            <Text>
                Already have an account?
            </Text>
            


            <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}><Text style={{fontSize: 18, color: 'blue'}}>Login</Text></TouchableOpacity> 

        </View>
        </ScrollView>
            </View>

        </View>

    );

};


const styles = StyleSheet.create({

    screen: {
        flex: 1,
    },
    bottomLink: {
        flex: 1,
        marginTop: 20,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 20,
    }
   
})
export default GetStarted2;
