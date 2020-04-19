import React from 'react';
import { View } from 'react-native';
import { colors } from '../../utils';


const LoginTemplate = () => {
    return (
    <View style={{position:'relative'}}>
        <View style={styles.circle2}/>
        <View style={styles.circle1}/>
        <View style={styles.boxlogo}/>
    </View>
    )
};
const styles = {
    boxlogo : {
        position: 'absolute',
        backgroundColor: colors.white1,
        width: 100,
        height: 100, 
        justifyContent: 'center',
        marginTop: 143,
    },
    circle1 : {
        position: 'absolute',
        width: 233,
        height: 233,
        borderRadius: 233/2,
        backgroundColor: colors.red,
        top: -120,
        left: -70,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 20,
    },
    circle2 : {
        position: 'absolute',
        width: 367,
        height: 367,
        borderRadius: 367/2,
        backgroundColor: colors.orange,
        top: -160,
        left: 130,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 20,
    },
}
export default LoginTemplate;