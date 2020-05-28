import React from 'react';
import { View , Text} from 'react-native';
import ImageCircle from '../ImageCircle';
import { PakarFemale, PakarMale, Petani } from '../../../assets';
import { colortext } from '../../../utils';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';
   
const ProfilBeranda=({fullName, role, img})=> {
    return (
        <View style={{flexDirection:'row'}}>
            <ImageCircle img={Petani}/>
            <View style={{flexDirection:'column', flex:1, marginTop:17}}>
                <Text style={styles.textnama} >{fullName}</Text>
                <Text style={styles.textrole}>{role}</Text>
                <Text style={styles.textrole}>{email}</Text>
            </View>
        </View>
    )
};
const styles ={
    textnama: {
        fontFamily: "Nunito",
        fontWeight: '700',
        fontSize: hp("2.2"),
        color: colortext.black
    },
    textrole: {
        fontFamily: "Nunito",
        fontWeight: '300',
        fontSize: hp('2.2'),
        color: colortext.black
    }
}
export default ProfilBeranda;