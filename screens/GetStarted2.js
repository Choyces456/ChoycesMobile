import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Alert, TextInput } from 'react-native';
import { firebase } from '../src/firebase/config';


import Logo from '../components/logo';
import { Ionicons } from '@expo/vector-icons';
import Btn from '../components/button';



const GetStarted2 = ({ navigation, route }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verify, setVerify] = useState('');
    const [phone, setPhone] = useState('');

    const { type } = route.params;
    const onRegisterPress = () => {

        if (password !== verify) {
            Alert.alert("Passwords don't match.")
            return
        }
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    email,
                    name,
                    phone,
                    type
                };
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        Alert.alert("Profile Created!")
                        navigation.navigate('LoginPage')
                    })
                    .catch((error) => {
                        Alert.alert(error.message)
                    });
            })
            .catch((error) => {
                Alert.alert(error.message)
            })

    }
    return (
        <View style={styles.screen}>
            <Logo />
            <View style={{ flex: 2, textAlign: 'center', alignContent: 'center', top: -50, }}>
                <Text style={{ marginTop: 30, fontSize: 25, textAlign: 'center', fontWeight: 'bold', }}>
                    Get Started with your {type} account
            </Text>
            </View>
            <View style={{ flex: 10, justifyContent: 'flex-start', borderTopWidth: 2, borderColor: "rgba(100, 31, 152, 0.3)" }}>
                <ScrollView>

                    <View style={{
                        flex: 1, flexDirection: 'row', backgroundColor: '#ffa500', height: 45,
                        borderRadius: 50,
                        marginTop: 15,
                        width: '80%',
                        alignSelf: 'center',
                        fontSize: 18,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Ionicons name='person-circle-outline' size={30} color="white" style={styles.icon} />
                        <TextInput
                            style={styles.inputStyle}
                            placeholder='Full Name'
                            placeholderTextColor='white'
                            iconName='person-circle-outline'
                            value={name}
                            onChangeText={(value) => setName(value)}
                        />
                    </View>

                    <View style={{
                        flex: 1, flexDirection: 'row', backgroundColor: '#ff748c', height: 45,
                        borderRadius: 50,
                        marginTop: 15,
                        width: '80%',
                        alignSelf: 'center',
                        fontSize: 18,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Ionicons name='mail-outline' size={30} color="white" style={styles.icon} />
                        <TextInput
                            style={styles.inputStyle}
                            placeholder='Email'
                            placeholderTextColor='white'
                            value={email}
                            onChangeText={(value) => setEmail(value)}
                        />
                    </View>


                    <View style={{
                        flex: 1, flexDirection: 'row', backgroundColor: '#00cc00', height: 45,
                        borderRadius: 50,
                        marginTop: 15,
                        width: '80%',
                        alignSelf: 'center',
                        fontSize: 18,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Ionicons name='call-outline' size={30} color="white" style={styles.icon} />
                        <TextInput
                            style={styles.inputStyle}
                            placeholder='Phone'
                            placeholderTextColor='white'
                            value={phone}
                            keyboardType='phone-pad'
                            onChangeText={(value) => setPhone(value)}
                        />
                    </View>

                    <View style={{
                        flex: 1, flexDirection: 'row', backgroundColor: '#23b5ce', height: 45,
                        borderRadius: 50,
                        marginTop: 15,
                        width: '80%',
                        alignSelf: 'center',
                        fontSize: 18,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Ionicons name='lock-open-outline' size={30} color="white" style={styles.icon} />
                        <TextInput
                            style={styles.inputStyle}
                            placeholder='Password'
                            placeholderTextColor='white'
                            secureTextEntry={true}
                            value={password}
                            onChangeText={(value) => setPassword(value)}
                        />
                    </View>

                    <View style={{
                        flex: 1, flexDirection: 'row', backgroundColor: '#23b5ce', height: 45,
                        borderRadius: 50,
                        marginTop: 15,
                        width: '80%',
                        alignSelf: 'center',
                        fontSize: 18,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Ionicons name='lock-open-outline' size={30} color="white" style={styles.icon} />
                        <TextInput
                            style={styles.inputStyle}
                            placeholder='Retype Password'
                            placeholderTextColor='white'
                            secureTextEntry={true}
                            value={verify}
                            onChangeText={(value) => setVerify(value)}
                        />
                    </View>
                    <Btn
                        style={{ backgroundColor: '#e700e7', width: '40%', height: 40, margin: 5, }}
                        buttontext="Create"
                        onPress={() => onRegisterPress()}
                    />


                    <View style={styles.bottomLink}>
                        <Text>
                            Already have an account?
            </Text>



                        <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}><Text style={{ fontSize: 18, color: 'blue' }}>Login</Text></TouchableOpacity>

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

    icon: {
        paddingLeft: 20,
        paddingRight: 5,
    },
    inputStyle: {
        textAlign:'center',
        width: '60%',
        color: 'white',
        fontSize: 20,
        paddingTop: 5,
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
