import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Logo from '../../components/logo';
import RoundBtn from '../../components/button';

import { Ionicons } from '@expo/vector-icons';

const EduLanding = ({navigation}) => {
    return (
        <View style={{flex:1, justifyContent: 'space-between'}}>
        <View style={{flex:2, justifyContent: 'center'}}>
            <Logo/>
            <View style={{flex:0.5, marginTop: 30,justifyContent: 'flex-end'}}>
            <Text  style={{ textAlign: 'center', fontSize: 40, fontWeight: 'bold', }}>
                Welcome 'insert name'
            </Text>
        </View>
        </View>
        
       <View style={{flex:2, justifyContent:'flex-start'}}>

       <View style={styles.materialsBtn}>
       <Ionicons name='library-outline' size={40} color="white" style={{marginLeft: 15}} />
       
        <RoundBtn 
            style={{width: 200, fontSize:30}}
             buttontext="Materials"
             onPress={() => navigation.navigate('Welcome')}>
            
            </RoundBtn>
            </View>
            <View style={styles.lessonBtn}>
            <Image source={require("../../assets/images/edit-property-16.png")}  style={{marginLeft: 20,alignSelf: 'center', height: 30, width: 25}}/>


             <RoundBtn 
             style={{width: 200}}
             buttontext="Lesson Plans"
                
                onPress={() => navigation.navigate('Welcome')}
            >
            </RoundBtn>
            </View>
            <View style={styles.newsBtn}>
            <Ionicons name='newspaper-outline' size={40} color="white" style={{marginLeft: 15}} />


             <RoundBtn 
             style={{width: 200}}
             buttontext="NewsLetter"
                
                onPress={() => navigation.navigate('Welcome')}
            >
            </RoundBtn>
            </View>
            <View style={styles.discountBtn}>
            <Image source={require("../../assets/images/procent-badge-16.png")}  style={{marginLeft: 20,alignSelf: 'center', height: 30, width: 30}}/>


             <RoundBtn 
             style={{width: 200}}
             buttontext="Discount"
                
                onPress={() => navigation.navigate('Welcome')}
            ></RoundBtn>
            </View>
            </View>
        </View>
    )
}

export default EduLanding

const styles = StyleSheet.create({
    materialsBtn: {
        flexDirection: 'row',
        alignSelf: 'center',
        width: '80%',
        borderRadius: 20,
        height: 50,
        backgroundColor: '#ffa500',
        fontSize: 22,
    },
    lessonBtn: {
        flexDirection: 'row',
        alignSelf: 'center',
        width: '80%',
        borderRadius: 20,
        height: 50,
        backgroundColor: '#ff748c',
        marginTop: 15,
        fontSize: 22,

    },
    newsBtn: {
        flexDirection: 'row',
        alignSelf: 'center',
        width: '80%',
        borderRadius: 20,
        height: 50,
        backgroundColor: '#23b5ce',
        marginTop: 15,
        fontSize: 22,

    },
    discountBtn: {
        flexDirection: 'row',
        alignSelf: 'center',
        width: '80%',
        borderRadius: 20,
        height: 50,
        backgroundColor: '#00cc00',
        marginTop: 15,
        fontSize: 22,

    },
})
