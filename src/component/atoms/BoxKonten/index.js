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
const BoxKonten = ({title,img, isi, kategori, onPress}) => {
    return (
    
    <TouchableOpacity style={styles.wrapper} activeOpacity={0.7} onPress={onPress}>
          <View style={{marginRight:5}}>
                <Text style={styles.textkategori}>{kategori}</Text>
                <Text style={styles.text}>{title}</Text>
                <Text style={styles.textisi}>{isi.slice(0,87)}</Text>
            </View>
        </TouchableOpacity>
    
        
    )
}

const styles = {
    wrapper : {
        position: 'relative',
        flexDirection: 'row',
        height:hp('13'),
        backgroundColor: colors.white1,
        borderBottomWidth:1,
        borderColor: colors.gray4
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
        fontWeight: '700', 
        textTransform:'capitalize',
        textAlign: 'justify',
    },
    textisi: {
        color:colortext.black,
        fontSize: hp('1.9'), 
        fontFamily: 'Nunito', 
        fontWeight: '600', 
        textAlign: 'justify',
        width:wp('73'),
        paddingBottom: 5
    },
    textkategori: {
        marginTop:6,
        color:colortext.black,
        fontSize: hp('1.9'), 
        fontFamily: 'Nunito', 
        fontWeight: '600', 
        textAlign: 'justify',
        width:wp('60'),
    }

}
export default BoxKonten;