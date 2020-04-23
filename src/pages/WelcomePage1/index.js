import React from 'react';
import {View, Text, Image} from 'react-native';
import { colors } from '../../utils';
import RedButton from '../../component/atoms/RedButton';
import { Logo } from '../../assets';
import { OrangeButton } from '../../component/atoms';

const WelcomePage1 = ({navigation}) => {
    const handleGoTo = screen => {
        navigation.navigate(screen);
    };
    return (
        <View style={styles}>
            <View style={styles.wrapper}>
                    <Image source={Logo} style={styles.img}/>
                    <Text style={styles.textgreen}>Selamat Datang</Text>
                    <Text style={styles.textred}>Aplikasi KMS Kelapa Sawit</Text>
            </View>
            <View style={styles.circle1}/>
            <View style={styles.circle2}/>
            <View style={styles.circle3}/>
            <View style={styles.button}>
                <OrangeButton title="Lewati" onPress={() => handleGoTo('Login')}/>
                <RedButton title="Lanjut" onPress={() => handleGoTo('WelcomePage2')}/>
            </View>
        </View>
    );
};

const styles = {
    flex: 1,
    button : {
        flexDirection:"row", 
        justifyContent:"space-between", 
        bottom:0, 
        marginBottom: 20, 
        marginHorizontal:20, 
    },
    img : {
        height: 120,
        resizeMode: "contain",
        alignSelf: "center",
        marginBottom : 30,
        marginTop : 200,
    },
    wrapper : {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textgreen : {
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        color:colors.green2,
        fontSize: 26,
        alignItems: 'center',
        },
    textred : {
        fontFamily: 'Nunito', 
        fontWeight: '600',
        color:colors.red,
        fontSize: 18,
        alignItems: 'center',
    },
    circle1 : {
        position: 'absolute',
        width: 150,
        height: 150,
        borderRadius: 150/2,
        backgroundColor: colors.red,
        top: -62,
        left: -40,
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
        width: 250,
        height: 250,
        borderRadius: 250/2,
        backgroundColor: colors.orange,
        top: 150,
        left: 330,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 20,
    },
    circle3 : {
        width: 185,
        height: 185,
        borderRadius: 185/2,
        backgroundColor: colors.red,
        bottom: -150,
        left: -63,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    }
}

export default WelcomePage1;