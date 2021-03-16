import React from 'react';
import {StyleSheet, Image} from 'react-native';



const Logo = () =>{
    return(
        <Image
    source={require('../assets/images/choyceslogo.png')}
    style={styles.image}/>

    )
};

const styles=StyleSheet.create({
    image: {
        width: '65%',
        maxHeight: '30%',
        resizeMode: 'contain',
        alignSelf: 'center',
    }
   
});
export default Logo;