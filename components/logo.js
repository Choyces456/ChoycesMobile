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
        width: '70%',
        maxHeight: '35%',
        resizeMode: 'contain',
        alignSelf: 'center',
    }
   
});
export default Logo;