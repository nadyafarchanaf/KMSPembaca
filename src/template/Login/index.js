import React from 'react';
import { View, Image, Text } from 'react-native';
import { colors } from '../../utils';
import { Logo } from '../../assets';


const LoginTemplate = () => {
    return (
    <View style={{position:'relative'}}>
        <View style={styles.circle2}/>
        <View style={styles.circle1}/>
        <View style={styles.boxlogo}>
            <Image source={Logo} style={styles.logo}/>
        </View>
        <Text style={styles.text}>KMS Kelapa Sawit</Text>
    </View>
    )
};
const styles = {
    text : {
        marginVertical: 20,
        alignItems: 'center',
        textAlign: 'center',
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        color:colors.red,
        fontSize: 24
    },
    logo : {
        marginTop: 5,
        resizeMode: "center",
        width: 110,
        height: 110, 
        alignSelf: "center",
    },
    boxlogo : {
        backgroundColor: colors.white1,
        width: 120,
        height: 120, 
        alignSelf: 'center',
        marginTop: 143,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 20,
        borderRadius: 15
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
        elevation: 10,
    },
}
export default LoginTemplate;