import React from 'react';
import {View, Text, Image} from 'react-native';
import { colors } from '../../utils';
import RedButton from '../../component/atoms/RedButton';
import { Welcomepage2 } from '../../assets';
import { OrangeButton } from '../../component/atoms';

const WelcomePage2 = ({navigation}) => {
    const handleGoTo = screen => {
        navigation.navigate(screen);
    };
    return (
        <View style={styles}>
            <View style={styles.circle2}/>
            <View style={styles.wrapper}>
                    <Image source={Welcomepage2} style={styles.img}/>
                    <Text style={styles.textgreen}>Berbagi dan mencari informasi terkait kelapa sawit dengan mudah dimana saja</Text>
            </View>
            <View style={styles.circle1}/>
            <View style={styles.circle3}/>
             <View style={{ flexDirection:"row", justifyContent:"space-between", bottom:0, marginBottom: 20, marginHorizontal:20,}}>
                <OrangeButton title="Lewati" onPress={() => handleGoTo('Login')}/>
                <RedButton title="Lanjut" onPress={() => handleGoTo('WelcomePage3')}/>
            </View>
        </View>
    );
};

const styles = {
    flex: 1,
    img : {
        height: 120,
        resizeMode: "contain",
        alignSelf: "center",
        marginBottom : 30,
        marginTop : 193,
    },
    wrapper : {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textgreen : {
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        color:colors.green2,
        fontSize: 18,
        alignItems: 'center',
        textAlign: 'center',
        marginHorizontal: 40,
        textShadowOffset: 5
    },
    circle1 : {
        position: 'absolute',
        width: 150,
        height: 150,
        borderRadius: 150/2,
        backgroundColor: colors.green5,
        top: -62,
        left: 300,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    circle2 : {
        position: 'absolute',
        width: 200,
        height: 200,
        borderRadius: 250/2,
        backgroundColor: colors.orange,
        top: 200,
        left: -120,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    circle3 : {
        width: 185,
        height: 185,
        borderRadius: 185/2,
        backgroundColor: colors.green5,
        bottom: -150,
        left: 300,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    }
}
export default WelcomePage2;