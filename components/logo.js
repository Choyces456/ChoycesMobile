import React from 'react';
import {StyleSheet, Image} from 'react-native';



const Logo = () =>{
    return(
        <Image
    source={require('../assets/images/choyceslogo.jpeg')}
    style={styles.image}/>

    )
};

const styles=StyleSheet.create({
    image: {
        width: '80%',
        resizeMode: 'contain',
        marginTop: 80,
        alignSelf: 'center',
    }
   
});
export default Logo;