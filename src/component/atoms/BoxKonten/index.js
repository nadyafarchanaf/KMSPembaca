import React from 'react';
import {Text, Image, View}  from 'react-native';
import { colors, colortext } from '../../../utils';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';
const BoxKonten = ({title,img, isi}) => {
    return (
    <View style={styles.wrapper}>
        <View>
                <Image source={img} style={styles.image}/>
        </View>
        <TouchableOpacity activeOpacity={0.7}>
            <View style={{marginRight:30}}>
                <Text style={styles.text}> {title}</Text>
                <Text style={styles.textisi}>{isi.split('').slice(0, 118)}...</Text>
            </View>
        </TouchableOpacity>
    </View>
        
    )
}

const styles = {
    wrapper : {
        position: 'relative',
        marginTop:15,
        flexDirection: 'row',
        marginHorizontal: 10,
        height:hp('13'),
        borderRadius: 10,
        backgroundColor: colors.white1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.07,
        shadowRadius: 10,
        elevation: 2
    },
    image : {
        height:hp('10'),
        width:wp('19'),
        margin: 10
    },
    text : {
        color:colortext.black,
        fontSize: hp('2'), 
        fontFamily: 'Nunito', 
        fontWeight: '600', 
        textTransform:'capitalize',
        textAlign: 'justify',
    },
    textisi: {
        color:colortext.black,
        fontSize: hp('2'), 
        fontFamily: 'Nunito', 
        fontWeight: '600', 
        textAlign: 'justify',
        width:wp('60'),
    }

}
export default BoxKonten;